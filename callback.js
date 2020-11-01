const arr = [1, 2, 3, 4, 5];

const arr2 = arr.map(v => v + 5);

console.log(arr2);

function add5(num) {
  return num + 5;
}

console.log(arr.map(add5));
