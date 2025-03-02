function toTitleCase(str){
    return str.replace(/\b\w/g, letter => letter.toUpperCase())

}

console.log(toTitleCase("hola mundo desde javascript"));