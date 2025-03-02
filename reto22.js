function sumDigits(num){
    return[...num.toString()]
   .map(Number)
   .reduce((a,b) => a + b, 0)
}


console.log(sumDigits(123)); // 6 (1 + 2 + 3)
console.log(sumDigits(987)); // 24 (9 + 8 + 7)