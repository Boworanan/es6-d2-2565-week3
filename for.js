int = 1 
for(i = 1; i <= 12; i++ ){
    //console.log("2 x " +i + "=", 2 * 1)
    console.log(`2 x ${1} = ${2 * i}`)
}

console.log("==========================")

var num = [1,2,3,4,5,6,7,8,9,10,11,12]
for(var number of num){
    console.log(`3 x ${number} = ${3 * number}`)
}

console.log("==========================")

//for in
function Moblie(){
    this.model = "Galaxy"
    this.Color = "black"
    this.ram = "16GB"
}

let Sumsung = new Moblie()
for(let props in Sumsung){
    console.log(`${props} : ${Sumsung[props]}`)
}