function findLongestWord(str) {
  let words = str.split(" ");

  return words.reduce((longestWord, word) => {
    return word.length > longestWord.length ? word : longestWord;
  }, "");
}
console.log(findLongestWord("El desarrollo web es fascinante")); // "fascinante"
console.log(findLongestWord("JavaScript es un lenguaje poderoso")); // "JavaScript"
console.log(findLongestWord("Hola mundo")); // "mundo"
