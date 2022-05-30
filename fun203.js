function addPure(a,b){
    return a+b
}

let sum = addPure(1,6)
//console.log(sum)

let b = 7
function sideEffect(a){
    return `${a + b}`
}

let sum2 = sideEffect(1)
console.log(sum2)