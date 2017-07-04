/**
 * @desc component ms-nav
 */
var msNavVM;
avalon.component('ms-nav', {
    template:   '<div class="hl-nav hl-clearfix">\
                    <a ms-for="(k, v) in @navList" ms-attr="{href: @v.url, target: @target}" ms-class="@curNavSel(@v.module,  @curNav)">\
                        {?@k?} - {?@v.title?} - {?@curNav?}\
                    </a>\
                </div>',
    defaults: {
        onInit: (e) => {
            msNavVM = e.vmodel;
        },
        onReady: (e) => {
            // console.log(this, e);
        },
        target: '_self',
        curNav: 'component', // 默认选中.
        curNavSel: (module, curNav) => {
            return module == curNav ? 'active' : '';
        },
        navList: [
            // 模块.
            {
                title: '报表',
                url: '../#!/echarts',
                module: 'echarts'
            },
            {
                title: '域名',
                url: '../#!/domain',
                module: 'domain'
            },

            // 测试.
            {
                title: '线图',
                url: '../#!/lines',
                module: 'lines'
            },
            {
                title: '组件',
                url: '../#!/component',
                module: 'component'
            },
            {
                title: '登录',
                url: '../#!',
                module: 'login'
            },
       ]
    }
});
