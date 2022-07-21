const fs = require('fs')

// console.log("FS", fs)

// console.log("Hello World")

try {
    fs.writeFileSync("hello.txt", "Hello Form Tarun Tomar 123")
    console.log("Writing successfully complete")
} catch (error) {
    console.log("AN ERROR OCCURED >>>>", error)
}