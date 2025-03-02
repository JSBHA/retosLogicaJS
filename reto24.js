function isPalindrome(str){
    let words = str.toLowerCase()
    return words === [...words].reverse().join('')

}


console.log(isPalindrome("Anna")); // false  
console.log(isPalindrome("anna")); // true  
console.log(isPalindrome("AnNa")); // false  
console.log(isPalindrome("oso"));  // true  
console.log(isPalindrome("casa")); // false  