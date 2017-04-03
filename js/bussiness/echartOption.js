var myChart = echarts.init(document.getElementById('echart'));
var lineData = new Array();
lineData[0] = [
    {type: 'min', name: '最大'},
    {type: 'max', name: '最大'}
]
/**
 * 基金收益柱状图样式
 */
function gradient(data) {
    var dataAxis=[];
    var dataYxis=[];
    var dataShadow=[];
    var makeShares = data.makeShareList;
    var maxMakeShare = data.max;
    for(var i=0;i<makeShares.length;i++) {
        var value=makeShares[i].code+":"+makeShares[i].total;
        dataAxis.push(value);
        dataYxis.push(makeShares[i].total);
        dataShadow.push(maxMakeShare);
    }
    var option = {
        title: {
            text: '赚取基金份额',
            subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
        },
        xAxis: {
            data: dataAxis,
            axisLabel: {
                inside: true,
                textStyle: {
                    color: '#666633'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            }
        },
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        series: [
            {
                type: 'bar',
                itemStyle: {
                    normal: {color: 'rgba(0,0,0,0.05)'}
                },
                barGap:'-100%',
                barCategoryGap:'40%',
                data: dataShadow,
                animation: false
            },
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#ff6600'},
                                {offset: 0.5, color: '#ff6633'},
                                {offset: 1, color: '#ff6666'}
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#ff6600'},
                                {offset: 0.7, color: '#ff6633'},
                                {offset: 1, color: '#ff6666'}
                            ]
                        )
                    }
                },
                data: dataYxis
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart = echarts.init(document.getElementById('echart'));
    myChart.setOption(option);
    myChart.on('mouseOver', function (params) {
        for(var i=0;i<makeShares.length;i++) {
            var value=makeShares[i].code+":"+makeShares[i].total;
            if(params.name==value){
                option.title.text=makeShares[i].name;
                break;
            }
        }
        myChart.setOption(option)
    });
}


/**
 * 基金曲线图折线图样式
 * @param data
 */
function lineOption(data) {
    var temp = new Array();
    var time = new Array();
    for (var i = 0; i < data.fundNetWorthList.length; i++) {
        time[i] = data.fundNetWorthList[i].time;
        temp[i] = data.fundNetWorthList[i].netWorth;
    }
    var option = {
        title: {
            show: true,
            text: data.fundName
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            data: time,
            splitLine: {
                show: false
            }
        },
        yAxis: {
            position: 'left',
            boundaryGap: [0, '30%'],
            splitLine: {
                show: false
            },
            min:'dataMin',
            max:'dataMax'
        }
        ,
        dataZoom: {
            start: 80,
            end: 100
        }
        ,
        series: [{
            type: 'line',
            hoverAnimation: true,
            smooth: true,
            data: temp,
            markLine: {
                smooth: true,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    color: 'green',
                    shadowColor: 'black',
                    period: 30
                },
                itemStyle: {
                    normal: {
                        color: 'green',
                        borderWidth: 6,
                        borderColor: 'green',
                        lineStyle: {
                            type: 'solid'
                        }
                    }
                },
                data: lineData
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart = echarts.init(document.getElementById('echart'));
    myChart.setOption(option);
}