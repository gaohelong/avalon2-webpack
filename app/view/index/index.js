import {config, loginConfig} from '../globalConfig/'; // 默认加载globalConfig文件夹下的index.js文件.
require('../../component/'); // 加载组件.

/**
 * @desc 将自定义配置注入到avalon object中.
 */
avalon._customConfig = {
    config: config,
    loginConfig: loginConfig
}

/**
 * @desc import view.
 */
import {echartsVM} from '../echarts/echarts'; // echarts.
import {linesVM} from '../echarts/lines'; // lines.

/**
 * @desc avalon配置.
 */
avalon.config({
    debug: false,
    interpolate: ['{?','?}'] // 双花括号也默认是python一些著名模板的界定符，为了防止冲突，我们有更换界定符的需求。 这时我们可以通过这里来进行配置.
})

/**
 * @desc view model 
 */
let vm = avalon.define({
    $id         : 'main',
    content     : '',           // 默认为登录页. 注：属性(可在html中直接调用)
    array       : [1, 2],
    sysVer      : avalon._customConfig.config.version, // 系统版本.
});

// 改变view model的值
setTimeout(() => {
    vm.array.set(0, 444);
}, 3000);

/**
 * @desc 登录验证.
 */
var loginState = (callback) => {
    $.ajax({
        method: 'POST',
        url: avalon._customConfig.loginConfig.url,
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

// 报表
avalon.router.add("/echarts", (param) => {
    // 登录验证.
    loginState(() => {
        console.log('echarts');                                 // log.
        require('../../sass/modules/echarts/echarts');          // sass.

        let curHtml = require('../../html/echarts/echarts');    // html(路由匹配时在加载).
        vm.content = htmlReplace(curHtml);

        // require("../../view/echarts/echarts");               // js.
        echartsVM.init(); // 初始化.
    });
});

// 域名
avalon.router.add("/domain", (param) => {
    // 登录验证.
    loginState(() => {
        console.log('domain');                              // log.
        require('../../sass/modules/domain/domain');        // sass.
        require("../../view/domain/domain");                // js.
        let curHtml = require('../../html/domain/domain');  // 路由匹配时在加载html.
        vm.content = htmlReplace(curHtml);
    });
});

// 组件
avalon.router.add("/component", (param) => {
    // 登录验证.
    loginState(() => {
        console.log('component');                                   // log.
        require('../../sass/modules/component/component');          // sass.
        require("../../view/component/component");                  // js.
        let curHtml = require('../../html/component/component');    // html.
        vm.content = htmlReplace(curHtml);
    });
});

// 线图
avalon.router.add("/lines", (param) => {
    // 登录验证.
    loginState(() => {
        console.log('lines');                                 // log.
        require('../../sass/modules/echarts/lines');          // sass.

        let curHtml = require('../../html/echarts/lines');    // html(路由匹配时在加载).
        vm.content = htmlReplace(curHtml);

        // require("../../view/echarts/lines");               // js.
        linesVM.init(); // 初始化.
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
