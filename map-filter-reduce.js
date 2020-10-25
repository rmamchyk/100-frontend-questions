const prices = [1, 2, 3, 10, 20, 30];

const mapExample = prices.map(value => value + 1);
const filterExample = prices.filter(value => value < 10);
const reduceExample = prices.reduce((total, value) => {
  return total + value;
}, 0);

const mapWithFilter = prices.reduce((acc, value) => {
  if (value < 10) {
    acc.push(value + 1);
  }
  return acc;
}, []);

console.log(prices);
console.log(mapExample);
console.log(filterExample);
console.log(reduceExample);
console.log(mapWithFilter);