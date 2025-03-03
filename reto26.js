function countLetters(letters) {
  return letters.split("").reduce((words, letter) => {
    words[letter] = (words[letter] || 0) + 1;
    return words;
  }, {});
}

console.log(countLetters("banana"));
// { b: 1, a: 3, n: 2 }
console.log(countLetters("Mississippi"));
// { m: 1, i: 4, s: 4, p: 2 }
console.log(countLetters("HELLO"));
