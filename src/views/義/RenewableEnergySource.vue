<!-- 
    vue3 要使用元件需要在，script 後面加上 setup 
    然後 import 元件名 from 檔案位址，即可使用元件 

    import location from "../components/location.vue"
    <scropt setup> 
-->
<!--  
    vue2 要使用元件需要在 components 中元件化
    
    import location from "../components/location.vue"
    export default{
    data(){
        return{
        }
    },
    components:{ 
        location
    }
}
-->

<script>
import Spline from "spline-vue/v3";
import buttonCreat from "@/components/義/buttonCreat.vue"
import taiwan from "@/components/義/taiwan.vue"
import equipment from "@/components/義/equipment.vue"
import principle from "@/components/義/principle.vue"
import hamburger from "@/components/宇/hamburger.vue"
import Footer from "@/components/宇/Footer.vue"
import Gotop from "@/components/宇/Gotop.vue"

export default{
    data(){
        return{
            // 要傳給元件的資料
            // 子組件要顯示對應能源的內容
            energyType:['太陽能','風力','水力'],
            equipment:  [{title:'太陽光電建置',
                        text:'太陽光電建置：台電公司自2008年迄2021年已建置完成44個光電站，總裝置容量283.1MW（百萬瓦），年發電量約3.5億度，每年約可抑制18萬公噸CO2排放。'},
                        {title:'陸域風電建置',
                        text:'台電公司自2003年迄2021年已建置完成17個風電站，總裝置容量312,360kW（千瓦），年發電量約7.5億度，每年約可抑制37.7萬公噸CO2排放。'},
                        {title:'中大型水力發電',
                        text:'截至2022年，台電已建置慣常式水力發電裝置容量1,800MW（百萬瓦）、抽蓄水力發電裝置容量共計2,602ＭＷ（百萬瓦）。中大型水力計畫估計約尚有110MW（百萬瓦）開發潛能，目前持續評估推展中。'},],
            principle: [{
                        title:'認識太陽光電',
                        text:'「太陽光能」是靠太陽能板直接將特定頻率的光能轉換成電能。太陽能板以P型與N型半導體材料接合構成正極與負極。當太陽光照射時，陽光的能量會使半導體材料內的正、負電荷分離，並分別往正（P 型）極、負（N型）極方向移動，進而在兩極之間產生電位差，以導線接通兩極後即產生電流。一般來說，太陽能板日照面積越大，可產生的電能也越多。',
                        image:'/義/sun1.png'
                        },
                        {title:'認識風力發電',
                        text:'風力發電是藉由空氣流動推動風車葉片後，使馬達轉動產生機械能，進而轉換成電能。因葉片幾何型態及風吹角度，在葉片上會產生阻力和升力，並帶動葉片轉動，世界上常見的水平軸風機主要即是運用升力帶動旋轉，一般來說，當葉片越長，受風面積越大，風能越多，可產生的電能也越多。',
                        image:'/義/wind1.png'
                        },   
                        {title:'認識水力發電',
                        text:'水力發電是歷史悠久的再生能源，其原理是透過水位高低落差的衝擊力，帶動水輪機旋轉產生機械能，進而推動發電機產生電力。水力發電依運轉型態可分為慣常式和抽蓄式，慣常式是運用河川流量發電，又可分為川流式、調整池式、水庫式；抽蓄式則設有上池與下池，用電尖峰時運用上池流至下池的位能發電，離峰時段再將水從下池抽回上池，使水資源循環利用。',
                        image:'/義/water1.png'
                        }],
            // 按鈕是否被觸發
            isHovered: false,
            // 被觸發按鈕的值
            buttonValue: '',
            scene:"https://prod.spline.design/1GmED3VTNbonHAD2/scene.splinecode",
        }
    },
    methods:{
        //處理 buttonCreat傳入的 value ，要傳給 taiwan 做使用 ，value 為默認名稱
        handleHover(value) {
            // console.log(value)
            this.isHovered = value;
        },
        handleButtonValue(value) {
            // console.log(value)
            this.buttonValue = value;
        }
    },
    // 有使用到的元件在這邊做元件化
    components:{ 
        buttonCreat,
        taiwan,
        equipment,
        principle,
        hamburger,
        Footer,
        Spline,
        Gotop
    },

}
</script>

