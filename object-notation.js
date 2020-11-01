const user = {
  firstName: 'Dylan',
  middleName: 'Christopher',
  lastName: 'Israel',
  nickName: 'Coding God'
};

console.log(user.firstName + ' ' + user.lastName);
console.log(user['firstName']);

for (let prop in user) {
  console.log(user[prop]);
}
