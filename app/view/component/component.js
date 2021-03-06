/**
 * @desc component-soleSlot, 将模版定界符从{{}}替换成其他的后buttonText会失效并{{##buttonText}}.
 */
var msButtonVM; // 组件通信.
avalon.component('ms-button', {
    template: '<button type="button" class="hl-btn hl-mgn-b-10">\
                   <span><slot /></span>\
               </button>',
    defaults: {
        onInit: (e) => {
            msButtonVM = e.vmodel;
        },
        buttonText: "button"
    },
    soleSlot: 'buttonText'
});

/**
 * @desc component-soleSlot ms-button-1
 */
var msButton1VM; // 组件通信.
avalon.component('ms-button-1', {
    template: '<button type="button" class="hl-btn hl-mgn-b-10">\
                   <span>{?@title?}</span>\
               </button>',
    defaults: {
        onInit: (e) => {
            msButton1VM = e.vmodel
        },
        title: 'button-1',
    }
});

/**
 * @desc component-soleSlot ms-button-2
 */
avalon.component('ms-button-2', {
    template: '<button type="button" ms-on-click="@test" class="hl-btn hl-mgn-b-10">\
                   <span>{?@title?}</span>\
               </button>',
    defaults: {
        onInit: (e) => {
            console.log('button-2', e);
        },
        test: (e) => {
            console.log('button2-我没被替换');
        },
        title: 'button-2'
    }
});

/**
 * @desc 多个slot
 */
avalon.component('ms-tabs', {
    template: '<div>\
                   <p>它有{?@num?}个面板</p>\
                   <slot name="tab" />\
               </div>',
    defaults: {
        num: 3
    }
});

/**
 * @desc 多个slot2
 */
avalon.component('ms-tabs-2', {
    template: '<div>\
                   <p>它有{?@num?}个面板</p>\
                   <slot name="panels" />\
               </div>',
    defaults: {
        num: 1
    }
});

/**
 * @desc ms-component-header
 */
var msComponentHeaderVM;
avalon.component('ms-component-header', {
    template:   '<div class="hl-header hl-clearfix">\
                    <div class="logo hl-f-l" ms-on-mouseenter="@titleEnter(@titleMIS, $event)" ms-on-mouseleave="@titleLeave(@titleAvalon, $event)">{?@title?}</div>\
                    <div class="logout hl-f-r">\
                        <a href="../#!/logout">Component退出</a>\
                    </div>\
                </div>',
    defaults: {
        onInit: (e) => {
            msComponentVM = e.vmodel;
        },
        onReady: (e) => {
            console.log(this, e);
        },
        title: 'ComponentAvalon2',
        titleAvalon: 'ComponentAvalon2',
        titleMIS: 'ComponentAvalon2-MIS',
        titleEnter: (name, e) => {
            msComponentVM.title = name;
        },
        titleLeave: (name, e) => {
            msComponentVM.title = name;
        }
   }
});

let vm = avalon.define({
    $id: 'component',

    // class.
    cls: {
        component: 'comploent'
    },

    // soleSlot ms-button.
    msBtnClick: () => {
        console.log('我被点击了');
    },
    updateMsBtnTtileClick: () => {
        msButtonVM.buttonText = '更新内容: '+ (new Date - 0); // 组件通信.
    },

    // soleSlot ms-button-1.
    msBtn1Title: '动态内容',
    msBtn1Click: () => {
        console.log('我被点击了-1');
    },
    updateMsBtn1TtileClick: () => {
        msButton1VM.title = '更新内容-1: '+ (new Date - 0); // 组件通信.
    },

    // button2(如果组件中有test方法、title属性则会被替换，如果没有则不会进行对象合并)
    button2: {
        test: (e) => {
            console.log('button2-被我替换了');
        },
        title: '按钮2'
    }
});
