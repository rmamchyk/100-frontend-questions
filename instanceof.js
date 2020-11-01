console.log('hello world' instanceof String);

class Circle {}
const circle = new Circle();

console.log(circle instanceof Circle);
console.log(circle instanceof Object);
console.log({} instanceof Circle);
console.log({} instanceof Object);