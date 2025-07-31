// function random(resolve){
//     setTimeout(resolve, 3000)
// }

const { resolve } = require("path");

// let p = new Promise(random)

// function callback(){
//     console.log("Promises Succeded")
// }

// p.then(callback)

// // create the promisified version of fs.readfile,fs.writefile, cleanfile.

// const fs = require("fs")

// console.log("Start fo the file.....")

// function readfile(resolve){
//     console.log("readfile called")
//     setTimeout(function () {
//         console.log("callback based settime out completed.")
//     }, 3000)
// }

// function setTimeoutPromisified(filename){
//     console.log("setTimeoutPromisified called")
//     return new Promise(readfile)
// }

// const q = setTimeoutPromisified()

// function callback(){
//     console.log("timer se bahar.")
// }

// q.then(callback)

// console.log("---------end of the file-----")



// class Promise2 {
//     constructor(fn){
//         function afterdone(){
//             this.resolve();
//         }
//         fn(afterdone)
//     }
//     then(callback){
//         this.resolve = callback;
//     }
// }

// function readfile(resolve){
//     console.log("readfile called")
//     setTimeout(function () {
//         console.log("callback based set time out completed.");
//         resolve();
//     }, 3000)
// }

// function setTimeoutPromisified(){
//     return new Promise2(readfile)
// }
// let k = setTimeoutPromisified()

// function callback(){
//     console.log("Hola amigo.")
// }

// k.then(callback)



function asyncop(resolve){
    setTimeout(resolve, 3000)
}

const p = new Promise(asyncop)

function cb(){
    console.log("3 seconds have passed by!!!")
}

p.then(cb)



function setTimeoutPromisified(time){
    return new Promise(function(resolve){
        setTimeout(resolve,time)
    })
}

