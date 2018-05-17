/**
 * Using fs, Write into a file ./test.txt the sentence "Hello World!" in this project's root folder.
 * When the write is complete, console.log that the file was saved successfully.
 */

// your code goes here

const fs = require('fs');
const fileName = './test.txt'
const value = 'Hello World!'
fs.writeFile(fileName, value, function (err) {
  if (err) {
    return console.log(err);
  }

  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(`Contents of ${fileName} are: `,data);
  });
}); 