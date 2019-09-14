var masukan_keyboard = require('readline-sync');

var pi = 3.14;
var jari_jari = masukan_keyboard.question("masukan nilai jari - jari = ");

var keliling = 2 * pi * jari_jari;

console.log("keliling lingkaran : "+keliling);