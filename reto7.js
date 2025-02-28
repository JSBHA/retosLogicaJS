// Filtrar números pares
// 📌 Descripción:
// Dado un array de números, devuelve solo los que sean pares.

function filterEvens(numbers) {
  let numberPeers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numberPeers.push(numbers[i]);
    }
  }
  return numberPeers;
}

function filterEvens(numbers){
    return numbers.filter(num => num % 2 === 0)
}

console.log(filterEvens([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filterEvens([7, 11, 15])); // []
console.log(filterEvens([10, 20, 30, 40])); // [10, 20, 30, 40]
