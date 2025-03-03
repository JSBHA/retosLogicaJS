function findLongestWord(str){
    let words = str.split(" ");
    let longestWord = '';

    for (let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord("El desarrollo web es fascinante")); // "fascinante"
console.log(findLongestWord("JavaScript es un lenguaje poderoso")); // "JavaScript"
console.log(findLongestWord("Hola mundo")); // "mundo"
