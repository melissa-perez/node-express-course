const {writeFileSync, readFileSync} = require("fs")
const path = "./temporary/firstA.txt"

// write three lines to fileA.txt using append flag in temporary dir
writeFileSync(path, "My name is Melissa.", {flag: "a"})
writeFileSync(path, "I am enrolled in the Impala node class.", {flag: "a"})
writeFileSync(path, "I am excited to learn node from this course.", {flag: "a"})

// read fileA.txt and console log
const readFileTemp = readFileSync(path, "utf8")
console.log(readFileTemp)