const express = require("express")
const app = express()
const PORT = 3000
const logger = require("./logger")
const { products, people } = require("./data");

app.use(express.static("./public"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(logger)

app.get("/", (req, res) => {
    res.status(200).send("Home")
})

app.get("/api/v1/test", (req, res) => {
    res.status(200).json({ message: "It worked!" })
})

app.get("/api/v1/products", (req, res) => {
    res.status(200).json(products)
})

app.get("/api/v1/products/:productID",(req, res) => {
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind);
   console.log(product)
    if (product === undefined) res.status(404).json( { message: "That product was not found."})
    res.status(200).json(product)
})

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

app.get("/api/v1/people", (req, res)=>{
    res.status(200).json(people)
})

app.post("/api/v1/people", (req, res)=>{
   const {name} = req.body
    if(name) {
        // status 201: object was created
        people.push({ id: people.length + 1, name: req.body.name });
        res.status(201).json({ success: true, name: req.body.name });
    }
    else {
        res.status(400).json({success: false, message: "Please provide a name"});
    }
})

app.all("*", (req, res) => {
    res.status(404).send("<h1>Resource not found.</h1>")
})

app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`)
})