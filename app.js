const fs = require('fs');

const name = 'Thomas';

fs.writeFile('users.txt', 'Name: ' + name, (error) => {
  if (error) {
    console.log(error.message);
    return false;
  }
  console.log('File was written.');
});
