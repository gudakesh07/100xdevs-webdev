function sum(a,b){
    return parseInt(a) + parseInt(b);
}

let ans = sum("19",10)
console.log(ans)

function sums(n){
    let total = 0;
    for(let i = 1; i<= n;i++){
        total = total + i;
    }
    return total;
}

let answ = sums(50)
console.log(answ)