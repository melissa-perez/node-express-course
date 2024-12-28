const {writeFile, readFile} = require("fs").promises

const FILE_DIR = "./temp.txt"

writeFile(FILE_DIR, "Writing the first line in promises then\n",{flag: "a"}).then(() => {
    console.log("Writing the first line in then chain")
    return writeFile(FILE_DIR, "Writing the second line in promises then\n",{flag: "a"})
}).then(() => {
    console.log("Writing the second line in then chain")

    return writeFile(FILE_DIR, "Writing the third line in promises then\n",{flag: "a"})
}).then(() => {
    console.log("Writing the third line in then chain")

    return readFile(FILE_DIR, "utf8")}).then((result) =>{
        console.log("Reading the file in then chain")
        console.log(result)}).catch((error) => {
    console.log("An error occurred: ", error)
})
