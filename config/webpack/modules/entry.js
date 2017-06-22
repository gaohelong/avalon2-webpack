const base = require('../base/base');

module.exports = ((entry) => {
    let All = {};

    if (base.mainJS) {
        const path = require('path');
        const files = require('../base/files');

        All = Object.assign(entry, {
            // mmRouter    : [path.resolve(files.appPath, 'mmRouter')],
            'Main'      : [path.resolve(files.jsPath, 'main')],
        });
    }

    return base.mainJS ? All : entry;
})({
    'Common': [
        'lib',
        'css',
        /* 'core-js', 'babel-polyfill' */
    ]
});
