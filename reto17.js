function replaceVowels(str) {
  let volwes = "aeiouAEIOU";
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (volwes.includes(str[i])) {
      newStr += "*";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(replaceVowels("Hola mundo")); // "H*l* m*nd*"
console.log(replaceVowels("JavaScript")); // "J*v*Scr*pt"
