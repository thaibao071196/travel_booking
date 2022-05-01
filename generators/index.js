// eslint-disable-next-line import/extensions
const containerGenerator = require('./container/index.js');

module.exports = (plop) => {
  plop.setGenerator('container', containerGenerator);
};