<template>
    <div class="firstArea">
        <hamburger/>
        <Spline :scene="scene" />
    </div>
    <div class="secondArea">
        <div class="principleArea">
            <!-- 傳入變數值 -->
            <principle :title="principle[0].title" :text="principle[0].text" :image="principle[0].image" :energySelect="energyType[0]"/>
        </div>
    </div>
    <div class="thirdArea">
        <div class="equipmentArea">
            <equipment :title="equipment[0].title" :text="equipment[0].text" />
        </div>
        <!-- 監聽子元件 hover 事件 (自定義事件) 並把值傳入 handleHover -->
        <!-- 監聽子元件 buttonValue 事件並把值傳入 handleHover -->
        <div class="buttonCreatArea">
            <buttonCreat :energySelect='energyType[0]' @hover="handleHover" @buttonValue="handleButtonValue"/>
        </div>
        <div class="taiwanArea">
            <taiwan :isHovered="isHovered" :buttonValue="buttonValue" :energySelect="energyType[0]"  />
        </div>
    </div>

    <div class="fourthArea">
        <div class="principleArea">
            <principle :title="principle[1].title" :text="principle[1].text" :image="principle[1].image" :energySelect="energyType[1]"/>
        </div>
    </div>
    <div class="fifthArea">
        <div class="equipmentArea">
            <equipment :title="equipment[1].title" :text="equipment[1].text" />
        </div>
        <div class="buttonCreatArea">
            <buttonCreat :energySelect='energyType[1]' @hover="handleHover" @buttonValue="handleButtonValue"/>
        </div>
        <div class="taiwanArea">
            <taiwan :isHovered="isHovered" :buttonValue="buttonValue" :energySelect="energyType[1]" />
        </div>
    </div>

    <div class="sixthArea">
        <div class="principleArea">
            <principle :title="principle[2].title" :text="principle[2].text" :image="principle[2].image" :energySelect="energyType[2]"/>
        </div>
    </div>
    <div class="seventhArea">
        <div class="equipmentArea">
            <equipment :title="equipment[2].title" :text="equipment[2].text" />
        </div>
        <div class="buttonCreatArea">
            <buttonCreat :energySelect='energyType[2]' @hover="handleHover" @buttonValue="handleButtonValue"/>
        </div>
        <div class="taiwanArea">
            <taiwan :isHovered="isHovered" :buttonValue="buttonValue" :energySelect="energyType[2]"/>
        </div>
    </div>
    <div class="eightArea">
        <Footer/>
    </div>
    <div class="ten">
        <Gotop/>
    </div>
</template>


<style scoped lang="scss">

// 父層只對元件做定位與背景色
.firstArea{
    width: 100%;
    height: 100dvh;
    background-color: #313131;
}
.secondArea{
    background-color: #313131;
    width: 100%;
    height: 100dvh;
}

.thirdArea{
    width: 100%;
    height: 100dvh;
    position: relative;
    background-color: #242424;
    .equipmentArea{
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .buttonCreatArea{
        position: absolute;
        bottom: 45px;
        left: 70px;
    }
    .taiwanArea{
        position: absolute;
        bottom: 20px;
        right: 70px;
    }
}
.fourthArea{
    background-color: #313131;
    width: 100%;
    height: 100dvh;
}
.fifthArea{
    width: 100%;
    height: 100dvh;
    position: relative;
    background-color: #242424;
    .equipmentArea{
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .buttonCreatArea{
        position: absolute;
        bottom: 45px;
        left: 70px;
    }
    .taiwanArea{
        position: absolute;
        bottom: 20px;
        right: 70px;
    }
}
.sixthArea{
    background-color: #313131;
    width: 100%;
    height: 100dvh;
}
.seventhArea{
    width: 100%;
    height: 100dvh;
    position: relative;
    background-color: #242424;
    .equipmentArea{
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .buttonCreatArea{
        position: absolute;
        bottom: 45px;
        left: 70px;
    }
    .taiwanArea{
        position: absolute;
        bottom: 20px;
        right: 70px;
    }
}
.eightArea{
    width: 100%;
    height: 30dvh;
    background-color: #3E3E3E;
    padding-top: 72px;
}
</style>