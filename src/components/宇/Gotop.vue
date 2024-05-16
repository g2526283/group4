<script>
export default{
    data(){
        return{
            hideGoTop: true
        }
    },
    methods:{
        handleScroll() {
            if (window.scrollY > 200) {
                this.hideGoTop = false;
                
            } else {
                this.hideGoTop = true;  
            }
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
        
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>

<template>
    <div class="gotop" :class="{ hide: hideGoTop }" @click="scrollToTop">
        <button class="goTopBtn" >
            <i class="fa-solid fa-arrow-up"></i>
        </button>
    </div>
</template>

<style scoped lang="scss">
.gotop{
    z-index: 9999;
    position: fixed;
    right: 10px;
    bottom: 10px;
    transition: transform 0.2s;
    .goTopBtn {
        display: block;
        text-align: center;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border: 1px solid #E1FF2D;
        margin: 0 30px 25px 0;         
        .fa-solid {
            color: #E1FF2D;
            line-height: 30px;               
        }            
        transition: 0.7s;
        &:hover{
            scale: 1.09;
            
        }
    }
}
.hide {
    display: none;
}
</style>