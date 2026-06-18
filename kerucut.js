const prompt = require("prompt-sync")({sigint: true});

let jariJari = Number(prompt("masukan jari-jari :"))
let tinggi = Number(prompt("masukan tinggi :"))
let garispelukis = Number(prompt("masukan garis pelukis :"))

let volume = 3.14 * jariJari * jariJari * tinggi / 3
let luasPermukaan = 3.14 * jariJari * (jariJari + garispelukis)  

console.log("===============================")
console.log("           H A S I L           ")
console.log("-------------------------------")

console.log(` 
    volume kerucut\t: ${volume.toFixed(2)} cm3
    Luas permukaan kerucut\t: ${luasPermukaan.toFixed(2)} cm2`);
