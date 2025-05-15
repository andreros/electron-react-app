const fs = require('fs');
const path = require('path');

// === Configuration ===
const filePath = path.join(__dirname, '../dist/index.html');
const searchValue = '/static/';
const replaceValue = './static/';

// === Read, Replace, Write ===
fs.readFile(filePath, 'utf8', (readErr, data) => {
  if (readErr) {
    console.error('Error reading the file:', readErr);
    return;
  }

  const updatedData = data.replace(new RegExp(searchValue, 'g'), replaceValue);

  fs.writeFile(filePath, updatedData, 'utf8', writeErr => {
    if (writeErr) {
      console.error('Error writing to the file:', writeErr);
      return;
    }

    console.log(`Replaced "${searchValue}" with "${replaceValue}" in ${filePath}`);
  });
});
