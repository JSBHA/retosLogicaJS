function eliminarNegativos(arr) {
    let numPositive = arr.filter(num => num >= 0)
    console.log(numPositive)
}
eliminarNegativos([-1, 2, -3, 4, 0, -5]);
