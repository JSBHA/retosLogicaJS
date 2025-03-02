function countWords(str){
    let words = str.split(' ').reduce((acc, word) => 
        word !== "" ? acc + 1 : acc, 0 
    );
    return words
    
}


console.log(countWords("Hola mundo")); // 2
countWords("JavaScript es un lenguaje poderoso"); // 5