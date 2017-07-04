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

    // 计算属性.
    $computed: {

    },

    // report-map
    reportMap: () => {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('hl-report-map'));

        // 指定图表的配置项和数据
        let option = {
            backgroundColor: '#060f4c',
            series: [{
                type: 'pie',
                radius: ['35%', '55%'],
                silent: true,
                data: [{
                    value: 1,
                    itemStyle: {
                        normal: {
                            color: '#050f58',
                            borderColor: '#162abb',
                            borderWidth: 2,
                            shadowBlur: 50,
                            shadowColor: 'rgba(21,41,185,.75)'
                        }
                    }
                }]
            },
            {
                type: 'pie',
                radius: ['35%', '55%'],
                silent: true,
                label: {
                    normal: {
                        show: false,
                    }
                },
                data: [{
                    value: 1,
                    itemStyle: {
                        normal: {
                            color: '#050f58',
                            shadowBlur: 50,
                            shadowColor: 'rgba(21,41,185,.75)'
                        }
                    }
                }]
            },
            {
                name: '占比',
                type: 'pie',
                radius: ['39%', '52%'],
                hoverAnimation: false,

                data: [{
                    value: 52.7,
                    name: "男性",
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                textStyle: {
                                    fontSize: 15,
                                    fontWeight: "bold"
                                },
                                position: "center"
                            },
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(5,193,255,1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(15,15,90,1)'
                            }])
                        }
                    },
                    label: {
                        normal: {
                            position: 'outside',
                            textStyle: {
                                color: '#fff',
                                fontSize: 14
                            },
                            formatter: '{b}: 1,120\n\n{a}: {c}%'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            length: 20,
                            length2: 30,
                            smooth: false,
                            lineStyle: {
                                width: 1,
                                color: "#2141b5"
                            }
                        }
                    }
                },
                {
                    value: 47.3,
                    name: "女性",
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                textStyle: {
                                    fontSize: 15,
                                    fontWeight: "bold"
                                },
                                position: "center"
                            },
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(5,15,88,1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(235,122,255,1)'
                            }])
                        }
                    },
                    label: {
                        normal: {
                            position: 'outside',
                            textStyle: {
                                color: '#fff',
                                fontSize: 14
                            },
                            formatter: '{b}: 1,120\n\n{a}: {c}%'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            length: 20,
                            length2: 40,
                            smooth: false,
                            lineStyle: {
                                width: 1,
                                color: "#2141b5"
                            }
                        }
                    }
                }]
            },
            {
                name: '',
                type: 'pie',
                clockWise: true,
                hoverAnimation: false,
                radius: [200, 200],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 0,
                    label: {
                        normal: {
                            formatter: '38',
                            textStyle: {
                                color: '#fe8b53',
                                fontSize: 25,
                                fontWeight: 'bold'
                            }
                        }
                    }
                },
                {
                    tooltip: {
                        show: false
                    },
                    label: {
                        normal: {
                            formatter: '\n平均年龄',
                            textStyle: {
                                color: '#bbeaf9',
                                fontSize: 14
                            }
                        }
                    }
                }]
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
        vm.content = '我是echarts';
    }
});

// onReady回调, 只会调用一次!
/*vm.$watch('onReady', () => {
    //当echarts这个区域第一次扫描后会被执行
    vm.reportMap();
});*/

// 当domReady发生时,框架会自动调用的方法,会传入avalon作为参数,该方法与jQuery.ready相仿.
// avalon.ready(fn1)
// avalon.ready(fn2)
// avalon.ready(fn3)
// avalon.ready(fn4)
// 当domReady发生时,fn1, fn2, fn3, fn4会依次执行!

export {vm as echartsVM};
