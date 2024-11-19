//console.log('Express Tutorial')
const express = require("express")
const app = express()
const PORT = 3000
const { products } = require("./data");

app.use(express.static("./public"))

app.get("/api/v1/test", (req, res) => {
    res.status(202).json({ message: "It worked!" })
})

app.get("/api/v1/products", (req, res) => {
    res.status(202).json(products)
})

/*app.get("/", (req, res)=>{
    console.log("User hit the resource.")
    res.status(200).send("Home Page")
})

app.get("/about", (req, res)=>{
    console.log("User hit the resource.")
    res.status(200).send("About Page")
})*/

app.all("*", (req, res) => {
    res.status(404).send("<h1>Resource not found.</h1>")
})

app.listen(3000, () => {
    console.log(`The server is listening on port: ${PORT}`)
})