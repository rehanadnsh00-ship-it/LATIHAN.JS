const prompt = require("prompt-sync")({sigint : true});
let sisi = Number(prompt("masukan sisi"))
let luas  = sisi ^ 2
let volume = 4 * sisi

console.log("===============================")
console.log("            H A S I L          ")
console.log("-------------------------------")

console.log(" luas prismasegitiga :" + luas+ "cm")
console.log(" volume prismasetiga: "+ volume)
console.log(`
luas prismasegitiga\t\t: ${luas.toFixed(2)})
volume prismasegitiga\t: ${voluem.toFixed(4)}
`);