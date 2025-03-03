function findSecondLargest(nums) {
  let order = [...new Set(nums)].sort((a, b) => a - b);
  return order.length < 2 ? undefined : order[order.length - 2];
}

console.log(findSecondLargest([10, 5, 8, 20, 15])); // 15
console.log(findSecondLargest([1, 2, 3, 4, 5])); // 4
console.log(findSecondLargest([50, 50, 40, 30, 20])); // 40
console.log(findSecondLargest([100])); // undefined o mensaje de error (según cómo lo manejes)
console.log(findSecondLargest([7, 7, 7, 7])); // undefined o mensaje de error
