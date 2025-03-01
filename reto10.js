function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;

    for (let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++
        }
    }
    return count ++
   
  }
  
  console.log(countVowels("hola")); // 2
  console.log(countVowels("javascript")); // 3
  console.log(countVowels("xyz")); // 0
  console.log(countVowels("perraMalparida")); // 0

