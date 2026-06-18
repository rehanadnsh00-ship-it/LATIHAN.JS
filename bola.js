const prompt = require('prompt-sync')({sigint : true});
let panjang = Number(prompt("masukan panjang:"))
let lebar = Number(prompt("masukan lebar:"))
let tinggi = Number(prompt("masukan tinggi:"))
let volume = panjang * lebar * tinggi
let luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

console.log("===============================")
console.log("             H A S I L         ")
console.log("-------------------------------")

console.log(`volume bola\t\t: ${volume.toFixed(2)} cm3`)
console.log(`Luas permukaan bola\t: ${luasPermukaan.toFixed(2)} cm2`)