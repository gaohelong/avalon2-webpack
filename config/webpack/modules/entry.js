const base = require('../base/base');

module.exports = ((entry) => {
    let All = {};

    if (base.mainJS) {
        const path = require('path');
        const files = require('../base/files');

        All = Object.assign(entry, {
            'Main': [path.resolve(files.jsPath, 'main')],
        });
    }

    return base.mainJS ? All : entry;
})({
    'Common': [
        'lib',
        'sass',
        /* 'core-js', 'babel-polyfill' */
    ],
    // 'echarts': ['echarts'], // 入口文件添加echars.
});
