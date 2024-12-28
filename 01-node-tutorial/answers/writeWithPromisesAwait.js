const {writeFile, readFile} = require("fs").promises

const FILE_DIR = "./temp.txt"

const writer = async() => {
    try{
        console.log("Writing the first line in await chain")
        await writeFile(FILE_DIR, "Writing the first line in promises await\n",{flag: "a"})
        console.log("Writing the second line in await chain")
        await writeFile(FILE_DIR, "Writing the second line in promises await\n",{flag: "a"})
        console.log("Writing the third line in await chain")
        await writeFile(FILE_DIR, "Writing the third line in promises await\n",{flag: "a"})
    } catch(error){
        console.log(error)
    }
}

const reader= async() => {
    try{
        console.log("Reading the file in await chain")
        const toPrint = await readFile(FILE_DIR, "utf8")
        console.log(toPrint)
    }catch(error){
        console.log(error)
    }
}

const readWrite = async() => {try{
    await writer()
    await reader()
}catch(error){
    console.log(error)
}}

readWrite()