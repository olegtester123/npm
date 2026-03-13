// SAST: path traversal - user input in file path
const fs = require('fs');
const path = require('path');

function readUserFile(filename) {
  return fs.readFileSync(path.join(__dirname, 'uploads', filename), 'utf8');
}

function loadConfig(userPath) {
  return fs.readFileSync(userPath, 'utf8');
}

module.exports = { readUserFile, loadConfig };
