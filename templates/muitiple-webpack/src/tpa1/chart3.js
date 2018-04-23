var echarts = require('echarts');
var chart3 = echarts.init(document.getElementById('chart3'));

var seriesLabel = {
  normal: {
    show: true,
    textBorderColor: '#333',
    textBorderWidth: 2
  },
}
var itemStyle = {
  barBorderRadius: [0, 15, 15, 0]
}


let option = {
  title: {
    text: '季度药品使用分析情况',
    textStyle: {
      color: '#d4d4d4',
      fontSize: '18',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: 100
  },
  xAxis: {
    show: false
  },
  yAxis: {
    type: 'category',
    axisLine: {
      show: false,
      lineStyle: {
      }
    },
    data: ['一季度', '二季度', '三季度', '四季度'],
    axisTick: {
      alignWithLabel: true,
      show: true,
      length: -6
    },
    axisLabel: {
      padding: [0, 4, 0, 0],
      color: '#d4d4d4',
      margin: 20,
      rich: {
        value: {
          lineHeight: 30,
          align: 'center'
        },
      }
    }
  },
  series: [
    {
      name: 'City Alpha',
      type: 'bar',
      data: [165, 170, 30, 40],
      label: seriesLabel,
      itemStyle
    },
    {
      name: 'City Beta',
      type: 'bar',
      label: seriesLabel,
      data: [150, 105, 110, 60],
      itemStyle
    },
    {
      name: 'City Gamma',
      type: 'bar',
      label: seriesLabel,
      data: [220, 82, 63, 20],
      itemStyle
    },
  ]
};
chart3.setOption(option);