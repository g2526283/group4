<!-- 橫向柱狀圖元件 -->
<script>
export default {
    data() {
        return {
            innum: 0,
            outnum: 0,
            width: 40,
            width2: 50,
        };
    },
    methods: {
        setWidth(number) {
        this.innum =number;
        this.width = (number / 350000) * 100+5;
        },
        setWidth2(number2) {
        this.outnum = number2;
        this.width2 = (number2 / 350000) * 100;
        },
    },
    mounted() {
        
    },
  
};
</script>


<template>
   <div class="left">
      <h1>近5年<br>供耗電數據</h1>
      <ul>
        <!-- <li class="year" @click="this.in(16)">2018</li> -->
        <li class="year" @click="setWidth(275539), setWidth2(266559)">2018</li>
        <li class="year" @click="setWidth(274192), setWidth2(265723)">2019</li>
        <li class="year" @click="setWidth(280000), setWidth2(271235)">2020</li>
        <li class="year" @click="setWidth(291020), setWidth2(283188)">2021</li>
        <li class="year" @click="setWidth(288154), setWidth2(279452)">2022</li>
      </ul>
      <p class="c">相差度數 : {{ innum - outnum }}</p>
    </div>

    <div class="right">
      
      <div class="box">
        
        <div class="out" :style="{ width: width2 + '%' }">
          <p>{{ outnum }}</p>
        </div>

        <div class="in" :style="{ width: width + '%' }">
          <p>{{ innum }}</p>
        </div>

      </div>
    </div>
</template>
  

<style scoped lang="scss">
.left {
    z-index: 2;
    width: 20%;
    height: 100dvh;
    font-size: 35px;
    position: relative;
    background-color: #3E3E3E;
    border-right: 3px solid #3E3E3E;
    
    h1{
      display: block;
      width: 100%;
      height: 21dvh;
      font-size: 28px;
      font-family: "Dosis", sans-serif;
      font-weight: 600;
      padding: 14% 0 0 13%;
      background-color: #d8d8d8;
      letter-spacing: 5px;
      color: #3E3E3E; 
    }

    ul{
      display: block;
      height: 79dvh;
      width: 100%;
      font-family: "Dosis", sans-serif;
      text-align: center;
      padding-top: 4dvh;
      letter-spacing: 3px;
      li{
        display: block;
        width: 84px;
        border: 1.5px solid #E1FF2D;
        margin: 35px auto;
        font-size: 17px;
        line-height: 52px;
        border-radius: 26px;
        color: #E1FF2D;
        transition: 0.5s;
        cursor: pointer;
        &:hover{
          background-color: #E1FF2D;
          color: #3E3E3E;
          scale: 1.1;
          
        }
        &:active{
          background-color: #9CB800;
          color: #3E3E3E;
          scale: 0.97;
          transition: 0s;
        }
      }
      
    }
    .c{
      position: absolute;
      font-family: "Dosis", sans-serif;
      left: 25px;
      bottom: 20px;
      font-size: 16px;
      margin: 0px 0 15px 13px;
      color: #d8d8d8;
      letter-spacing: 3px;
    }
}

.right {
    width: 80%;
    height: 100dvh;
    position: relative;
    border: 1px solid #3E3E3E;
    font-size: 20px;
    background-color: #3E3E3E;
    .box {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100dvh;
      
      .out {
        height: 50dvh;
        width: 70%;
        transition: 1s;
        line-height: 50px;
        padding-left: 20px;
        position: relative;
        background-color: #E1FF2D;
        border-bottom: 3px solid #3E3E3E;
        
        p{
          position: absolute;
          bottom: 38px;
          font-family: "Dosis", sans-serif;
          font-size: 162px;
          font-weight: 400;
          color: #3E3E3E;
        }
      }
      .in {
        height: 50dvh;
        width: 65%;
        transition: 1s;
        line-height: 50px;
        padding-left: 20px;
        position: relative;
        background-color: #9CB800;
        border-bottom: 3px solid #3E3E3E;
     
        p{
          position: absolute;
          bottom: 38px;
          font-family: "Dosis", sans-serif;
          font-size: 162px;
          font-weight: 400;
          color: #3E3E3E;
          
        }
      }

    }
  }
</style>