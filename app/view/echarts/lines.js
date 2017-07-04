let vm = avalon.define({
    $id: 'lines',

    // 当前导航.
    curNav: {
        curNav: 'lines'
    },

    // class.
    cls: {
        echarts: 'lines'
    },
    content: '我是lines',

    // 计算属性.
    $computed: {

    },

    // report-map
    reportMap: () => {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('hl-report-map'));

        // 指定图表的配置项和数据
        let data = [],
            i = 0,
            theta,
            r;

        for (; i <= 100; i++) {
            theta = i / 100 * 360;
            r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
            data.push([r, theta]);
        }

        let option = {
            title: {
                text: '极坐标双数值轴'
            },
            legend: {
                data: ['line']
            },
            polar: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            angleAxis: {
                type: 'value',
                startAngle: 0
            },
            radiusAxis: {
            },
            series: [{
                coordinateSystem: 'polar',
                name: 'line',
                type: 'line',
                data: data
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        // echarts resize.
        $(window).resize(function () {
            myChart.resize();
        });
    },

    // init.
    init: () => {
        // 图表.
        vm.reportMap();

        // 默认值.
        vm.content = '我是lines';
    }
});

export {vm as linesVM};
