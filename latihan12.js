const prompt = require("prompt-sync")({sigint : true});
let sisi = Number(prompt("masukan sisi :"))
let luas = sisi ^ 2
let volume = 4 * sisi

console.log("===============================")
console.log("          H A S I L            ")
console.log("-------------------------------")

console.log(" luas limus: " + luas+ "cm")
console.log(" volume limus: "+ volume)
console.log(`
luas limus\t\t: ${luas.toFixed(2)} cm
volume limus\t: ${volume.toFixed(4)} cm
`);