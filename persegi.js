const prompt = require('prompt-sync')({sigint: true});
let sisi = Number(prompt('Masukan sisi ; '))
let luas = sisi ^ 2
let keliling = 4 * sisi

console.log("===============================")
console.log("           H A S I L           ")
console.log("===============================")


console.log(
`Luas Persegi\t\t: ${ luas.toFixed(2) } cm2
Kelilling Persegi\t: ${ keliling.toFixed(2) } cm`);