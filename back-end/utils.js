const fs = require('fs/promises');

function getSimpsons () {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
}

function addSimpsons (simpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(simpsons))
}

module.exports = { getSimpsons, addSimpsons };