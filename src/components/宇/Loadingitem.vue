<script>
    export default {
        data() {
            return {
            loadingnum:0,
            };
        },
        methods: {
            
        },
    };
</script>

<template>
    <button type="button" @click="this.loadingnum+=13" v-if="this.loadingnum<100"><i class="fa-solid fa-heart"></i></button>
    
    <div class="loading" v-if="this.loadingnum<100">
        <div class="ts-progress is-active">
            <div class="bar" :style="{'--value':loadingnum}" >
                {{ loadingnum }}%
            </div>
        </div>
    </div>
    <div class="loadingover" v-else>

    </div>
</template>

<style lang="scss" scoped>
    button{
        z-index: 5;
        color: #d8d8d8;
        position: fixed;
        right: 44px;
        bottom: 25px;
        font-size: 40px;
        &:active{
            scale: 0.9;
            color: #E1FF2D;
        }
    }

    .loading{
        z-index: 4;
        position: fixed;
        width: 100%;
        height: 100dvh;
        background-color: #252525;
        top: 0;
        left: 0;
        padding-top: 50dvh;
        .bar{
            background: var(--accent-color, #e1ff2d);
        }
    }
    .loadingover{
        display: none;
    }
</style>