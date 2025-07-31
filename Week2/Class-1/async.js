// const fs = require("fs")

// function print(err,data){
//     if(err){
//         console.log("Error found!!!")
//     }
//     else{
//         console.log(data)
//     }
// }

// const content = fs.readFile("b.txt","utf-8",print)

// const contents = fs.readFileSync("b.txt","utf-8")
// console.log(contents)


function timeout(){
    console.log("Hola amigo kaise ho thik ho!?")
}

console.log("Hellooo!!!")

setTimeout(timeout,1000)

console.log("Huhuhuhuhu")

let c = 0
for(let i = 0; i<10000000000;i++){
    c = c+i
}
console.log(c)

console.log("---- Done ho gaya-----")