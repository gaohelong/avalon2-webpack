/**
 * @desc view model 
 */
let vm = avalon.define({
    $id         : 'main',
    content     : '',           // 默认为登录页. 注：属性(可在html中直接调用)
    array       : [1, 2],
});

// 改变view model的值
setTimeout(() => {
    vm.array.set(0, 444);
}, 3000);

/**
 * @desc 登录验证.
 */
var loginState = (callback) => {
    let url = 'http://hl.avalon2.com/';
    $.ajax({
        method: 'POST',
        url: url + '/php/test.php',
        data: {
            user: 'helong',
            pwd:  '123456'
        },
        dataType: 'jsonp',
        success: (response) => {
            if (response.code != 0) { // 未登录则跳转到登录页.
                window.location = '../#!';
            } else {
                callback();
            }
        }
    });
};

/**
 * @desc router
 */

// router map
var routerMap = {};

// 域名
avalon.router.add("/domain", (param) => {
    // 登录验证.
    loginState(() => {
        console.log('domain');                              // log.
        require('../../sass/modules/domain/domain');        // sass.
        require("../../view/domain/domain");                // js.
        let curHtml = require('../../html/domain/domain');  // 路由匹配时在加载.
        vm.content = htmlReplace(curHtml);
    });
});

// 用户设置
avalon.router.add("/setting/:ddd/:eee", (param) => {    //:ddd为参数
    // let curHtml = require('../../html/setting/setting');
    vm.content = 'curHtml';
});

//登录 
avalon.router.add("\/*\ig", (param) => {
    console.log('login');                               // log.
    require("../../sass/modules/login/login");          // sass.
    require("../../view/login/login");                  // js.
    let curHtml = require("../../html/login/login");    // html.
    vm.content = htmlReplace(curHtml);

    // 懒加载.
    // require.ensure(["../../view/login/login", "../../html/login/login"], (js, html) => {
    //     let _js = require("../../view/login/login"),    // js
    //         _html = require("../../html/login/login");  // html
    //
    //     vm.content = htmlReplace(_html);
    // }, 'login');
});

/**
 * @desc 处理avalon-bug.
 */
let htmlReplace = (html) => {
    html = html.replace(/\[{/ig, '"');
    html = html.replace(/}\]/ig, '"');
    return html;
};

/**
 * @desc 启动路由监听
 */
avalon.history.start({
    root:           "/",    // 根路径.
    hashPrefix:     "",     // .
    // html5:          true,   // 是否使用HTML5 history.
    // autoScroll:     true,   // 滚动.
});

/**
 * @desc 启动扫描机制,让avalon接管页面
 */
avalon.scan(document.body);

console.log('login.js:引入成功');
