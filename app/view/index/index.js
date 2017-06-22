console.log('index.js:引入成功');

/* requrite */
var avalon = require('avalon2');
require('../../../app/mmRouter'); // 加载编译好的mmRouter

let vm = avalon.define({
    $id         : "main",
    name        : "龙cloud",
    currPath    : '',
    array:      [11, 22, 33, 44, 55, 66]
});

setTimeout(() => {
    vm.array.set(0, 444);
}, 3000);

/* ajax */
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

/* fetch */
// fetch('/php/test.php', {
//     method: "POST",
//     credentials: 'include',
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//     },
//     body: "user=helong&pwd=123456"
// }).then(function(res) {
//     if (res.ok) {
//         console.log("Perfect! Your settings are saved.");
//     } else if (res.status == 401) {
//         console.log("Oops! You are not authorized.");
//     }
// }, function(e) {
//     console.log("Error submitting form!");
// });

/* router */
avalon.router.add("/aaa", function (a) {
    vm.currPath = this.path;
});

avalon.router.add("/bbb", function (a) {
    vm.currPath = this.path;
});

avalon.router.add("/ccc", function (a) {
    vm.currPath = this.path;
});

avalon.router.add("/ddd/:ddd/:eee", function (a) {//:ddd为参数
    vm.currPath = this.path;
});

avalon.router.add("/eee", callback);

// callback
function callback() {
    vm.currPath = this.path;
    var params = this.params;
    if ("time" in params) {
        params.time = avalon.filters.date(params.time, "yyyy年M月dd日");
    }
    vm.params = params;
    vm.query = this.query;
    vm.args = "[" + [].slice.call(arguments, 0) + "]";

    console.log(vm);
}

// 启动路由监听
avalon.history.start({
    root:           "/",    // 根路径.
    // html5:          true,   // 是否使用HTML5 history.
    // autoScroll:     true,   // 
    // hashPrefix:     "",     // 滚动.
});

// 启动扫描机制,让avalon接管页面
avalon.scan(document.body);
