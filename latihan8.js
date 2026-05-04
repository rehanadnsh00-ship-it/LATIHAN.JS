const prompt = require("prompt-sync")({sigint : true});
let sisi = Number(prompt("masukan isi sisi :"))
let luas = sisi ^ 2
let keliling = 4 * sisi

console.log("===============================")
console.log("             H A S I L         ")
console.log("-------------------------------")

console.log(" luas lingkaran : " + luas+ "cm")
console.log(" keliling lingkaran: "+ keliling)
console.log(`
luas lingkaran\t\t: ${luas.toFixed(2)})
keliling lingkaran\t: ${keliling.toFixed(4)}
`);