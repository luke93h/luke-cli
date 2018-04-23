
var echarts = require('echarts');
var chart1 = echarts.init(document.getElementById('chart1'));
var data = [
	[
		['胃病', 77, ], 
		['高血压', 77.4, ], 
		['肠炎', 68, ], 
	],
	[
		['肠炎', 81.8, ], 
		['胃病', 81.7,], 
	]
];

var option = {
	backgroundColor: '#27282c',
	title: {
		text: '客户疾病分析',
		textStyle: {
			color: '#d4d4d4',
			fontSize: '18',
		},
	},
	legend: {
		right: 10,
		data: ['男', '女'],
		textStyle: {
			color: '#d4d4d4',
		},

	},
	xAxis: {
		splitLine: {
			show: false
		},
		axisTick: {
			alignWithLabel: true,
			show: true,
			length: -6
		},
		axisLine: {
			lineStyle: {
				type: 'solid',
				color: '#5f6064'
			}
		},
		axisLabel: {
			padding: [0, 4, 0, 0],
			color: '#d4d4d4'
		},
		data: ['高血压', '感冒', '胃病', '心脏病', '肺病', '肠炎'],
		scale: true
	},
	yAxis: {
		name: '(%)',
		nameTextStyle: {
			padding: [0 , 0, 0, 10],
			fontSize: '16',
			color: '#d4d4d4'
		},
		splitLine: {
			lineStyle: {
				type: 'solid',
				color: '#5f6064'
			}
		},
		axisTick:{
			show: true,
			length: 6,
			interval: 20,
		},
		axisLine: {
			lineStyle:{
				type: 'solid',
				color: '#5f6064'
			}
		},
		axisLabel:{
			padding: [0, 4, 0, 0],
			color: '#d4d4d4'
		},
		min: 0,
		max:100,
		scale: true
	},
	series: [{
		name: '男',
		data: data[0],
		type: 'scatter',
		symbolSize: function (data) {
			return data[1]
		},
		label: {
			color: '#d4d4d4',
			emphasis: {
				show: true,
				formatter: function (param) {
					return param.data[3];
				},
				position: 'top',
				label: {
					color: '#d4d4d4'
				}
			},
		},
		itemStyle: {
			color: '#d4d4d4',
			emphasis: {
				show: true,
				formatter: function (param) {
					return param.data[3];
				},
				position: 'top',
				label: {
					color: '#d4d4d4'
				}
			},
		},
		tooltip: {
			textStyle:{
				color: '#d4d4d4',
			}
		},
		itemStyle: {
			normal: {
				shadowBlur: 10,
				shadowColor: 'rgba(120, 36, 50, 0.5)',
				shadowOffsetY: 5,
				color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
					offset: 0,
					color: 'rgb(251, 118, 123)'
				}, {
					offset: 1,
					color: 'rgb(204, 46, 72)'
				}])
			}
		}
	}, {
		name: '女',
		data: data[1],
		type: 'scatter',
		symbolSize: function (data) {
			return data[1]
		},
		label: {
			emphasis: {
				show: true,
				formatter: function (param) {
					return param.data[3];
				},
				position: 'top'
			}
		},
		itemStyle: {
			normal: {
				shadowBlur: 10,
				shadowColor: 'rgba(25, 100, 150, 0.5)',
				shadowOffsetY: 5,
				color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
					offset: 0,
					color: 'rgb(129, 227, 238)'
				}, {
					offset: 1,
					color: 'rgb(25, 183, 207)'
				}])
			}
		}
	}],
	textStyle:{
		color: '#d4d4d4'
	}
};
// 绘制图表
chart1.setOption(option);