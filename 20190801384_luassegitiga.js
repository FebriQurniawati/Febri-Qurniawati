var masukan_keyboard = require('readline-sync');

var alas = masukan_keyboard.question("masukan nilai alas = ");
var tinggi = masukan_keyboard.question("masukan nilai tinggi = ");

var luas = alas * tinggi / 2;

console.log("luas segitiga : "+luas);