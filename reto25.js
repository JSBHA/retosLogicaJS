function countLetters(letters) {
    let countLetter = {};
    let letter = letters.split("")

    for (let i = 0; i < letter.length; i++){
        let words = letter[i];
        if (!(words in countLetter)){
            countLetter[words] = 1;
        }else{
            countLetter[words]++;
        }
    }
    return countLetter
}

console.log(countLetters("banana"));
// { b: 1, a: 3, n: 2 }
console.log(countLetters("Mississippi"));
// { m: 1, i: 4, s: 4, p: 2 }
console.log(countLetters("HELLO"));
