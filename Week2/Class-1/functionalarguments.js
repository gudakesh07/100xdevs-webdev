function sum(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function doOperation(a,b,op){
    return op(a,b)
}
let anss = sum(45,45)
console.log(anss)

let ans = doOperation(45,45,sum)
console.log(ans)