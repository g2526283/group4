<script>
import hamburger from "@/components/宇/hamburger.vue"
import Footer from "@/components/宇/Footer.vue"
import Gotop from "@/components/宇/Gotop.vue"
import axios from 'axios';
import gsap from 'gsap'
export default {
    data() {
        return {
            showAnimation: true,  //播放開頭動畫
            showInfo: false,  //默認不顯示資訊div
            showInfo2: false,
            showInfo3: false,
            showInfo4: false,
            showInfo5: false,
            showInfo6: false,
            showInfo7: false,
            
            items: [],
            // New
            animatedNumber: 0,
            animationTimeline: null,
            targetNumber: 0,
            targetNum2: 0,
            animationTimeline2: null,
            animatedNumber2: 0,
        }
    },
    mounted() {
        setTimeout(() => {
            this.showAnimation = false; //時間到 隱藏開頭動畫 跳到主介面
        }, 3000);

        this.fetchData()
        this.initAnimation()
        
    },
    
    methods: {
        show() {
            this.showInfo = !this.showInfo //使false變為true顯示
        },
        show2() {
            this.showInfo2 = !this.showInfo2
        },
        show3() {
            this.showInfo3 = !this.showInfo3
        },
        show4() {
            this.showInfo4 = !this.showInfo4
        },
        show5() {
            this.showInfo5 = !this.showInfo5
        },
        show6() {
            this.showInfo6 = !this.showInfo6
        },
        showPopup() {
            this.showInfo7 = true;
        },
        hidePopup() {
            // 滑鼠移開不消失
        },
        
        fetchData() {
            axios.get('./鳴儒/1.json')
                .then(response => {
                    this.items = response.data;
                    console.log(response.data)
                })
        },
        // new

        changeNumber(number, num2) {
            this.targetNumber = number
            this.targetNum2 = num2;
            
            if (this.animationTimeline) {
                this.animationTimeline.kill()
                // 停止之前的动画
            }
            if (this.animationTimeline2) {
                this.animationTimeline2.kill()
            }
            this.animationTimeline = gsap.to(this, { duration: 2, animatedNumber: this.targetNumber, roundProps: "animatedNumber", onUpdate: this.updateNumber })
            this.animationTimeline2 = gsap.to(this, { duration: 2, animatedNumber2: this.targetNum2, roundProps: "animatedNumber2", onUpdate: this.updateNumber })
        },
        updateNumber() {
            // 在动画更新时更新视图
            // 这个函数会在动画的每一帧都被调用
            // 因此，每次 animatedNumber 更新，视图都会更新
        },
        initAnimation() {
            // 初始化动画
            this.animationTimeline = gsap.to(this, { duration: 2, animatedNumber: this.targetNumber, roundProps: "animatedNumber", onUpdate: this.updateNumber })
            this.animationTimeline2 = gsap.to(this, { duration: 2, animatedNumber2: this.targetNum2, roundProps: "animatedNumber2", onUpdate: this.updateNumber })
        }
    },
    
    components:{
        Footer,
        hamburger,
        Gotop
    }
}

</script>

