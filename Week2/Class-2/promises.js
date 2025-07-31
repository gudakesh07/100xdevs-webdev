// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
// }

const { resolve } = require("path")


// function callback(){
//     console.log("3 seconds have passed!!!")
// }

// setTimeoutPromisified(3000).then(callback)


// function waitfor3sec (resolve){
//     setTimeout(resolve,10000)
// }
// function setTimeoutPromisified(){
//     return new Promise(waitfor3sec)
// }
// function main(){
//     console.log("Hula la la la")
// }

// waitfor3sec(main)

// setTimeoutPromisified(1000).then(main)

// function random(){

// }
// let p = new Promise(random)


// function callback(){
//     console.log("Promise succeded.")
// }

// p.then(callback)

function huhu(resolve){
    let c = 0
    for(let i = 0; i < 10000000; i++){
        c = c + i;
    }
    resolve("Hi there Raj!!!")
}

let j = new Promise(huhu)
// function cb(){
//     console.log("Hello World.")
// }

function cb(str){
    console.log(str)
}
j.then(cb)