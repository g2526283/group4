<script setup>
  
  // 引入 echarts 相关模块
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { PieChart } from 'echarts/charts';
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  } from 'echarts/components';
  // 引入 vue-echarts 插件的相关内容
  import VChart, { THEME_KEY } from 'vue-echarts';
  import { ref, provide } from 'vue';
  
  // 使用 echarts 相关模块
  use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  ]);
  
  // 提供主题信息，这里设置为 'dark'
  provide(THEME_KEY, '');
  
  // 定义 echarts 图表的配置选项
  const option = ref({
    
    //圖表的標題，包括標題文字和標題的位置
    // title: {
    //     text: 'Traffic Sources', // 标题
    //     left: 'center', // 居中显示
    // },
    //提示框配置，包括觸發類型和提示框內容的格式
    tooltip: {
        z:4,
        extraCssText:'width: 25dvh;height: 12.5dvh;border-radius: 12px;letter-spacing: 3px;',
        position: [52, 50], //圖框顯示的絕對位置
        trigger: 'item', // 触发类型
        formatter: '{a} <br/>{b} : <br/>{c} ({d}%)', //定义当用户将鼠标悬停在图表上时，提示框显示的内容
        backgroundColor : '#3E3E3E',
        padding: 15,
        textStyle: {
          fontFamily: "Dosis",
          color:'#d8d8d8',
          fontSize : 14,
          
        }
    },
    //圖例配置，包括圖例的佈局方式和圖例的資料項
    legend: {
        orient: 'vertical', // 垂直布局
        left: '5%', // 左側顯示
        top:'55%',
        itemWidth: 35,
        itemGap: 30,
        textStyle: {
          color: "#d8d8d8",
          // fontWeight: "bold",
          fontFamily: "Dosis",
          fontSize: 15,
          lineHeight: 13,
          padding: [0, 0, 0, 4]
        },
        data: ['再生能源', '燃氣', '燃煤', '燃油', '核能', '抽蓄水力'], // 图例数据

    },
    // 系列配置，這裡定義了一個餅圖系列，包括餅圖的名稱、類型、半徑、中心位置以及具體的資料項
    series: [
        {
            name: '年發電量', // 圓餅圖名稱
            type: 'pie', // 圓餅圖位置
            radius: '65%', // 圓餅圖半径大小
            center: ['60%', '55%'], // 圓餅圖位置中心位置
            color: ['#E1FF2D','#9CB800','#EDFF85','#BFE000','#D0F500','#ADCC00'],
            backgroundColor: '#e1ff2d' ,
            labelLine: {
              length: 29,
              smooth: true,
            },
            label: { //調整圓餅旁文字
              color: "#fff",
              fontFamily: "Dosis",
              fontSize: 17,
              lineHeight: 25,
            },
            data: [ // 数据
                { value: 238.43, name: '再生能源' },
                { value: 1118.28, name: '燃氣' },
                { value: 1212.09, name: '燃煤' },
                { value: 44.51, name: '燃油' },
                { value: 237.55, name: '核能' },
                { value: 30.62, name: '抽蓄水力' },
            ],
            emphasis: { // 高亮样式
              scaleSize: 20 , 
              
              itemStyle: {
                    shadowBlur: 20,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
              },
            },
        },
    ],
  });
  
</script>


<template>
    <div class="left4"></div>
    <h2>台灣發電結構</h2>
    <!-- 使用 vue-echarts 插件的 VChart 组件 -->
    <v-chart class="chart" :option="option" autoresize />
    <div class="difference"></div>
</template>


<style scoped lang="scss">
    .left4{
        z-index: 2;
        position: absolute;
        width: 20%;
        height: 100dvh;
        left: 0;
        top: 0;
        border-right: 2px solid;
        border-image: linear-gradient(to top, #3e3e3e00,#84848479,#d8d8d8, #d8d8d8,#919191,#3e3e3e00,#3e3e3e00) 1;
    }
    h2{
        z-index: 5;
        display: block;
        height: 12dvh;
        padding-left: 4dvh;
        padding-top: 3.1dvh;
        background: linear-gradient(to right, #d8d8d8, #3E3E3E,#3E3E3E);
        border-top: 3px solid #3E3E3E;
        color: #3E3E3E;
        font-family: "Dosis", sans-serif;
        font-size: 28px;
        font-weight: 500;
        letter-spacing: 3px;
    }
    .chart {
        /* 设置图表高度为视窗高度的百分之百 */
        height: 88dvb;
        z-index: 3;
    }
    .difference{
        z-index: 3;
        position: absolute;
        width: 38dvh;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: #3E3E3E;
        box-shadow: inset 0 0 19px 10px rgba(0, 0, 0, 0.2);
        top: 56%;
        left: 60.5%;
        margin: -11.5dvh 0 0 -22dvh;
    }
</style>
