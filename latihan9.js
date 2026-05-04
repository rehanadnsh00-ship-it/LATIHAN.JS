const prompt = require("prompt-sync")({sigint : true});
let sisi = Number(prompt("masukan sisi :"))
let volume = sisi ^ 2
let luas = 4 * sisi

console.log("===============================")
console.log("             H A S I L         ")
console.log("-------------------------------")

console.log(" volume kubus:" + volume+"cm")
console.log(" luas kubus: "+ luas)
console.log(`
volume kubus\t\t: ${volume.toFixed(2)}) cm
luas kubus\: ${luas.toFixed(4)} cm
`);