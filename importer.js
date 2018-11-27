const path = require('path');

function importer(url) {
  if (url[0] === '~') {
    url = path.resolve('node_modules', url.substr(1));
  }

  return { file: url };
}

module.exports = importer;
