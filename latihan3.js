const prompt = require('prompt-sync')({sigint: true});
let sisi = Number(prompt('Masukan sisi ; '))
let alas= sisi ^ 2
let tinggi = 4 * sisi

console.log("===============================")
console.log("           H A S I L           ")
console.log("===============================")


console.log(" alas segitiga : " + alas+ "cm")
console.log(" tinggi segitiga : "+ tinggi)
console.log(`
alas segitiga\t\t: ${alas.toFixed(2)} cm
tinggi segitiga\t: ${tinggi.toFixed(2)} cm
`);