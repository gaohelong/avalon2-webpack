/**
 * @desc component ms-header
 */
var hlHeaderVM;
avalon.component('ms-header', {
    template:   '<div class="hl-header hl-clearfix">\
                    <div class="logo hl-f-l" ms-on-mouseenter="@titleEnter(@titleMIS, $event)" ms-on-mouseleave="@titleLeave(@titleAvalon, $event)">{{@title}}</div>\
                    <div class="logout hl-f-r">\
                        <a href="../#!/logout">退出</a>\
                    </div>\
                </div>',
    defaults: {
        onInit: (e) => {
            hlHeaderVM = e.vmodel;
        },  
        onReady: (e) => {
            console.log(this, e);
        },
        title: 'Avalon2',
        titleAvalon: 'Avalon2',
        titleMIS: 'Avalon2-MIS',
        titleEnter: (name, e) => {
            hlHeaderVM.title = name;
        },
        titleLeave: (name, e) => {
            hlHeaderVM.title = name;
        }
    }
});
