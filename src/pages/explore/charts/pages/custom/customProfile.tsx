import { View } from '@tarojs/components';
import * as echarts from 'echarts/core';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=custom-profile
 */
export default function customProfile() {
  const data: any = [];
  const dataCount = 10;
  const startTime = +new Date();
  const categories = ['categoryA', 'categoryB', 'categoryC'];
  const types = [
    { name: 'JS Heap', color: '#7b9ce1' },
    { name: 'Documents', color: '#bd6d6c' },
    { name: 'Nodes', color: '#75d874' },
    { name: 'Listeners', color: '#e0bc78' },
    { name: 'GPU Memory', color: '#dc77dc' },
    { name: 'GPU', color: '#72b362' }
  ];
  // Generate mock data
  categories.forEach(function(category, index) {
    let baseTime = startTime;
    for (let i = 0; i < dataCount; i++) {
      const typeItem = types[Math.round(Math.random() * (types.length - 1))];
      const duration = Math.round(Math.random() * 10000);
      data.push({
        name: typeItem.name,
        value: [index, baseTime, (baseTime += duration), duration],
        itemStyle: {
          normal: {
            color: typeItem.color
          }
        }
      });
      baseTime += Math.round(Math.random() * 2000);
    }
  });
  function renderItem(params, api) {
    const categoryIndex = api.value(0);
    const start = api.coord([api.value(1), categoryIndex]);
    const end = api.coord([api.value(2), categoryIndex]);
    const height = api.size([0, 1])[1] * 0.6;
    const rectShape = echarts.graphic.clipRectByRect(
      {
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height
      },
      {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
      }
    );
    return (
      rectShape && {
        type: 'rect',
        transition: ['shape'],
        shape: rectShape,
        style: api.style()
      }
    );
  }
  const option = {
    tooltip: {
      formatter: function(params) {
        return params.marker + params.name + ': ' + params.value[3] + ' ms';
      }
    },
    title: {
      text: 'Profile',
      left: 'center'
    },
    dataZoom: [
      {
        type: 'slider',
        filterMode: 'weakFilter',
        showDataShadow: false,
        top: 400,
        labelFormatter: ''
      },
      {
        type: 'inside',
        filterMode: 'weakFilter'
      }
    ],
    grid: {
      height: 300
    },
    xAxis: {
      min: startTime,
      scale: true,
      axisLabel: {
        formatter: function(val) {
          return Math.max(0, val - startTime) + ' ms';
        }
      }
    },
    yAxis: {
      data: categories
    },
    series: [
      {
        type: 'custom',
        renderItem: renderItem,
        itemStyle: {
          opacity: 0.8
        },
        encode: {
          x: [1, 2],
          y: 0
        },
        data: data
      }
    ]
  };
  return (
    <View>
      <View className="header">性能分析图</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  );
}