<template>
    <div class="firstArea">
        <hamburger/>
    </div>
    <!-- 開頭動畫 -->
    <div class="animation" v-if="showAnimation">
        <div class="spinner-box">
            <div class="solar-system">
                <div class="earth-orbit orbit">
                    <div class="planet earth"></div>
                    <div class="venus-orbit orbit">
                        <div class="planet venus"></div>
                        <div class="mercury-orbit orbit">
                            <div class="planet mercury"></div>
                            <div class="sun"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 台灣底圖 -->
    <div class="taiwan" v-else>
        <img src="/鳴儒/111.png" alt="" class="map">
        <!-- 按鈕 -->
        <div class="dot1" @click="this.show(), this.changeNumber(6150, 44912)"></div>
        <!-- div滑動動畫 -->
        <transition name="slide">
            <div class="area a" v-show="this.showInfo">
                <!-- 照片 -->
                <div class="img aa"></div>
                <!-- 標題 -->
                <div class="title">
                    <span>核一廠(已除役)</span>
                </div>
                <!-- 內部資訊 -->
                <div class="info">
                    一號機狀態:{{ items.length > 0 ? items[0]['核一廠一號機'] : 'Loading...' }} <br>
                    二號機狀態:{{ items.length > 0 ? items[0]['核一廠二號機'] : 'Loading...' }} <br>
                    <!-- <span>第一核能發電廠位於新北市石門區，已除役。高放射性核廢料有{{ this.animatedNumber }}束，低放射性核廢料則有44912桶。</span> -->
                    第一核能發電廠位於新北市石門區，已除役。高放射性核廢料有6150束，低放射性核廢料則有44912桶。
                </div>
            </div>
        </transition>
        <div class="dot2" @click="this.show2()"></div>
        <transition name="slide">
            <div class="area b" v-show="this.showInfo2">
                <div class="img bb"></div>
                <div class="title">
                    <span>核二廠(已除役)</span>
                </div>
                <div class="info">
                    一號機狀態:{{ items.length > 0 ? items[0]['核二廠一號機'] : 'Loading...' }} <br>
                    二號機狀態:{{ items.length > 0 ? items[0]['核二廠二號機'] : 'Loading...' }} <br>
                    第二核能發電廠位於新北市萬里區，以除役。高放射性核廢料有9620束，低放射性核廢料則有59216桶。
                </div>
            </div>
        </transition>
        <div class="dot3" @click="this.show3()"></div>
        <transition name="slide">
            <div class="area c" v-show="this.showInfo3">
                <div class="img cc"></div>
                <div class="title">
                    <span>核能研究所</span>
                </div>
                <div class="info">國家原子能科技研究院位於桃園市龍潭區。專門負責我國核安與核後端應用、民生輻射應用及新能源與系統整合技術應用等三大領域的研發。
                                    近年以累積之技術為基礎，擴大到再生能源與新能源領域低放射性核廢料約有17904桶。</div>
            </div>
        </transition>
        <div class="dot4" @click="this.show4()"></div>
        <transition name="slide">
            <div class="area d" v-show="this.showInfo4">
                <div class="img dd"></div>
                <div class="title">
                    <span>核三廠</span>
                </div>
                <div class="info">
                    一號機狀態:{{ items.length > 0 ? items[0]['核三廠一號機'] : 'Loading...' }}<br>
                    反應爐功率:100％ 發電量:980MWe<br>
                    二號機狀態:{{ items.length > 0 ? items[0]['核三廠二號機'] : 'Loading...' }}<br>
                    反應爐功率:100％ 發電量:981MWe<br>
                    第三核能發電廠位於屏東縣恆春鎮，未除役。高放射性核廢料有3451束，低放射性核廢料有9941桶。
                </div>
            </div>
        </transition>
        <div class="dot5" @click="this.show5()"></div>
        <transition name="slide">
            <div class="area e" v-show="this.showInfo5">
                <div class="img ee"></div>
                <div class="title">
                    <span>蘭嶼貯存場</span>
                </div>
                <div class="info">蘭嶼貯(ㄓㄨˇ)存場位於臺東縣蘭嶼鄉，是臺灣唯一的專門核廢料貯存場，現已停止接收核廢料。低放射性核廢料有100277桶。</div>
            </div>
        </transition>
        <div class="dot6" @click="this.show6()"></div>
        <transition name="slide">
            <div class="area f" v-show="this.showInfo6">
                <div class="img ff"></div>
                <div class="title">
                    <span>核四廠(未啟用)</span>
                </div>
                <div class="info">龍門核能發電廠(核四廠)位於新北市貢寮區。台灣龍門核能發電廠位於新北市龍門區，由台灣電力公司建設，
                                共有2部進步型沸水反應堆，每部1350兆瓦。自2014年封存，因商轉公投失敗，計劃拆除並改建為火力發電廠。</div>
            </div>
        </transition>
        <transition name="slide">
        <div class="title1" v-show="this.showInfo7">
            <h2>什麼是核能發電?</h2> <br>
            <h4>核能發電是利用核能產生電能的過程。通過核裂變或核聚變來獲得能量</h4>
            </div>
        </transition>
            <div class="trigger" @mouseover=" this.changeNumber(19221, 232250)" @mouseenter="showPopup" @mouseleave="hidePopup">

            </div>
            <transition name="slide">
        <div class="NuclearWaste" v-show="this.showInfo7">
            <div class="title2">
                <h1>什麼是核廢料?</h1> <br>
                核廢料是核能發電產生的副產品，含有放射性物質，需要妥善處理。它們可能對環境和人類健康造成危害。長期儲存和處理核廢料是一個重要的挑戰。<br>
                低放射核廢料總和:{{this.animatedNumber}} <br>
                高放射核廢料總和:{{ this.animatedNumber2 }}
            </div>
        </div>
        </transition>
    </div>
    <div class="lastArea" v-if="!showAnimation">
        <Footer/>
        </div>
    <div class="GotopArea">
        <Gotop/>
    </div>

