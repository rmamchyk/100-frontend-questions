function example(param) {
  return param + 1;
}

const example2 = param => param + 1;

console.log(example(1));
console.log(example2(1));


const user = {
  firstName: 'Dylan',
  lastName: 'Israel',
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(user.fullName());