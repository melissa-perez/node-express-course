const EventEmitter = require("events")

const customEmitter = new EventEmitter()

customEmitter.on("error", (err_msg)=>{
    console.error(`${err_msg}`)
})

customEmitter.on("request", (req_type, req_number) => {
    console.log(`${req_number}: ${req_type}`)
})

setInterval(() => {
    customEmitter.emit("timer", "hi there");
}, 2000)

customEmitter.emit('error', new Error("Oops, there was an issue processing your request."))
customEmitter.emit('request', "A new process has been requested.", 202)
customEmitter.on("timer", (msg) => console.log(msg))