</template>


<style>
.taiwan {
    width: 1600px;
    height: 2000px;
    position: relative;

    .map{
        width: 1600px;
        height: 2000px;
    }
    .area {
        width: 400px;
        height: 500px;
        background-color: rgb(37, 37, 37);
        border-radius: 20px;
        position: absolute;
        color: wheat;
        border: 2px solid wheat;

        .title {
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
        }

        .info {
            position: absolute;
            width: 100%;
            height: 35%;
            padding: 5%;
            bottom: 15%;
            font-size: medium;

            * {
                padding: 0%;

                bottom: 10%;
                text-align: center;
            }
        }
    }

    .dot1 {
        animation: mymove1 5s infinite;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: aliceblue;
        position: absolute;
        top: 80px;
        right: 270px;
    }

    .dot1:hover {
        transition: all 0.5s ease-out;
        transform: scale(1.3);
    }

    .a {
        left: 30px;
        top:  85px;
    }

    .dot2 {
        animation: mymove1 5s infinite;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: aliceblue;
        position: absolute;
        top: 117px;
        right: 240px;
    }

    .dot2:hover {
        transition: all 0.5s ease-out;
        transform: scale(1.3);
    }

    .b {
        left: 515px;
        top: 250px;
    }

    .dot3 {
        animation: mymove1 5s infinite;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: aliceblue;
        position: absolute;
        top: 295px;
        right: 445px;
    }

    .dot3:hover {
        transition: all 0.5s ease-out;
        transform: scale(1.3);
    }

    .c {
        right: 220px;
        top: 480px;
    }

    .dot4 {
        animation: mymove1 5s infinite;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: aliceblue;
        position: absolute;
        bottom: 110px;
        left: 830px;
    }

    .dot4:hover {
        transition: all 0.5s ease-out;
        transform: scale(1.3);
    }

    .d {
        left: 30px;
        bottom: 40px;
    }

    .dot5 {
        animation: mymove1 5s infinite;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: aliceblue;
        position: absolute;
        bottom: 130px;
        right: 260px;
    }

    .dot5:hover {
        transition: all 0.5s ease-out;
        transform: scale(1.3);
    }

    .e {
        right: -240px;
        bottom: 45px;
    }

    .dot6 {
        animation: mymove1 5s infinite;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: aliceblue;
        position: absolute;
        top: 190px;
        right: 90px;
    }

    .dot6:hover {
        transition: all 0.5s ease-out;
        transform: scale(1.3);
    }

    .f {
        right: -240px;
        top: 310px;
    }

    .img {
        width: 100%;
        height: 45%;
        padding: 10px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 20px;
    }

    .aa {
        background-image: url(/鳴儒/1.jpg)
    }

    .bb {
        background-image: url(/鳴儒/2.jpg)
    }

    .cc {
        background-image: url(/鳴儒/研究.jpg);
    }

    .dd {
        background-image: url(/鳴儒/3.jpg)
    }

    .ee {
        background-image: url(/鳴儒/蘭嶼.jpg);
    }

    .ff {
        background-image: url(/鳴儒/4.jpg);
        }
    }


