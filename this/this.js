console.log(this)

const exampleObj = {
  first: 'Dylan',
  last: 'Israel',
  full() {
    return `${this.first} ${this.last}`;
  }
};

console.log(exampleObj.full());


const exampleObj2 = {
  first: 'Dylan',
  last: 'Israel',
  full: () => {
    return `${this.first} ${this.last}`;
  }
};

console.log(exampleObj2.full());
