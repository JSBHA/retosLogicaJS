function isPalindrome(str){
    return str === [...str].reverse().join('')
}


console.log(isPalindrome("oso"));       // true
console.log(isPalindrome("reconocer")); // true
console.log(isPalindrome("javascript"));// false
console.log(isPalindrome("ana"));  