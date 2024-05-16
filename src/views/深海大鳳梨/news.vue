<script setup>


</script>

<template>
<h1>NEWS</h1>
  <div class="newss">


    <div class="news 1">
      <a href="https://udn.com/news/story/7238/7486739"><img src="/public/深海大鳳梨/news1.png" alt=""></a>
    </div>

    <div class="news 2">
      <a href="https://www.peopo.org/news/685096"><img src="/public/深海大鳳梨/news2.png" alt=""></a>
    </div>

    <div class="news 3">
      <a
        href="https://tw.news.yahoo.com/%E4%B8%AD%E7%81%AB%E6%94%B9%E5%96%84%E7%A9%BA%E6%B1%A1%E6%98%AF%E9%A8%99%E5%B1%80-%E7%87%83%E6%B0%A3%E6%A9%9F%E7%B5%84%E5%B0%87%E5%A2%9E%E5%8A%A0%E5%88%B06%E9%83%A8-105621922.html"><img
          src="/public/深海大鳳梨/news3.png" alt=""></a>
    </div>


  </div>


</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap');
.newss {
  width: 100vw;
  
  display: flex;
  justify-content: space-around;

  

  .news {
    width: 40vw;
    height: 60vh;

    margin: 50px;
    border-radius: 30px;
    overflow: auto;
    opacity: 0.9;
  }
}
h1{
  font-family: "Cabin Sketch", sans-serif;
  text-align: center;
  margin-top: 10%;
  color: #E1332D;
  font-size: 90px;
}
</style>
