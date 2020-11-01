const nums = [1, 1, 2, 2, 3, 3, 3];

const numSet = new Set([...nums]);

console.log(numSet);


const singleValueArr = [];
nums.forEach(value => {
  if (!singleValueArr.includes(value)) {
    singleValueArr.push(value)
  }
})

console.log(singleValueArr);