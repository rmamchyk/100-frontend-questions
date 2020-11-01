function mul(x) {
  return (y) => {
    return (z) => {
      return x * y * z;
    }
  }
}

console.log(mul(5)(2)(2));
