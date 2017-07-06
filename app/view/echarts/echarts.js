require('../../component/report/averageAge'); // ms-average-age

let vm = avalon.define({
    $id: 'echarts',

    // 当前导航.
    curNav: {
        curNav: 'echarts'
    },

    // class.
    cls: {
        echarts: 'echarts'
    },
    content: '我是echarts',

    // ms-average-age.
    msAverageAgeOption: {
        title: '男女平均年龄(替换)'
    },

    // 计算属性.
    $computed: {

    },

    // init.
    init: () => {
        // 默认值.
        vm.content = '我是echarts';
    }
});

// onReady回调, 只会调用一次!
/*vm.$watch('onReady', () => {
    //当echarts这个区域第一次扫描后会被执行
    vm.init();
});*/

// 当domReady发生时,框架会自动调用的方法,会传入avalon作为参数,该方法与jQuery.ready相仿.
// avalon.ready(fn1)
// avalon.ready(fn2)
// avalon.ready(fn3)
// avalon.ready(fn4)
// 当domReady发生时,fn1, fn2, fn3, fn4会依次执行!

export {vm as echartsVM};
