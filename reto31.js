// Generar un número aleatorio dentro de un rango
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(1, 10)); // Puede ser cualquier número entre 1 y 10
console.log(generateRandomNumber(20, 50)); // Entre 20 y 50
console.log(generateRandomNumber(-10, 10)); // Entre -10 y