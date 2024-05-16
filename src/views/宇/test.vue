<template>
    <!-- 使用 vue-echarts 插件的 VChart 组件 -->
    <v-chart class="chart" :option="option" autoresize />
    <button class="goTop" :class="{ hide: hideGoTop }" @click="scrollToTop">
      Go Top
    </button>
</template>

<script>
export default {
  data() {
    return {
      hideGoTop: true,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 200) {
        this.hideGoTop = false;
      } else {
        this.hideGoTop = true;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

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
  provide(THEME_KEY, 'dark');
  
  // 定义 echarts 图表的配置选项
  const option = ref({
    //圖表的標題，包括標題文字和標題的位置
    title: {
        text: 'Traffic Sources', // 标题
        left: 'center', // 居中显示
    },
    //提示框配置，包括觸發類型和提示框內容的格式
    tooltip: {
        trigger: 'item', // 触发类型
        formatter: '{a} <br/>{b} : {c} ({d}%)', //定义当用户将鼠标悬停在图表上时，提示框显示的内容
    },
    //圖例配置，包括圖例的佈局方式和圖例的資料項
    legend: {
        orient: 'vertical', // 垂直布局
        left: 'left', // 左側顯示
        data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'], // 图例数据
    },
    // 系列配置，這裡定義了一個餅圖系列，包括餅圖的名稱、類型、半徑、中心位置以及具體的資料項
    series: [
        {
            name: 'Traffic Sources', // 圓餅圖名稱
            type: 'pie', // 圓餅圖位置
            radius: '55%', // 圓餅圖半径大小
            center: ['50%', '60%'], // 圓餅圖位置中心位置 
            data: [ // 数据
                { value: 335, name: 'Direct' },
                { value: 310, name: 'Email' },
                { value: 234, name: 'Ad Networks' },
                { value: 135, name: 'Video Ads' },
                { value: 1548, name: 'Search Engines' },
            ],
            emphasis: { // 高亮样式
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
  });
</script>
  
<style scoped>
  .chart {
    /* 设置图表高度为视窗高度的百分之百 */
    height: 200vh; 
  }
  .goTop{
    width: 20px;
    height: 20px;
    background-color: red;
    position: fixed;
    right: 0;
    bottom: 0;
  }
  .hide {
  display: none;
  }
</style>