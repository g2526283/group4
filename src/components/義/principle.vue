<script>
  export default {
    data() {
      return {
      }
    },
    // 接收父層傳入的變數值
    props:{
      title:{
          default:''
      },
      text:{
          default:''
      },
      image:{
          default:''
      },
      energySelect:{
          default:''
      }
    }
  }    
</script>

<template>
  <div v-if="energySelect==='太陽能'" class="sunPrincipleBigArea">
    <h1 class="one">{{this.title}}</h1>
    <h1 class="two">發電原理</h1>
    <p>
      {{ this.text }}
    </p>
    <img :src='this.image' alt="error">
  </div>

  <div v-if="energySelect==='風力'" class="windPrincipleBigArea">
    <h1 class="one">{{this.title}}</h1>
    <h1 class="two">發電原理</h1>
    <p>
      {{ this.text }}
    </p>
    <img :src='this.image' alt="error">
  </div>

  <div v-if="energySelect==='水力'" class="waterPrincipleBigArea">
    <h1 class="one">{{this.title}}</h1>
    <h1 class="two">發電原理</h1>
    <p>
      {{ this.text }}
    </p>
    <img :src='this.image' alt="error">
  </div>
</template>

<style>
  .sunPrincipleBigArea{
    width: 100%;
    height: 100dvh;
    color:#d8d8d8;
    position: relative;
    img{
      width: 60%;
      height: 58%;
      position: absolute;
      top:0px;
      right: 0px;
      border-radius: 600px 0px 0px 600px ;
    }
    .one{
      width: 27dvw;
      height: 100px;
      padding: 10px;
      background-color: #8a8a8a;
      color: #2e2e2e;
      position: absolute;
      top: 60px;
      left: 40px;
      font-size: 43px;
      text-align: center;
      line-height: 70px;
      border-radius: 0px 50px 0px 50px;
      
    }
    .two{
      position: absolute;
      bottom: 258px;
      left: 70px;
      color: #ddaf25;
      font-size: 40px;
      font-weight: 500;
    }
    p{
      width: 74%;
      border: 1px #ddaf25 solid;
      padding: 20px 20px 20px 30px;
      position: absolute;
      bottom:57px;
      left: 50px;
      line-height: 35px;
      font-size: 19px;
      border-radius: 70px 0px 70px 0px;
    }
  }

  .windPrincipleBigArea{
    width: 100%;
    height: 100dvh;
    color:#d8d8d8;
    position: relative;
    img{
      width: 60%;
      height: 58%;
      position: absolute;
      top:0px;
      right: 0px;
      border-radius: 600px 0px 0px 600px ;
    }
    .one{
      width: 27dvw;
      height: 100px;
      background-color: #8a8a8a;
      color: #2e2e2e;
      position: absolute;
      top: 60px;
      left: 40px;
      padding: 10px;
      font-size: 43px;
      line-height: 70px;
      text-align: center;
      border-radius: 0px 50px 0px 50px;
      
    }
    .two{
      position: absolute;
      left: 70px;
      bottom: 258px;
      color: #e1ff2d;
      font-size: 40px;
      font-weight: 500;
    }
    p{
      width: 74%;
      padding: 20px 20px 20px 30px;
      position: absolute;
      bottom:57px;
      left: 50px;
      border: 1px #e1ff2d solid;
      line-height: 35px;
      font-size: 19px;
      border-radius: 70px 0px 70px 0px;
    }
  }

  .waterPrincipleBigArea{
      width: 100%;
      height: 100dvh;
      color:#d8d8d8;
      position: relative;
      img{
        width: 60%;
        height: 58%;
        position: absolute;
        top:0px;
        right: 0px;
        border-radius: 600px 0px 0px 600px ;
      }
      .one{
        width: 27dvw;
        height: 100px;
        padding: 10px;
        background-color: #8a8a8a;
        color: #2e2e2e;
        position: absolute;
        top: 60px;
        left: 40px;
        border-radius: 0px 50px 0px 50px;
        text-align: center;
        line-height: 70px;
        font-size: 43px;
        
      }
      .two{
        color: #2d8bff;
        position: absolute;
        bottom: 258px;
        left: 70px;
        font-size: 40px;
        font-weight: 500;
      }
      p{
        width: 74%;
        border: 1px #2d8bff solid;
        border-radius: 70px 0px 70px 0px;
        padding: 20px 20px 20px 30px;
        position: absolute;
        bottom:57px;
        left: 50px;
        line-height: 35px;
        font-size: 19px;
      }
  }
</style>
