function removeDuplicates(str){
    return [...new Set(str)];

}


console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates(["a", "b", "a", "c", "b"])); // ["a", "b", "c"]