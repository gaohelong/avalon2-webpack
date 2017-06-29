/**
 * @desc component ms-nav
 */
var msNavVM;
avalon.component('ms-nav', {
    template:   '<div class="hl-header hl-clearfix">\
                    <div class="logo hl-f-l" ms-on-mouseenter="@titleEnter(@titleMIS, $event)" ms-on-mouseleave="@titleLeave(@titleAvalon, $event)">{{@title}}</div>\
                    <div class="logout hl-f-r">\
                        <a href="../#!/logout">退出咯</a>\
                    </div>\
                </div>',
    defaults: {
        onInit: (e) => {
            msNavVM = e.vmodel;
        },
        onReady: (e) => {
            console.log(this, e);
        },
        title: 'Nav',
        titleAvalon: 'Nav',
        titleMIS: 'Nav-MIS',
        titleEnter: (name, e) => {
            msNavVM.title = name;
        },
        titleLeave: (name, e) => {
            msNavVM.title = name;
        }
    }
});
