/**
 * @desc ms-money
 */
let _msMoneyVM, 
    msMoneyVM = [];

avalon.component('ms-money', {
    template:   '<div class="hl-report-money">\
                    <div class="title">{?@title?}</div>\
                    <slot name="report-money-slot" />\
                    <button type="button" class="hl-btn" style="margin-top: 20px;" ms-on-click="@ratioChange">改变工资</button>\
                </div>',
    defaults: {
        msMoneyVMKey: '',
        onInit: (e) => {
            _msMoneyVM = e.vmodel;
            // msMoneyVM.push(_msMoneyVM);
            // console.log(_msMoneyVM.msMoneyVMKey);
            msMoneyVM[_msMoneyVM.msMoneyVMKey] = _msMoneyVM;
            // console.log(msMoneyVM['money']);
        },
        onReady: (e) => {
            // console.log(this, e);
            msMoneyVM[_msMoneyVM.msMoneyVMKey].init(_msMoneyVM.msMoneyVMKey);
        },
        ele: {
            id: ''
        },
        title: '',
        data: {
        },

        //
        ratioChangeState: 1,
        ratioChange: () => {
        },

        // 初始化.
        init: (key) => {
            // ajax.
            // $.ajax({
            //     method: 'POST',
            //     url: avalon._customConfig.loginConfig.url,
            //     data: {
            //         user: 'helong',
            //         pwd: 12345678
            //     },
            //     dataType: 'jsonp',
            //     success: (response) => {
            //         console.log(response);
            //     }
            // });

            // console.log(msMoneyVM.ele.id);
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById(msMoneyVM[key].ele.id));
            // console.log($('#hl-report-money'));

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
                        value: msMoneyVM[key].data.man,
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
                        value: msMoneyVM[key].data.women,
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
                                formatter: '\n平均工资',
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
        }
    }
});

export {msMoneyVM};
