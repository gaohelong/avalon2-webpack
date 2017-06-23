console.log('login.js:引入成功');

/**
 * @desc view model 
 */
let vm = avalon.define({
    $id         : 'main',
    content     : '',                       // 属性(可在html中直接调用).
    array       : [1, 2],
});

// 改变view model的值
setTimeout(() => {
    vm.array.set(0, 444);
}, 3000);

/**
 * @desc 判断是否登录
 */
let url = 'http://hl.avalon2.com/';
$.ajax({
    method: 'POST',
    url: url + '/php/test.php',
    data: {
        user: 'helong',
        pwd:  '123456'
    },
    dataType: 'jsonp',
    success: response => {
        console.log(response);
    }
});

/**
 * @desc router
 */

// require html
var login = require('../../html/index');

// router map
var routerMap = {

};

// router
avalon.router.add("/*", (path) => { // 登录页及所有不符合规则的url跳转页面
    vm.content = '123';
});

avalon.router.add("/ddd/:ddd/:eee", (a) => {//:ddd为参数
    vm.currPath = this.path;
});

/**
 * @desc 启动路由监听
 */
avalon.history.start({
    root:           "/",    // 根路径.
    hashPrefix:     "",     // 滚动.
    // html5:          true,   // 是否使用HTML5 history.
    // autoScroll:     true,   // 
});

/**
 * @desc 启动扫描机制,让avalon接管页面
 */
avalon.scan(document.body);
