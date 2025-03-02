function countWords(str){
    return str.trim().split(/\s+/).length;
}


console.log(countWords("Hola mundo")); // 2
console.log(countWords("JavaScript es un lenguaje poderoso")); // 5