@keyframes mymove1 {
    from {
        box-shadow: 0 0 36px rgb(225, 228, 70);
    }

    50% {
        box-shadow: 0 0 72px #fdff88;
    }

    to {
        box-shadow: 0 0 36px rgb(233, 241, 234);
    }
}

.slide-enter-from {
    transform: translateX(-100%);
    opacity: 1;
}

.slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: all .9s ease;
}



@keyframes spin {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(359deg);
    }
}

@keyframes spin3D {
    from {
        transform: rotate3d(.5, .5, .5, 360deg);
    }

    to {
        transform: rotate3d(0deg);
    }
}

@keyframes configure-clockwise {
    0% {
        transform: rotate(0);
    }

    25% {
        transform: rotate(90deg);
    }

    50% {
        transform: rotate(180deg);
    }

    75% {
        transform: rotate(270deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes configure-xclockwise {
    0% {
        transform: rotate(45deg);
    }

    25% {
        transform: rotate(-45deg);
    }

    50% {
        transform: rotate(-135deg);
    }

    75% {
        transform: rotate(-225deg);
    }

    100% {
        transform: rotate(-315deg);
    }
}

@keyframes pulse {
    from {
        opacity: 1;
        transform: scale(1);
    }

    to {
        opacity: .25;
        transform: scale(.75);
    }
}

.animation {
    animation: myAnimation 3s linear forwards;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.spinner-box {
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
}

.solar-system {
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.orbit {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #fafbfC;
    border-radius: 50%;
}

.earth-orbit {
    width: 330px;
    height: 330px;
    animation: spin 12s linear 0s infinite;
}

.venus-orbit {
    width: 240px;
    height: 240px;
    animation: spin 7.4s linear 0s infinite;
}

.mercury-orbit {
    width: 180px;
    height: 180px;
    animation: spin 3s linear 0s infinite;
}

.planet {
    position: absolute;
    top: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #3ff9dc;
}

.sun {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #ffab91;
}

.leo {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.blue-orbit {
    width: 330px;
    height: 330px;
    border: 2px solid #91daffa5;
    animation: spin3D 3s linear .2s infinite;
}

.green-orbit {
    width: 240px;
    height: 240px;
    border: 2px solid #91ffbfa5;
    animation: spin3D 2s linear 0s infinite;
}

.red-orbit {
    width: 180px;
    height: 180px;
    border: 2px solid #ffca91a5;
    animation: spin3D 1s linear 0s infinite;
}

.white-orbit {
    width: 120px;
    height: 120px;
    border: 2px solid #ffffff;
    animation: spin3D 10s linear 0s infinite;
}

.w1 {
    transform: rotate3D(1, 1, 1, 90deg);
}

.w2 {
    transform: rotate3D(1, 2, .5, 90deg);
}

.w3 {
    transform: rotate3D(.5, 1, 2, 90deg);
}

.NuclearWaste{
    position: absolute;
    top:50%;
    right:-240px;
    width:40%;
    height: 20%;
    border:3px solid wheat;
    background-color: rgba(0, 0, 0, 0.313);
    text-align: center;
    align-content: center;
    border-radius: 5%;
    }

.title1{
            position:absolute;
            width: 30%;
            height: 20%;
            border-radius: 5%;
            justify-content: center;
            text-align: center;
            align-items: center;
            font-size: 30px;
            top:35%;
            border:3px solid wheat;
            background: rgba(0, 0, 0, 0.196);
            padding: 2%;
            
        }

.title2{
            position:absolute;
            width: 100%;
            height: 50%;
            justify-content: center;
            font-size: 20px;
            top:10%;
            padding:1%;
        }
    
.trigger{
    position:absolute;
    height: 30%;
    width: 100%;

    top:30%;

}

.lastArea{
    
    width: 100%;
    height: 30dvh;
    background-color: #3E3E3E;
    padding-top: 72px;
    
}
</style>