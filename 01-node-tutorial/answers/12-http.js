const http = require("http")

const server = http.createServer((req, res) => {
    //console.log(req)
    //res.write("Welcome to our home page")
    if (req.url === "/") {
        res.end("Welcome to the home page.")
    } else if (req.url === "/about") {
        res.end("This is the about page.")
    } else {
        res.end(`<h1>Oops!</h1
            <p>We can\'t load the page you are looking for.</p>
            <a href="/">Back home</a>`)
    }
})

server.listen(3000)
