<script >
// import Spline from "spline-vue/v3";
import News from "@/components/宇/News.vue";
// const News = () => import('../components/宇/News.vue');
import Barchart from "@/components/宇/Barchart.vue";
import Piechart from "@/components/宇/Piechart.vue";

import header3d from "@/components/宇/header3d.vue";
import Pagingswitch from "@/components/宇/Pagingswitch.vue";
import Loadingitem from "@/components/宇/Loadingitem.vue";
import hamburger from "@/components/宇/hamburger.vue";
import Footer from "@/components/宇/Footer.vue";
import Gotop from "@/components/宇/Gotop.vue"

export default {
  data() {
    return {
      hideGoTop: true,
      newsLoaded: false,
      targetNumber: 1000,
    }
  },
  components:{
    News,
    Barchart,
    Piechart,
    Footer,
    header3d,
    Pagingswitch,
    Loadingitem,
    hamburger,
    

  },
  
  methods: {
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


    handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 當元素進入視圖時進行延遲加載
          this.loadNews();
          observer.unobserve(entry.target); // 加載後停止觀察
        }
      });  
    },
    loadNews() {
      // 加載新聞內容的示例
      import('@/components/宇/News.vue').then(module => {
        this.$options.components.News = module.default;
        this.newsLoaded = true;
      }).catch(error => {
        console.error('加載新聞組件時出錯：', error);
      });
    },

    
    
  },
  mounted() {
    // const viewer = new window.SplineViewer(); 
    // /假设 SplineViewer 是通过全局方式导出的
    // viewer.attachTo(this.$refs.viewerContainer); 
    // 将 viewer 附加到 DOM 中
    // const year = document.querySelector('.year')
  
    window.addEventListener('scroll', this.handleScroll);
    fetch("./public/經濟部能源署_發電量年資料.json")
      .then(res => res.json())
      .then(data => {
        console.log(data[20].總發電量_全國)
        console.log(data)
        let powerinnum = []
        for (let i = 0; i < 21; i++) {
          powerinnum.push(data[i].總發電量_全國)
        }
        console.log(powerinnum)
      });

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // 根據需要調整
    };
    const observer = new IntersectionObserver(this.handleIntersect, options);
    const target = this.$refs.newsComponent; // 對 News 組件的引用

    observer.observe(target);
  },
  
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

}


</script>


<template>
  <!-- 這是 Vue Router 中的一個組件，用於根據路由顯示不同的頁面內容。 -->
  
  <Loadingitem/>
  <hamburger/>
  <div class="area1">
    <!-- 放入heard3d元件 -->
    <header3d/>
    <div class="trigger"><p>電 力 消 耗 中....</p></div>
  </div>

  <div class="area2">
    <!-- 放入News元件 -->
     <!-- 新聞組件的佔位符 -->
    <div ref="newsComponent"></div>
    <!-- 實際的新聞組件在延遲加載後顯示 -->
    <News v-if="newsLoaded"/>
  </div>

  <div class="area3">
    <!-- 放入Barchart元件 -->
    <!-- 橫向柱狀圖 -->
    <Barchart/>
  </div>

  <div class="area4">
    <!-- 放入Piechart元件 -->
    <!-- 圓餅圖 -->
    <Piechart/>
  </div>

  <div class="area5">
    <!-- 放入Pagingswitch元件 -->
    <Pagingswitch/>
  </div>

  <div class="area6">
    <!-- 放入Footer元件 -->
    <Footer/>
  </div>

  <div class="gotop" :class="{ hide: hideGoTop }" @click="scrollToTop">
    <button class="goTopBtn" >
        <i class="fa-solid fa-arrow-up"></i>
    </button>
  </div>
 

</template>


<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.loading{
  position: fixed;
  top: 50dvh;
  height: 30px;
  width: 100%;
}

.header {
  width: 100dvh;
  height: 20dvh;
}

.area1 {
  width: 100%;
  height: 100dvh;
  .trigger{
    position: fixed;
    width: 63dvw;
    height: 31dvh;
    top: 40dvh;
    left: 17dvw;
    // border: 2px solid white;
    p{
      font-family: "Dosis", sans-serif;
      position: fixed;
      font-size: 22px;
      top: 85dvh;
      left: 45dvw;
      opacity: 0.0;
    }
  }
  .trigger:hover{
    p{
      opacity: 0.8;
      transition: 0.5s;
    }
  }
}

.area2 {
  width: 100%;
  height: 100dvh;
  display: flex;
  font-family: "Dosis", sans-serif;
}

.area3 {
  width: 100%;
  height: 100dvh;
  display: flex;
}

.area4 {
  width: 100%;
  height: 100dvh;
  position: relative; 
  background-color: #3E3E3E;
}

.area5{
  width: 100%;
  height: 70dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252525;
}

.area6{
  width: 100%;
  height: 30dvh;
  background-color: #3E3E3E;
  padding-top: 72px;
}

.gotop{
     z-index: 7;
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
