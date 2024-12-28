const {createReadStream} = require("fs")

const stream = createReadStream("../content/big.txt", {highWaterMark: 200, encoding: "utf8"})

let counter = 0
stream.on("data", (result)=> {
    counter += 1
    console.log("Counter: " + counter)
    console.log(result)
})

stream.on("end", () => {
    console.log("Number of chunks received: " + counter)
})

stream.on("error", (error) =>{console.log(error)})