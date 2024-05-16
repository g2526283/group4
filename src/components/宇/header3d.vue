<!-- spline 3d檔案元件 -->
<script>
import Spline from "spline-vue/v3";
export default {
    data() {
        return {
            // scene:"https://prod.spline.design/NwwVAT2GOgdsMlLS/scene.splinecode",
            scene:"https://prod.spline.design/8N68qqmZj0CjuLAh/scene.splinecode",
        };
    },
    components:{
    Spline,
  },

};
</script>


<template>
    <Spline :scene="scene" />
</template>


<style scoped lang="scss">

</style>