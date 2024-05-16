<script>
import Spline from "spline-vue/v3";
export default{
    data(){
        return{
            // scene: "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
            scene: "https://prod.spline.design/E8XxpHBb4JExjJDi/scene.splinecode",
            
            
        }
    },
    components:{
        Spline
    }
}
</script>

<template>
<Spline :scene="scene" />

</template>

<style>

</style>