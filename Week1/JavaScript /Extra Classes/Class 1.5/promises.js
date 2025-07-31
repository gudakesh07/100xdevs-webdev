    // Promises are syntatical sugar that makes the code more readable.
 const fs = require("fs")

    function kiratsReadfile(){
        console.log("inside Kiratsreadfile")
        return new Promise (function(resolve){
            console.log("inside promise")
            fs.readFile("a.txt","utf-8",function(err,data){
                console.log("before resolve")
                resolve(data);
            })
        })
    }

    function onDone(data){
        console.log(data)
    }

kiratsReadfile().then(onDone)

var d = new Date()

console.log(d.getDate())


var d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo");
    },10000)
});

function callback(){
    console.log(d)
}

console.log(d)
d.then(callback)


let p = new Promise(function(resolve){
    resolve("hi there");
});

p.then(function(){
    console.log(p)
})