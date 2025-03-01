function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;

    for (let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count++;
        }
    }
    return count;
   
  }
  
  console.log(countVowels("hola")); // 2
  console.log(countVowels("javascript")); // 3
  console.log(countVowels("xyz")); // 0