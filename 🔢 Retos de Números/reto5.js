
// Ordenar y eliminar duplicados
// 📌 Descripción:
// Dado un array de números, devuelve uno nuevo sin duplicados y ordenado de menor a mayor.

function cleanAndSort(arr) {
    let order = [...new Set(arr)].sort((a, b) => a - b);
    return order;
}

console.log(cleanAndSort([5, 3, 8, 3, 1, 5])); // [1, 3, 5, 8]
console.log(cleanAndSort([10, 2, 10, 5, 2])); // [2, 5, 10]
console.log(cleanAndSort([])); // []
