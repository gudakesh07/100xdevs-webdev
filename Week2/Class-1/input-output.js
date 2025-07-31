const fs = require("fs")

const contents = fs.readFile("a.txt", "utf-8",function(err,data){
    console.log(data)
})

const content = fs.readFileSync("b.txt", "utf-8")
console.log(content)