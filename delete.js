const user = {
  firstName: 'Dylan',
  middleName: 'Christopher',
  lastName: 'Israel',
  nickName: 'Coding God'
};

const response = delete user.firstName;
console.log(response);
console.log(user.hasOwnProperty('lastName'));
console.log(user.hasOwnProperty('firstName'));
console.log(user.firstName);
console.log(user);
