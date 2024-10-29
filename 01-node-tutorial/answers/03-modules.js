const {myName, myCourseName, myClassName} = require("./04-names")
const dateLog = require("./05-utils")
const altFlavor = require("./06-alternative-flavor")

// don't store mind-grenade
require("./07-mind-grenade")

// use names information in a console log
console.log(`Hello student ${myName}. You are enrolled in ${myClassName} learning about ${myCourseName}.`)
// use function from utils
dateLog(myName)
// log data from alternative-flavor
console.log(altFlavor)