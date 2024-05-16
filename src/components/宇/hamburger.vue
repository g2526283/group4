<template>
    <div id="menu">
    <!-- 被點擊就修改樣式 -->
    <div id="menu-bar" @click="menuOnClick()" :class="{'change': this.isOpen}">
        <div id="bar1" class="bar"></div>
        <div id="bar2" class="bar"></div>
        <div id="bar3" class="bar"></div>
    </div>
    <nav class="nav" id="nav" :class="{'change': this.isOpen}">
        <ul >
            <li id="liFirst":class="{'textchange': this.isOpen}">
                <RouterLink class="routerItem" to="/">
                    <div class="position">
                        <i class="fa-solid fa-sun"></i>
                        <h1>回到首頁</h1>
                    </div>
                </RouterLink>
            </li>
            <li id="liFirst":class="{'textchange': this.isOpen}">
                <RouterLink class="routerItem" to="/fire">
                    <div class="position">
                        <i class="fa-solid fa-fire"></i>
                        <h1>火力發電</h1>
                    </div>
                </RouterLink>
            </li>
            <li id="liSecond" :class="{'textchange': this.isOpen}">
                <RouterLink class="routerItem" to="/RenewableEnergySource">
                    <div class="position">
                        <i class="fa-solid fa-recycle"></i>
                        <h1>再生能源</h1>
                    </div>
                </RouterLink>
            </li>
            <li id="liThirth" :class="{'textchange': this.isOpen}">
                <RouterLink class="routerItem" to="/HomeView">
                    <div class="position">
                        <i class="fa-solid fa-circle-radiation"></i>
                        <h1>核能發電</h1>
                    </div>
                </RouterLink>
            </li >
            <li id="liFourth" :class="{'textchange': this.isOpen}">
                <RouterLink class="routerItem" to="/circle">
                    <div class="position">
                        <i class="fa-solid fa-bolt-lightning"></i>
                        <h1>電力預測</h1>
                    </div>
                </RouterLink>
            </li>
        </ul>
    </nav> 
    </div>

    <div class="menu-bg" id="menu-bg" :class="{'change-bg': this.isOpen}"></div>
</template>

<script>
    import { RouterLink, RouterView } from 'vue-router'
    export default {
        data() {
            return {
                isOpen: false
            };
        },

        methods: {
            menuOnClick() {
                this.isOpen = !this.isOpen

            }
        },
        components:{
            RouterLink,
        }
        
    }
</script>

<style scoped lang="scss">
    // 點擊之前
    #menu {
        z-index: 10;
    }
    #menu-bar {
        width: 45px;
        height: 40px;
        margin: 30px 0 20px 20px;
        cursor: pointer;
    }
    .bar {
        height: 5px;
        width: 100%;
        background-color: #e1ff2d;
        display: block;
        border-radius: 5px;
        transition: 1s ease;
    }
    // 第一條 bar 位置調整
    #bar1 {
        transform: translateY(-4px);
    }
    // 第三條 bar 位置調整
    #bar3 {
        transform: translateY(4px);
    }

    .nav {
        transition: 0.7s ease;
        display: none;
        ul{
            padding-top:0px;
            li{
                margin: 40px 60px 60px 20px;
                list-style: none;
                a {
                    font-size: 60px;
                    display: flex;
                    color: #3E3E3E;
                    text-decoration: none;
                    .position{
                        width: 195px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        h1{
                            font-size: 25px;
                        }
                    }
                    &:hover {
                        font-weight: bold;
                    }
                }
            }
        }
    }

    //圓圈位置與樣式
    .menu-bg{
        position: absolute;
        top: -50px;
        left: -50px;
        position: fixed;
        z-index: 8;
        width: 0;
        height: 0;
        margin: 30px 0 20px 20px;
        background: radial-gradient(circle, #e1ff2d, #e1ff2d);
        border-radius: 50%;
        transition: 0.5s ease;
    }
    // 漢堡位置
    #menu {
        position: absolute;
        top: 20px;
        left: 30px;
        position: fixed;
    }


    // 點擊之後
    .change {
        display: block;
    }
    .change .bar {
        background-color: #2e2e2e;
    }
    // 修改 bar1 位置
    .change #bar1 {
        transform: translateY(4px) rotateZ(-45deg);
    }
    // 修改 bar2 透明度
    .change #bar2 {
        opacity: 0;
    }
    // 修改 bar3 位置
    .change #bar3 {
        transform: translateY(-6px) rotateZ(45deg);
    }
    .change-bg {
        width: 1800px;
        height: 1500px;
        transform: translate(-60%,-20%);
    }
    // 讓選單有滑入的效果
    li.textchange {
        animation: slideFromLeft 0.8s ease forwards;
    }
    @keyframes slideFromLeft {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(90%);
        }
    }
</style>
  