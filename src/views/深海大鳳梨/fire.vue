<script setup>
import { ref, onMounted } from 'vue';
import count from './count.vue';
import news from './news.vue';
import typeArea from './type.vue';
import  hamburger from "@/components/宇/hamburger.vue";
import  Footer from "@/components/宇/Footer.vue";
import  Gotop from "@/components/宇/Gotop.vue";

const path = ref('');

function calculatePoints(x, y, width, height) {
  let points = [[x, height / 2]];
  let maxPoints = 10;
  let chunkRange = width / maxPoints;
  for (let i = 0; i < maxPoints; i++) {
    let cx = chunkRange * i + Math.cos(i) * chunkRange;
    let cy = Math.random() * height;
    points.push([cx, cy]);
  }

  points.push([width, height / 2]);

  let d = points.map(point => point.join(','));
  return 'M' + d.join(',');
}

function run() {
  let fps = 25,
    now,
    delta,
    then = Date.now(),
    interval = 1000 / fps,
    iteration = 0;
  function loop() {
    requestAnimationFrame(loop);

    now = Date.now();
    delta = now - then;
    if (delta > interval) {
      then = now - (delta % interval);

      // update stuff
      render(iteration++);
    }
  }
  loop();
}

function render() {
  let d = calculatePoints(0, 0, 500, 80);
  path.value = d;
}

onMounted(() => {
  run();
});

import * as echarts from "echarts";
// 基於準備好的dom，初始化echarts實例

const chart = ref();
const chart1 = ref();

onMounted(() => {
  // 基於準備好的dom，初始化echarts實例  
  var myChart = echarts.init(chart.value);

  // 指定圖表的配置項和數據
  var option = {
    title: {
      text: '發電量',
      textStyle: {
        color: 'aliceblue',
        fontSize: 30
      },
    },
    tooltip: {},
    legend: {
      data: ['火力發電量(百萬度)', '全國發電量(百萬度)'],
      textStyle: {
        color: 'aliceblue',
        fontSize: 18 // 調整字體大小
      }
    },
    xAxis: {

      data: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      axisLabel: {
        textStyle: {
          color: 'aliceblue',
          fontSize: 18 // 調整字體大小
        }
      }
    },
    yAxis: {
      axisLabel: {
        textStyle: {
          color: 'aliceblue',
          fontSize: 18 // 調整字體大小
        }
      },

    },

    series: [
      {
        name: '火力發電量(百萬度)',
        style: {
          color: 'aliceblue',
          fontSize: 30
        },
        type: 'bar',
        data: [150112, 160111, 168976, 176161, 184005, 190320, 185752, 177351, 193729, 198161, 196353, 196659, 204531, 208160, 216423, 232112, 231843, 223403, 230221, 242536, 237492],

      },
      {
        name: '全國發電量(百萬度)',
        style: {
          color: 'aliceblue',
          fontSize: 30
        },
        type: 'bar',
        data: [198829, 209072, 218397, 227512, 235530, 243117, 238305, 230037, 247059, 252167, 250373, 252341, 259964, 258142, 264108, 270256, 275539, 274192, 280000, 291020, 288154],
      }
    ]
  };

  //使用剛指定的配置項和數據顯示圖表。
  myChart.setOption(option);

  var myChart1 = echarts.init(chart1.value);

  var option1 = {
    series: [
      {
        type: 'pie',
        data: [

          {
            value: 121037,
            name: '燃煤(50.96%)'
          },
          {
            value: 112006,
            name: '燃氣(47.16%)'
          },
          {
            value: 4449,
            name: '燃油(1.87%)'
          }
        ],
        label: {
          show: true,
          textStyle: {
            fontSize: 20 // 調整字體大小
          }
        }
      }
    ]
  }
  //使用剛指定的配置項和數據顯示圖表
  myChart1.setOption(option1);

})




const imageSrc = ref('https://via.placeholder.com/150');
const cardText = ref('Some quick example text to build on the card title and make up the bulk of the card\'s content.');
</script>

<template>


  <div class="body">
    <div class="hamburgerArea">
      <hamburger/>
    </div>

    <div class="headArea">

      <div class="img tower">
        <img src="/public/深海大鳳梨/電塔.png" alt="">
      </div>

      <div class="electricity">
        <svg ref="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200">
          <defs>
            <filter id="f1" x="0" y="0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            </filter>
          </defs>
          <g>
            <path :d="path" fill="none" stroke="#42ee77" filter="url(#f1)"></path>
            <path :d="path" fill="none" stroke="#42ee77"></path>
          </g>
        </svg>
      </div>

      <div class="img house">
        <img src="/public/深海大鳳梨/房子.png" alt="">
      </div>
    </div>
    <!-- 數字區 -->
    <count />


    <div class="secondArea">
      <div class="graph">
        <div ref="chart" style="width: 750px;height:400px;"></div>
      </div>
      <div class="graph">
        <div ref="chart1" style="width: 750px;height:400px;"></div>
      </div>
    </div>

    <!-- 種類區 -->
    <typeArea />



    <!-- 新聞區 -->
    <news />

    <div class="FooterArea">
      <Footer />
    </div>
    <div class="GotopArea">
      <Gotop />
    </div>
  </div>

</template>

<style scoped lang="scss">


.headArea {
  width: 100%;
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  margin: 10px;

  border: 1px solid #000;

  background: #000;

  .electricity {
    max-width: 200px;
    min-height: 50vh;
    margin: 0 auto;

    svg {
      position: absolute;
      top: 18vh;

      left: 50%;
      transform: translate(-50%);
    }
  }

  // electric tower and house
  img {
    width: 300px;
    height: 300px;

    svg {
      position: absolute;
      display: block;
      top: 18vh;
      margin-top: 100px;
      width: 50%;
      left: 50%;
      transform: translate(-50%);
    }
  }

  .house {
    margin-right: 6%;
  }

  .tower {
    margin-left: 10%
  }

}

.secondArea {
  width: 100vw;
  height: 700px;

  display: flex;

  align-items: center;
  justify-content: space-evenly;

  .graph {
    width: 500px;
    height: 600px;
  }
}

.FooterArea{
  width: 100%;
  height: 30dvh;
  background-color: #3E3E3E;
  padding-top: 72px;
}
</style>