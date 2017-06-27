let vm = avalon.define({
    $id: 'login',

    // 登录配置.
    loginConfig: {
        def: 'domain',
        url: 'http://hl.avalon2.com/'
    },
    user: '',
    pwd: '',
    loginMsg: '',
    loginMsgEle: false,

    // class.
    cls: {
        row: 'hl-row',
        loginWrap: 'login'
    },

    // style.
    style: {
        mgnB10: {
            'margin-bottom': '16px'
        }
    },

    // 登录.
    login: (e) => {
        $.ajax({
            method: 'POST',
            url: vm.loginConfig.url + '/php/test.php',
            data: {
                user: vm.user,
                pwd: vm.pwd
            },
            dataType: 'jsonp',
            success: (response) => {
                if (response.code != 0) { // 未登录则跳转到登录页.
                    vm.loginMsg = response.msg;
                    vm.loginMsgEle = true;
                } else {
                    vm.user = '';
                    vm.pwd = '';
                    vm.loginMsg = '';
                    vm.loginMsgEle = false;
                    window.location = '../#!/' + vm.loginConfig.def;
                }
            }
        });
    }
});
