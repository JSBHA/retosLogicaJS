function countWords(words) {
  let wordCount = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (wordCount[word]) {
      wordCount[word]++; // Si la palabra ya existe, suma 1
    } else {
      wordCount[word] = 1; // Si no existe, inicialízala en 1
    }
  }
  return wordCount;
}

function countWords(words) {
  return words.reduce((wordCount, word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
    return wordCount;
  }, {});
}

console.log(
  countWords(["manzana", "pera", "manzana", "naranja", "pera", "manzana"])
);
// { manzana: 3, pera: 2, naranja: 1 }

console.log(countWords(["sol", "luna", "sol", "sol", "estrella"]));
// { sol: 3, luna: 1, estrella: 1 }
