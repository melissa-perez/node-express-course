const os = require("os")

const user = os.userInfo()
console.log(user)

console.log(`The system uptime is ${os.uptime()} seconds.`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    version: os.version(),
    platform: os.platform(),
    architecture: os.arch()
}

console.log(currentOS)

console.log(`The hostname is ${os.hostname()}`)