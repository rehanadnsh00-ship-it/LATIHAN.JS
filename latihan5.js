const prompt= require("prompt-sync")({sigint: true});
let sisi = Number(prompt("masukan sisi :"))
let luas = sisi ^ 2
let keliling = 4 * sisi

console.log("===============================")
console.log("            H A S I L          ")
console.log("-------------------------------")

console.log(" luas trapesium : " + luas+ "cm")
console.log(" keliling trapesium : "+ keliling)
console.log(`
luas trapesium\t\t: ${luas.toFixed(2)} cm
keliling trapesium\t: ${keliling.toFixed(2)} cm
`);