function removeSpaces(str){
    let deleteSpace = str.replace(/\s/g, '')
    return deleteSpace

}

console.log(removeSpaces("Hola mundo")); // "Holamundo"
removeSpaces("  JavaScript  es genial "); // "JavaScriptesgenial"
