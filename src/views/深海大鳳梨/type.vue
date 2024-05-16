<script setup>


</script>

<template>


  <div class="thirdArea">

    <div class="gif gas">
      <a href="https://www.youtube.com/watch?v=mnLrzjNAOTA"><img class="gif"
          src="https://media.tenor.com/59_MpWc8_KQAAAAi/gas.gif" alt=""> GAS</a>
    </div>

    <div class="gif coal">
      <a href="https://www.youtube.com/watch?v=Be17A9rS9cU"><img class="gif"
          src="https://media1.tenor.com/m/u1Ra_6DevhAAAAAd/fire-campfire.gif" alt="">COAL</a>
    </div>

    <div class="gif fuel">
      <a href="https://www.youtube.com/watch?v=mkMtX8hKiDk"><img class="gif"
          src="https://media1.tenor.com/m/NlW_wapEx7cAAAAC/no-gas.gif" alt="">FUEL</a>
    </div>
  </div>



</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap');

.thirdArea {
  width: 100vw;
  height: 500px;
  border: 1px solid #000;
  display: flex;
  justify-content: space-around;
  align-items: center;


}

.gif,
.gif:focus {
  width: 400px;
  height: 400px;
  position: relative;
  min-width: 200px;
  background: transparent;
  color: #E1332D;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  box-sizing: inherit;
  padding: 10px 20px;
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(225, 51, 45, 0);
  outline: 1px solid !important;
  outline-color: rgba(225, 51, 45, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}

.gif:hover {
  color: #E1332D;
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(225, 51, 45, 0.5), 0 0 20px rgba(225, 51, 45, 0.2);
  outline: 1px solid;
  outline-color: rgba(225, 51, 45, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388;
}

a {
  color: #E1332D;
  font-family: "Cabin Sketch", sans-serif;
  text-decoration: none;
  font-size: 70px;
}
</style>
