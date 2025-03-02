function replaceVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "*");
}

console.log(replaceVowels("Hola mundo")); // "H*l* m*nd*"
console.log(replaceVowels("JavaScript")); // "J*v*Scr*pt"
