
var fs = require('fs');

// Create new file
fs.appendFile('mynewfile1.json', '', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.open('mynewfile2.txt', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

var HelloContent =  'Hello from VAR';
fs.writeFile('mynewfile2.txt',  HelloContent, function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.writeFile('mynewfile1.json', '{"name" : "yaser","age":33, "car" : "Accent"}', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
