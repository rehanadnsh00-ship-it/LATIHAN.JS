const prompt= require("prompt-sync")({sigint :true});
let sisi = Number(prompt("masukan sisi :"))
let luas = sisi ^ 2
let keliling = 4 * sisi

console.log("===============================")
console.log("            H A S I L          ")
console.log("-------------------------------")

console.log("luas belahketupat : " + luas+ "cm")
console.log(" keliling belah ketupat: "+keliling)
console.log(`
luas belahketupat\t\t: ${luas.toFixed(2)} cm
keliling belahketupat\t: ${keiling.toFixed(4)} cm
`);