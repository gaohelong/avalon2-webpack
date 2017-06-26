const base  = require('../base/base'),
      files = require('../base/files'),
      path  = require('path');

module.exports = {
    alias: {
        'lib': path.resolve(files.staticPath, 'index.js'),
        'sass': path.resolve(files.sassPath, 'main.' + base.cssType)
    },
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json', '.scss', '.html']
};
