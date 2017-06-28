/**
 * @desc component-soleSlot
 */
avalon.component('ms-button', {
    template: '<button type="button" class="hl-btn hl-mgn-b-10"><span><slot /></span></button>',
    defaults: {
        buttonText: "button"
    },
    soleSlot: 'buttonText'
});

/**
 * @desc component-soleSlot ms-button-1
 */
var msButton1VM; // 组件通信.
avalon.component('ms-button-1', {
    template: '<button type="button" class="hl-btn hl-mgn-b-10"><span>{{@title}}</span></button>',
    defaults: {
        onInit:function(e){
            msButton1VM = e.vmodel
        },
        title: 'button-1',
    }
});

/**
 * @desc component header
 */
avalon.component('ms-header', {
    template: '',
    defaults: {
        
    }
});

let vm = avalon.define({
    $id: 'component',

    // class.
    cls: {
        component: 'comploent'
    },

    // soleSlot ms-button.
    msBtnTitle: '动态内容',
    msBtnClick: () => {
        console.log('我被点击了');
    },
    updateMsBtnTtileClick: () => {
        vm.msBtnTitle = '更新内容'+ (new Date - 0);
    },

    // soleSlot ms-button-1.
    msBtn1Title: '动态内容',
    msBtn1Click: () => {
        console.log('我被点击了-1');
    },
    updateMsBtn1TtileClick: () => {
        msButton1VM.title = '更新内容'+ (new Date - 0); // 组件通信.
    },

    // ms-header.

});
