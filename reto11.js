//Invertir una cadena
// 📌 Descripción:
// Dada una palabra, devuelve la misma pero al revés.

function reverseString(str) {
  return str.split('').reverse().join("");
}

console.log(reverseString("javascript")); // "tpircsavaj"
console.log(reverseString("hola")); // "aloh"
console.log(reverseString("12345")); // "54321"
