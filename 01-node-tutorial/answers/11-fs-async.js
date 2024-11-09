const {readFile, writeFile} = require("fs")
const path = "./temporary/fileB.txt"
// write three lines to temporary/fileB.txt and use append flag
console.log("at the start")
writeFile(path, "This is line 1.\n", {flag: "a"}, (err, result) => {
    console.log("at point 1");
    if (err) {
        console.log("This error happened: ", err);
    } else {
        writeFile(path, "This is line 2.\n", {flag: "a"}, (err, result) => {
            console.log("at point 2");
            if (err) {
                console.log("This error happened: ", err);
            } else {
                writeFile(path, "This is line 3.\n", {flag: "a"}, (err, result) => {
                    console.log("at point 3");
                    if (err) {
                        console.log("This error happened: ", err);
                    } else {
                        // read fileB.txt
                        readFile(path, "utf8", (err, result) => {
                            if (err) {
                                console.log(err)

                            } else {
                                console.log("Success. Reading text file now...\n")
                                console.log(result)
                            }
                        })

                    }
                })
            }
        })
    }
});
console.log("at end");



