/**
 * @desc component-soleSlot
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
                   <span>{{@title}}</span>\
               </button>',
    defaults: {
        onInit: (e) => {
            msButton1VM = e.vmodel
        },
        title: 'button-1',
    }
});

/**
 * @desc 多个slot
 */
avalon.component('ms-tabs', {
    template: '<div>\
                   <p>它有{{@num}}个面板</p>\
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
                   <p>它有{{@num}}个面板</p>\
                   <slot name="panels" />\
               </div>',
    defaults: {
        num: 1
    }
});

/**
 * @desc component header
 */
var msHeaderVM;
avalon.component('ms-header', {
    template:   '<div class="hl-header hl-clearfix">\
                    <div class="logo hl-f-l" ms-on-mouseenter="@titleEnter(@titleMIS, $event)" ms-on-mouseleave="@titleLeave(@titleAvalon, $event)">{{@title}}</div>\
                    <div class="logout hl-f-r">\
                        <a href="../#!/logout">退出</a>\
                    </div>\
                </div>',
    defaults: {
        onInit: (e) => {
            msHeaderVM = e.vmodel;
        },
        onReady: (e) => {
            console.log(this, e);
        },
        title: 'Avalon2',
        titleAvalon: 'Avalon2',
        titleMIS: 'Avalon2-MIS',
        titleEnter: (name, e) => {
            msHeaderVM.title = name;
        },
        titleLeave: (name, e) => {
            msHeaderVM.title = name;
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

    // tabs.

    // ms-header.
});
