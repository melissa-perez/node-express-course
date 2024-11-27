const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
const PORT = 3000

// data
const { products} = require("./data");
// routers
const peopleRouter = require("./routes/people")
const productsRouter = require("./routes/products")
// middleware
const logger = require("./logger")
const auth = require("./auth")

app.use(express.static("./public"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())
app.use(logger)
app.use("/api/v1/people", peopleRouter)
app.use("/api/v1/products", productsRouter)

app.get("/api/v1/query", (req, res) => {
    console.log(req.query)
    const {search, limit = 5, priceUnder} = req.query
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.includes(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (priceUnder) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.price < parseFloat(priceUnder)
        })
    }

    if(sortedProducts.length < 1) {
        res.status(200).json({search: true, data:[]})
    }
    res.status(200).send(sortedProducts)
})

// optional
app.get("/test", auth, (res, req)=> {
    res.status(200).json({message: `Welcome, ${req.user}! `})
})

app.post("/logon", (req, res) => {
    const {name} = req.body

    if(name){
        return res.status(201).cookie("name", name).json({message: `Hello, ${name}`})
    }
    res.status(400).json({message: "Error: name not found in request"})
})

app.delete("/logoff", (req, res) => {
    res.status(200).clearCookie("name").json({message: "User has logged off."})
})

app.all("*", (req, res) => {
    res.status(404).send("<h1>Resource not found.</h1>")
})

app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`)
})
