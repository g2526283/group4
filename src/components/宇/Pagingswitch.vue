<!-- spline 3d檔案元件 -->
<script>
export default {
    data() {
        return {
            
        };
    },
    components:{
    
    },

};
</script>


<template>
    <div class="fire">
        <RouterLink class="routerItem" to="/fire">
            <i class="fa-solid fa-fire"></i>
            <div class="fire mark">火力發電</div>
        </RouterLink>
    </div>
    <div class="regeneration">
        <RouterLink class="routerItem" to="/RenewableEnergySource">
            <i class="fa-solid fa-recycle"></i>
            <div class="regeneration mark">再生能源</div>
        </RouterLink>
    </div>
    <div class="nuclearenergy">
        <RouterLink class="routerItem" to="/HomeView">
            <i class="fa-solid fa-circle-radiation"></i>
            <div class="nuclearenergy mark">核能發電</div>
        </RouterLink>
    </div>
    <div class="electricity">
        <RouterLink class="routerItem" to="/circle">
            <i class="fa-solid fa-bolt-lightning"></i>
            <div class="electricitymark mark">電力預測</div>
        </RouterLink>
    </div>
</template>


<style scoped lang="scss">
    div{
        width: 150px;
        height: 150px;
        margin: 60px;
        .mark{
            margin: 22px auto;
            text-align: center;
            font-family: "Dosis", sans-serif;
            width: 94px;
            height: 37px;
            padding-top: 6px;
            color: #3E3E3E;
            font-weight: 600;
            border: 1px solid;
            border-radius: 19px;
            background-color: #d8d8d8;
            opacity: 0.0;
        }
    }
    .fire:hover{
        .mark{
            transition: 0.8s;
            opacity: 0.5; 
        }
    }
    .regeneration:hover{
        .mark{
            transition: 0.8s;
            opacity: 0.5; 
        }
    }
    .nuclearenergy:hover{
        .mark{
            transition: 0.8s;
            opacity: 0.5; 
        }
    }
    .electricity:hover{
        .mark{
            transition: 0.8s;
            opacity: 0.5; 
        }
    }
    a{
        text-decoration: none;
    }
    i{
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #E1FF2D;
    text-align: center;
    padding-top: 42px;
    font-size: 60px;
    color: #E1FF2D;
    margin-top: 18px;
    scale: 0.9;
    transition: 0.5s;
        &:hover{
            color:#3E3E3E ;
            border: 2px solid #878787;
            background-color: #878787;
            scale: 1;
        }
        &:active{
            scale: 0.9;
            color:#E1FF2D ;
        }
    }
  
    
</style>