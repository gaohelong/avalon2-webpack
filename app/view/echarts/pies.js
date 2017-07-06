import {msMoneyVM} from '../../component/report/money'; // ms-money

console.log(msMoneyVM); // undefined.
avalon.ready(() => {
    console.log(msMoneyVM['money']); // undefined.
});

let vm = avalon.define({
    $id: 'pies',

    // 当前导航.
    curNav: {
        curNav: 'pies'
    },

    // class.
    cls: {
        pies: 'pies'
    },
    content: '我是pies',

    // ms-money.
    msMoneyConfig: {
        msMoneyVMKey: 'money',
        ratioChangeState: 1,
        ratioChange: () => {
            // console.log(msMoneyVM['money']);
            if (msMoneyVM['money'].ratioChangeState) {
                msMoneyVM['money'].data.man = '72.9';
                msMoneyVM['money'].data.women = '27.1';
                msMoneyVM['money'].ratioChangeState = 0;
            } else {
                msMoneyVM['money'].data.man = '66.6';
                msMoneyVM['money'].data.women = '33.4';
                msMoneyVM['money'].ratioChangeState = 1;
            }

            msMoneyVM['money'].init('money');
        },
        ele: {
            id: 'hl-report-money'
        },
        title: '男女工资比例(替换)',
        data: {
            man: '18.8',
            manCnt: 300,
            women: '81.2',
            womenCnt: 600 
        },
    },
    msMoney1Config: {
        msMoneyVMKey: 'money-1',
        ele: {
            id: 'hl-report-money1'
        },
        title: '男女工资比例1(替换)',
        data: {
            man: '19.96',
            manCnt: 300,
            women: '80.04',
            womenCnt: 600 
        },
        ratioChangeState: 1,
        ratioChange: () => {
            // console.log(msMoneyVM['money-1']);
            if (msMoneyVM['money-1'].ratioChangeState) {
                msMoneyVM['money-1'].data.man = '81.01';
                msMoneyVM['money-1'].data.women = '18.99';
                msMoneyVM['money-1'].ratioChangeState = 0;
            } else {
                msMoneyVM['money-1'].data.man = '19.96';
                msMoneyVM['money-1'].data.women = '80.04';
                msMoneyVM['money-1'].ratioChangeState = 1;
            }

            msMoneyVM['money-1'].init('money-1');
        },
    },

    // 计算属性.
    $computed: {

    },

    // init.
    init: () => {
        // 默认值.
        vm.content = '我是pies';

        // 获取焦点
        $('#title').show().focus();
    }
});

// onReady回调, 只会调用一次!
/*vm.$watch('onReady', () => {
    //当pies这个区域第一次扫描后会被执行
    vm.init();
});*/

// 当domReady发生时,框架会自动调用的方法,会传入avalon作为参数,该方法与jQuery.ready相仿.
// avalon.ready(fn1)
// avalon.ready(fn2)
// avalon.ready(fn3)
// avalon.ready(fn4)
// 当domReady发生时,fn1, fn2, fn3, fn4会依次执行!

export {vm as piesVM};
