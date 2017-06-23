console.log('index.js:引入成功');

/* requrite */
var avalon = require('avalon2');
require('../../../app/mmRouter'); // 加载编译好的mmRouter

var a = require('../../html/tab/tab1.html');
var b = require('../../html/tab/tab2.html');
var c = require('../../html/tab/tab3.html');

var vm = avalon.define({
    $id: 'main',
    main: '',
    aaa: "第一页的内容",
    bbb: "第二页的内容",
    ccc: "第三页的内容",
});

var map = {
    'aaa': a,
    'bbb': b,
    'ccc': c
};

avalon.router.add("/:tab", function (param) {
    vm.main = map[param];
});

avalon.history.start({
    root: "/",
    hashPrefix: ""
});

var hash = location.hash.replace(/#!?/, '');
// avalon.router.navigate(hash || '/aaa', 1); // 默认打开

avalon.scan(document.body);
