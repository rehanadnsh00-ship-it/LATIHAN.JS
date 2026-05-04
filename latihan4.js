const prompt = require('prompt-sync')({sigint: true});
let sisi = Number(prompt('masukan sisi : '))
let alas= sisi ^ 2
let tinggi = 4 * sisi

console.log("===============================")
console.log("               H A S I L       ")
console.log("-------------------------------")

console.log(" alas jajar genjang: " + alas+ "cm")
console.log("tinggi jajar genjang :"+ tinggi)
console.log(`
alas jajar genjang\t\t: ${alas.toFixed(2)} cm
tinggi jajar genjang\t: ${tinggi.toFixed(2)} cm
`);