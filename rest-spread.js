function add(...args) {
  console.log(Array.prototype.slice.call(arguments));
  console.log(Array.from(arguments));

  const nums = [1, 2, 3, 4, ...args];
  console.log(args);
  console.log(nums);
}

add(5, 6, 7, 8);