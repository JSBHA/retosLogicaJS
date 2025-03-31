function sumarPares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

function sumOdd(arr) {
  return arr.filter((num) => num % 2 === 1).reduce((acc, num) => acc + num, 0);
}
console.log(sumOdd([1, 2, 3, 4, 5, 6]));
console.log(sumarPares([1, 2, 3, 4, 5, 6]));
