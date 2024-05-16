<script setup>

import { onMounted, onUpdated, ref } from "vue";

let count = ref(0)


let stop
let stop2
onMounted(function () {

    stop = window.setInterval(() => {
        count.value += 587
    }, 10);

    stop2 = window.setInterval(() => {
        count.value += 587
    }, 10);
})
onUpdated(function () {

    if (count > 288154) {
        window.clearInterval(stop)
    }

    if (count > 237492) {
        window.clearInterval(stop2)
    }
})

</script>
<template>
    <div class="space"></div>

    <div class="num">
        <h1>2023</h1>
        <div class="count 1" v-if="count < 288154">全國總發電量：{{ count }}</div>
        <div class="count -1" v-else>全國總發電量：288,154</div>
        <div class="count 1" v-if="count < 237492">全國總發電量：{{ count }}</div>
        <div class="count -1" v-else>火力總發電量：237,492</div>

    </div>

</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Stalinist+One&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');


.num {
   
   
    margin: 3%;
    margin-bottom: 12%;

    h1 {

        font-family: "Stalinist One", sans-serif;
        color: aliceblue;
        font-size: 50px;
        text-align: center;

    }

    .count {

        font-family: "Orbitron", sans-serif;
        text-align: center;
        color: #fff;
        font-size: 40px;
    }
}
</style>
