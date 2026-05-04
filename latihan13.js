const prompt = require("prompt-sync")({sigint : true});
let sisi = Number(prompt("masukan sisi:"))
let luas = sisi ^ 2
let volume = 4 * sisi

console.log("===============================")
console.log("             H A S I L         ")
console.log("-------------------------------")

console.log("luas tabung: "+ luas+ "cm")
console.log(" volume tabung: + volume")
console.log(`
luas tabung\t\t: ${luas.toFixed(2)}
volume tabung\t: ${volume.toFixed(4)}
`);