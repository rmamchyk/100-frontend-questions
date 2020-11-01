const user1 = {
  first: 'Dylan',
  last: 'Israel'
};
const user2 = {
  last: 'Israel',
  first: 'Dylan'
};

console.log(JSON.stringify(user1) === JSON.stringify(user2));
console.log(user1 === user2);

function isSame(obj1, obj2) {
  const props1 = Object.getOwnPropertyNames(obj1);
  const props2 = Object.getOwnPropertyNames(obj2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (let prop of props1) {
    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }

  return true;
}

console.log(isSame(user1, user2));