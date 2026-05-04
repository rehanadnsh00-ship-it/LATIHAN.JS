const prompt = require("prompt-sync")({sigint : true});
let sisi = Number(prompt("masukan sisi :"))
let luas = sisi^ 2
let keliling = 4 * sisi

console.log("===============================")
console.log("           H A S I L           ")
console.log("-------------------------------")

console.log(" luas layanglayang : " + luas +"cm")
console.log(" keliling layanglayang: "+keliling)
console.log(`
luas layanglayang\t\t :${luas.toFixed(2)}) cm
keliling layanglayang\t: ${keliling.toFixed(4)} cm
`);