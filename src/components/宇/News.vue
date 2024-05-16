<!-- 新聞動態展開元件 -->
<script>
export default {
    data() {
        return {
            
        };
    },

};
</script>


<template>
    <div class="event0815">
      <h2>2017</h2>
      <h4>08 / 15</h4>
      <p>當天下午當時發電量 438.42 萬瓩（佔當時發電能力的 11.94%）的大潭電廠，來自中油的天然氣供應突然中斷，導致六部機組跳機，整體電力供應瞬間減少近百分之十二。</p>
    </div>
    <div class="event0513">
      <h2>2021</h2>
      <h4>05 / 13</h4>
      <p>高雄興達電廠因為路北超高壓變電所（路北E/S）人為操作失誤，導致下午2點半到3點間兩次低頻卸載說明報告，造成82萬戶停電；3點以後，因備轉容量不足，開始6輪的分區輪流停電。扣除重複停電戶，共計約415萬6,300戶受影響。</p>
    </div>
    <div class="event0517">
      <h2>2021</h2>
      <h4>05 / 17</h4>
      <p>中午興達單一機組故障，雖於同日傍晚復電，然當晚仍因抽蓄電力用罄、太陽能發電歸零等因素，實施低頻卸載及一輪緊急分區限電，影響約100萬戶。
      </p>
    </div>
    <div class="event0303">
      <h2>2022</h2>
      <h4>03 / 03</h4>
      <p>因興達電廠事故，導致南部地區電力供需失衡，台南龍崎超高壓變電所以南的機組跳脫，包括豐德、嘉惠、麥寮、核三、大林、南火、興達電廠等機組陸續跳脫，造成南部地區停電。</p>
    </div>
</template>
  

<style scoped lang="scss">
  h2{
    font-size: 80px;
    font-family: "Dosis", sans-serif;
    font-style: normal;
    font-weight: 400;
  }
  h4{
    font-size: 40px;
    font-family: "Dosis", sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  p{
    width: 200px;
    font-family: "Dosis", sans-serif;
    color: #bcbcbc;
    font-size: 18px;
    letter-spacing: 3px;
  }
  .event0815{
    width: 25%;
    height: 100dvh;
    border-right: 1px solid #d8d8d8;
    background-color: #3E3E3E;
    color: #E1FF2D;
    padding-top: 88px;
    padding-left: 42px;
    background-image: url(./public/宇/0815.png);
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: cover;
    &:hover{
      width: 60%;
      transition: 1s;
    }
  }
  .event0513{
    width: 25%;
    height: 100dvh;
    border-right: 1px solid #d8d8d8;
    background-color: #3E3E3E;
    color: #E1FF2D;
    padding-top: 200px;
    padding-left: 42px;
    background-image: url(./public/宇/0513.png);
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: cover;
    &:hover{
      width: 60%;
      transition: 1s;
    }
  }
  .event0517{
    width: 25%;
    height: 100dvh;
    border-right: 1px solid #d8d8d8;
    background-color: #3E3E3E;
    color: #E1FF2D;
    padding-top: 88px;
    padding-left: 42px;
    background-image: url(./public/宇/0303.png);
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: cover;
    p{
      color: #333333;
    }
    &:hover{
      width: 60%;
      transition: 1s;
    }
  }
  .event0303{
    width: 25%;
    height: 100dvh;
    background-color: #3E3E3E;
    color: #E1FF2D;
    padding-top: 200px;
    padding-left: 42px;
    background-image: url(./public/宇/0517.png);
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: cover;
    &:hover{
      width: 60%;
      transition: 1s;
    }
  }
</style>