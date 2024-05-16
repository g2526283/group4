<!-- spline 3d檔案元件 -->
<script>
import Spline from "spline-vue/v3";
export default {
    data() {
        return {
            scene1:"https://prod.spline.design/DTqipOduoxyDnkak/scene.splinecode",
        };
    },
    components:{
    Spline,
  },

};
</script>


<template>
    <Spline :scene="scene1" />
</template>


<style scoped lang="scss">

</style>