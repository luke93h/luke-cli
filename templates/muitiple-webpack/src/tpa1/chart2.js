var echarts = require('echarts');
var chart2 = echarts.init(document.getElementById('chart2'));
let option = {
    title: {
        text: '理赔各类疾病占比',
        textStyle: {
            color: '#d4d4d4',
            fontSize: '18',
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        top: 'middle',

        textStyle: {
            color: '#d4d4d4',
        },
        right: '20',
        data: ['高血压', '感冒', '胃病', '心脏病', '肺病']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: '高血压' },
                { value: 310, name: '感冒' },
                { value: 234, name: '胃病' },
                { value: 135, name: '心脏病' },
                { value: 1548, name: '肺病' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label:{
                formatter: '{b}：{c}',
                show: true
            }
        }
    ]
};
// 绘制图表
chart2.setOption(option);