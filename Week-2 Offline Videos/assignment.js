function isAnagram(str1,str2){
    const sortedstring1 = str1.tolowercase().split("").sort().join("")
    const sortedstring2 = str2.tolowercase().split("").sort().join("")

    if(sortedstring1 === sortedstring2){
        return true;
    } else {
        return false
    }
}


let hghg = "Harkirat"

const hjhj = hghg.split("a")
console.log(hjhj) // [ 'H', 'rkir', 't' ]

// here a is called delimiter!!

let greeting = "Hello World!!"

console.log(greeting.split(" "))

// here space is a delimiter!!!

let str = ["h", "a", "r","k","i","r","a","t"]

console.log(str.join())

// h,a,r,k,i,r,a,t

console.log(str.join(""))   //harkirat

console.log(str.sort())


// slice and join dont mutate the variable but sort does.
