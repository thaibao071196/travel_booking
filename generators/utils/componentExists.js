const fs = require('fs');
const path = require('path');

const pageContainers = fs.readdirSync(
  path.join(__dirname, '../../src/containers'),
);

const components = [...pageContainers];

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
