function countVowels(str) {
  const vowels = 'aeiou';
  return str.toLowerCase().split('').reduce((count, letter) => {
    return vowels.includes(letter) ? count + 1 : count;
  }, 0);
}

console.log(countVowels("hola")); // 2
console.log(countVowels("javascript")); // 3
console.log(countVowels("xyz")); // 0
