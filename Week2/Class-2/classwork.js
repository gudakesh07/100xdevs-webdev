// create the promisified version of fs.readfile,fs.writefile, cleanfile.

const fs = require("fs")

console.log("Start fo the file.....")

function readfile(resolve){
    console.log("readfile called")
    setTimeout(function () {
        console.log("callback based settime out completed.")
    }, 3000)
}

function setTimeoutPromisified(filename){
    console.log("setTimeoutPromisified called")
    return new Promise(readfile)
}

const p = setTimeoutPromisified()

function callback(){
    console.log("timer se bahar.")
}

p.then(callback)

console.log("---------end of the file-----")