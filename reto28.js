function orderByAge(people) {
  return people.sort((a, b) => a.age - b.age);
}

const people = [
  { name: "Ana", age: 25 },
  { name: "Juan", age: 30 },
  { name: "Luis", age: 20 },
  { name: "Maria", age: 22 },
];
console.log(orderByAge(people));
