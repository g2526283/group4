<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

import hamburger from "@/components/宇/hamburger.vue";
import Footer from "@/components/宇/Footer.vue";
import Gotop from "@/components/宇/Gotop.vue"

const chart = ref();
const chart1 = ref();
const chart2 = ref();
const chart3 = ref();
const chart4 = ref();


onMounted(() => {

  // 基于准备好的dom,初始化echarts实例 
  var myChart = echarts.init(chart.value);

  // 指定图表的配置项和数据
  var option = {
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 8572,
            name: '基隆市'
          },
          {
            value: 75994,
            name: '新北市'
          },
          {
            value: 60740,
            name: '臺北市'
          },
          {
            value: 22441,
            name: '桃園市'
          },
          {
            value: 2097,
            name: '新竹縣'
          },
          {
            value: 2964,
            name: '新竹市'
          },
          {
            value: 53,
            name: '苗栗縣'
          },
          {
            value: 16004,
            name: '臺中市'
          },
          {
            value: 33162,
            name: '彰化縣'
          },
          {
            value: 532,
            name: '南投縣'
          },
          {
            value: 11957,
            name: '雲林縣'
          },
          {
            value: 4033,
            name: '嘉義縣'
          },
          {
            value: 73875,
            name: '宜蘭縣'
          },
          {
            value: 33822,
            name: '花蓮縣'
          }
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  var myChart1 = echarts.init(chart1.value);

  // 指定图表的配置项和数据
  var option1 = {
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 6135295,
            name: '污染防治附帶收入'
          },
          {
            value: 26523779,
            name: '委託民間處理費用'
          },
          {
            value: 43117582,
            name: '污染防治設備之操作維護費用'
          },
          {
            value: 450661,
            name: '租用污染防治設備(含廠房)之租金'
          },
          {
            value: 834961,
            name: '研究發展支出'
          },
          {
            value: 23277,
            name: '新購供污染防治設備使用之土地投資支出联盟广告'
          },
          {
            value: 35018269,
            name: '新購買之污染防治設備支出'
          },
          {
            value: 99879127,
            name: '污染防治支出'
          }
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart1.setOption(option1);


  var myChart2 = echarts.init(chart2.value);

  // 指定图表的配置项和数据
  var option2 = {
    xAxis: {
      data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']
    },
    yAxis: {},
    series: [
      {
        data: [11, 5, 10, 5, 6, 5, 4, 1, 6, 3, 3, 4, 2, 0],
        type: 'line',
        stack: 'x'
      },
      // {
      //   data: [5, 4, 3, 5, 10],
      //   type: 'line',
      //   stack: 'x'
      // }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart2.setOption(option2);


  var myChart3 = echarts.init(chart3.value);

  // 指定图表的配置项和数据
  var option3 = {
    xAxis: {
      data: ['2019', '2020', '2021', '2022', '2023']
    },
    yAxis: {},
    series: [

      {//工業
        data: [56, 56, 57.1, 56.22, 55.31],
        type: 'bar',
        stack: 'x'
      },
      {//住宅
        data: [18, 19, 18.6, 18.22, 18.76],
        type: 'bar',
        stack: 'x'
      },
      {//服務業
        data: [18, 17, 16.1, 17.02, 17.60],
        type: 'bar',
        stack: 'x'
      },
      {//其他
        label: "hi",
        data: [9, 9, 8.2, 8.55, 8.33],
        type: 'bar',
        stack: 'x'
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart3.setOption(option3);


  var myChart4 = echarts.init(chart4.value);

  // 指定图表的配置项和数据
  var option4 = {
    xAxis: {
      data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '24:00']
    },
    yAxis: {},
    series: [
      {//東部
        data: [33.7, 30.9, 29.1, 29, 29.1, 35.8, 41, 38.4, 39.4, 42.4, ,],
        type: 'line',
        stack: 'x',
        areaStyle: {}
      },
      {//南部
        data: [948.8, 901.1, 881.1, 845.6, 875.8, 991, 1093.7, 1070.2, 1016.1, 1022.2, ,],
        type: 'line',
        stack: 'x',
        areaStyle: {}
      },
      {//中部
        data: [726.8, 712, 673.3, 673.7, 671.9, 683.8, 690.8, 730.2, 785.5, 821.1, ,],
        type: 'line',
        stack: 'x',
        areaStyle: {}
      },
      {//北部
        data: [849.5, 761, 726.6, 727.2, 764.2, 906.7, 983.9, 1008.7, 1016.2, 1018.4, ,],
        type: 'line',
        stack: 'x',
        areaStyle: {}
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart4.setOption(option4);

})
const twitterTimeline = ref(null);

onMounted(() => {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://platform.twitter.com/widgets.js';
  // script.charset = 'utf-8';
  document.body.appendChild(script);

  script.onload = () => {
    if (window.twttr) {
      window.twttr.widgets.createTimeline(
        {
          sourceType: 'profile',
          screenName: 'IEA'
        },
        twitterTimeline.value
      );
    }
  };
});

</script>




<template>
<div class="all">

<div class="firstArea">
        <hamburger/>
    </div>

  <div class="top">
    <div ref="chart3" style="width: 600px;height:400px;"></div>
    <div ref="chart2" style="width: 600px;height:400px;"></div>
  </div>

  <div class="mid">
    <div>
      <div ref="chart" style="width: 600px;height:400px;"></div>
    </div>
    <div class="tree">
      <video width="300" height="360" autoplay muted loop id="myVideo">
        <source src="/慧，宇/tree.webm" type="video/webm" />
      </video>

      <!-- bnt1 -->
      <div class="one ">
        <a href="#show1" class="modal-open">*</a>

        <div class="overlay" id="show1">
          <div class="modal">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 560 280"
              preserveAspectRatio="true">

              <line id="svg_3" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="558" y2="2.0" />

              <line id="svg_4" fill="none" stroke="#000000" stroke-width="2" x1="558" y1="278" x2="558" y2="2.0" />

              <line id="svg_2" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="278" x2="558" y2="278" />

              <line id="svg_5" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="2.0" y2="278" />

            </svg>
            <div class="modal-inner">
              <a href="#" class="modal-close" title="Close Modal">X</a>
            </div>
          </div>

        </div>
      </div>
      <!-- end -->

      <!-- btn2 -->
      <div class="two ">
        <a href="#show2" class="modal-open">*</a>

        <div class="overlay" id="show2">
          <div class="modal">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 560 280"
              preserveAspectRatio="true">

              <line id="svg_3" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="558" y2="2.0" />

              <line id="svg_4" fill="none" stroke="#000000" stroke-width="2" x1="558" y1="278" x2="558" y2="2.0" />

              <line id="svg_2" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="278" x2="558" y2="278" />

              <line id="svg_5" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="2.0" y2="278" />

            </svg>
            <div class="modal-inner">
              <a href="#" class="modal-close" title="Close Modal">X</a>
            </div>
          </div>
        </div>
      </div>
      <!-- end -->

      <!-- btn3 -->
      <div class="three ">
        <a href="#show3" class="modal-open">*</a>

        <div class="overlay" id="show3">
          <div class="modal">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 560 280"
              preserveAspectRatio="true">

              <line id="svg_3" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="558" y2="2.0" />

              <line id="svg_4" fill="none" stroke="#000000" stroke-width="2" x1="558" y1="278" x2="558" y2="2.0" />

              <line id="svg_2" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="278" x2="558" y2="278" />

              <line id="svg_5" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="2.0" y2="278" />

            </svg>
            <div class="modal-inner">
              <a href="#" class="modal-close" title="Close Modal">X</a>
            </div>
          </div>
        </div>
      </div>
      <!-- end -->

      <!-- btn4 -->
      <div class="four ">
        <div class="wrap">
          <a href="#show4" class="modal-open">*</a>

          <div class="overlay" id="show4">
            <div class="modal">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 560 280"
                preserveAspectRatio="true">

                <line id="svg_3" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="558" y2="2.0" />

                <line id="svg_4" fill="none" stroke="#000000" stroke-width="2" x1="558" y1="278" x2="558" y2="2.0" />

                <line id="svg_2" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="278" x2="558" y2="278" />

                <line id="svg_5" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="2.0" y2="278" />

              </svg>
              <div class="modal-inner">
                <a href="#" class="modal-close" title="Close Modal">X</a>
              </div>
            </div>

          </div>

        </div>
      </div>
      <!-- end -->

      <!-- btn5 -->
      <div class="five ">
        <div class="wrap">
          <a href="#show5" class="modal-open">*</a>

          <div class="overlay" id="show5">
            <div class="modal">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 560 280"
                preserveAspectRatio="true">

                <line id="svg_3" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="558" y2="2.0" />

                <line id="svg_4" fill="none" stroke="#000000" stroke-width="2" x1="558" y1="278" x2="558" y2="2.0" />

                <line id="svg_2" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="278" x2="558" y2="278" />

                <line id="svg_5" fill="none" stroke="#000000" stroke-width="2" x1="2.0" y1="2.0" x2="2.0" y2="278" />

              </svg>
              <div class="modal-inner">
                <a href="#" class="modal-close" title="Close Modal">X</a>
              </div>
            </div>

          </div>

        </div>
      </div>
      <!-- end -->

    </div>
    <div>
      <div ref="chart1" style="width: 600px;height:400px;"></div>
    </div>
  </div>
  <div class="bottom">
    <div class="news" ref="twitterTimeline" style="width: 600px;height:400px;"></div>
    <div ref="chart4" style="width: 600px;height:400px;"></div>

  </div>

    
  <div class="lastArea">
     <Footer/>
  </div>

  <div class="GotopArea">
     <Gotop/>
  </div>
</div>
</template>



<style scoped lang="scss">
.all{
  background-image: url(/慧，宇/bg.png);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  img {
    opacity: 0.1;
  }

}

.top {
  display: flex;
  justify-content: center;
  z-index: 1;
}

.mid {
  display: flex;
  justify-content: center;
  z-index: 1;

  .tree {
    display: flex;
    position: relative;



    .wrap {
      background: none;
    }

    .one {
      height: 1px;
      width: 1px;
      background: #00000000;
      position: absolute;
      top: 73px;
      left: -18px;
      z-index: 2;

      .modal {
        position: absolute;
        width: 560px;
        height: 280px;
        top: 50px;
        left: 50px;
        transform: translate(-136%, -157%);
        z-index: 5;
      }

      svg {
        width: 820px;
        position: relative;
        height: 410px;
        margin: 0 auto;
        display: block;
        z-index: 5;
      }

      .modal-inner {
        background-image: url(/慧，宇/ct1.png);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        position: absolute;
        top: 3px;
        left: 3px;
        width: 812px;
        height: 405px;
        opacity: 0;
      }

    }

    .two {
      height: 0px;
      width: 0px;
      background: #00000000;
      position: absolute;
      top: 73px;
      left: 111px;
      z-index: 1;

      .modal {
        position: absolute;
        width: 560px;
        height: 280px;
        top: 50px;
        left: 50px;
        transform: translate(9%, -157%);
        z-index: 5;
      }

      svg {
        width: 820px;
        position: relative;
        height: 410px;
        margin: 0 auto;
        display: block;
        z-index: 5;
      }
      

      .modal-inner {
        background-image: url(/慧，宇/ct2.png);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        z-index: 999;
        position: absolute;
        top: 3px;
        left: 3px;
        width: 812px;
        height: 405px;
        opacity: 0;
      }

    }

    .three {
      height: 0px;
      width: 0px;
      background: #00000000;
      position: absolute;
      top: 120px;
      left: -53px;
      z-index: 2;


      .modal {
        position: absolute;
        width: 560px;
        height: 280px;
        top: 50px;
        left: 50px;
        transform: translate(-138%, -70%);
        z-index: 5;
      }

      svg {
        width: 820px;
        position: relative;
        height: 410px;
        margin: 0 auto;
        display: block;
        z-index: 5;
      }
      

      .modal-inner {
        background-image: url(/慧，宇/ct3.png);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        z-index: 999;
        position: absolute;
        top: 3px;
        left: 3px;
        width: 812px;
        height: 405px;
        opacity: 0;
      }

    }

    .four {
      height: 0px;
      width: 0px;
      background: #00000000;
      position: absolute;
      top: 120px;
      left: 146px;
      z-index: 1;

      .modal {
        position: absolute;
        width: 560px;
        height: 280px;
        top: 50px;
        left: 50px;
        transform: translate(10%, -70%);
        z-index: 5;
      }

      svg {
        width: 820px;
        position: relative;
        height: 410px;
        margin: 0 auto;
        display: block;
        z-index: 5;
      }
      

      .modal-inner {
        background-image: url(/慧，宇/ct4.png);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        z-index: 999;
        position: absolute;
        top: 3px;
        left: 3px;
        width: 812px;
        height: 405px;
        opacity: 0;
      }


    }

    .five {
      height: 0px;
      width: 0px;
      background: none;
      position: absolute;
      top: 166px;
      left: 47px;
      z-index: 1;

      .modal {
        position: absolute;
        width: 560px;
        height: 280px;
        top: 50px;
        left: 50px;
        transform: translate(0%, 50%);
        z-index: 5;
      }

      svg {
        width: 820px;
        position: relative;
        height: 410px;
        margin: 0 auto;
        display: block;
        z-index: 5;
      }

      .modal-inner {
        background-image: url(/慧，宇/ct5.png);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        z-index: 999;
        position: absolute;
        top: 3px;
        left: 3px;
        width: 812px;
        height: 405px;
        opacity: 0;
      }


    }

  }

}

.bottom {
  display: flex;
  justify-content: center;

  .news {
    margin-right: 100px;
    margin-top: 50px;
    max-width: 500px; // 设置最大宽度为500px
    max-height: 300px; // 设置最大高度为300px
    overflow: auto; // 当内容超出限制范围时，显示滚动条
  }
}

@import url(https://fonts.googleapis.com/css?family=Cantarell:400,400italic,700italic,700);
@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);

// * {
//   padding: 0;
//   margin: 0;
//   position: relative;
//   box-sizing: border-box;
// }

// html {
//   height: 100%;
//   min-height: 100%;
// }

// body {
//   // height: 100%;
//   // min-height: 100%;
//   font-family: 'Cantarell', sans-serif;
//   font-size: 14px;
//   background: radial-gradient(ellipse at center, rgba(2, 162, 239, 1) 0%, rgba(3, 106, 179, 1) 100%);
//   color: #42424200;
// }


svg {
  width: 560px;
  position: relative;
  height: 280px;
  margin: 0 auto;
  display: block;
  z-index: 5;
}

svg line {
  stroke-width: 2px;
  stroke: rgba(2, 162, 239, 1);
}

svg #svg_2 {
  stroke-dasharray: 1680;
  stroke-dashoffset: 1680;
}

svg #svg_4 {
  stroke-dasharray: 1680;
  stroke-dashoffset: -280;
}

svg #svg_3 {
  stroke-dasharray: 1680;
  stroke-dashoffset: -580;
}

svg #svg_5 {
  stroke-dasharray: 1680;
  stroke-dashoffset: -280;
}

@keyframes anim-dash {
  90% {
    stroke: rgba(2, 162, 239, 1);
  }

  100% {
    stroke: #ffffff;
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

.overlay {
  // background: rgba(0, 0, 0, 0);
  // width: 100%;
  // height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 5;
}



.modal-inner {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 553px;
  height: 200px;
  opacity: 0;
  z-index: 5;
}

.modal-close {
  float: right;
  z-index: +2;
  color: #424242;
  margin: 5px 5px 0 0;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  line-height: 20px;
  height: 20px;
  width: 20px;
  z-index: 5;
}

.modal-inner h3 {
  display: block;
  text-align: center;
  font-size: 22px;
  padding: 20px 20px 10px 20px;
  z-index: 5;
}

.overlay:target .modal,
.overlay:target {
  animation: display .6s forwards;
  z-index: 5;
}

.overlay:target .modal svg line {
  animation: anim-dash .6s forwards;
  animation-delay: .6s;
  z-index: 5;
}

.overlay:target .modal .modal-inner {
  animation: display .6s forwards;
  animation-delay: 1s;
  z-index: 5;
}

@keyframes display {
  to {
    opacity: 1;
  }
}


a.modal-open {
  display: block;
  // padding: 20px;
  color: #f5d9b1;
  font-weight: bold;
  margin: 0 auto;
  transform: translateY(100%);
  width: 200px;
  background: #00000000;
  border-radius: 2px;
  text-align: center;
  text-decoration: none;
  z-index: -1;
  cursor: pointer;
}

.lastArea{
    width: 100%;
    height: 30dvh;
    background-color: #3E3E3E;
    padding-top: 72px;
    position: absolute;
    z-index: 7;
    background-image: none;

    *{
      background-image: none;
    }

}
</style>