components裡放的是公用的樣式像是固定式菜單欄及最底下的footer
<!-- 這裡是js -->
<script >  
import { RouterLink, RouterView } from 'vue-router'
// option API 寫法
export default{
    // components => 能放在 <template> 中當標籤使用
    components:{
        RouterLink,
    }
}
</script>


<!-- 這裡是html -->
<template>  
    <div class="headerArea">
        <!-- 左側views有新增這裡就要新增，這裡是放置導航列內容的地方 -->
        <!-- <RouterLink class="routerItem" to="/">Home</RouterLink> -->
        <!-- <RouterLink class="routerItem" to="/">Fast</RouterLink>
        <RouterLink class="routerItem" to="/test">test</RouterLink>
        <RouterLink class="routerItem" to="/fasTest">fasTest</RouterLink> -->
        

    </div>
  
</template>

<!-- 這裡是css -->
<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

</style>