import {loginConfig} from '../globalConfig/'; // 默认加载globalConfig文件夹下的index.js文件.

let vm = avalon.define({
    $id: 'login',
    user: '',
    pwd: '',
    loginMsg: '',
    loginMsgEle: false,
    imgSrc: 'https://www.baidu.com/img/bd_logo1.png',

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
            url: loginConfig.url,
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
                    window.location = loginConfig.defUrl;
                }
            }
        });
    }
});
