<!-- 這裡是js -->
<script>
  export default {
    data() {
      return {
        // energyType[] 存放 data 經過 EnergyType (能源種類) 過濾後的物件
        // city[] 存放從 energyType[] 過濾出的不重複的縣市名稱
        // buttonShow[] 存放 energyType[] 經過 button.value (縣市名稱) 過濾後的物件
        energyType: [],
        city: [],
        buttonShow: [],
        modalVisible: false,

      }
    },
    // 由父層傳入的屬性，子層的名字要跟父層一樣 eg.子層準備容器，父層丟資料給子層
      props:{
      // 第一次過濾的條件 (能源種類) 
      energySelect: {
        // 不設定defualt會報錯，子組件無法正常被created，因為 childEnergy 沒有被定義，導致 created 時建立的 fetch 報錯
        default: ''
      }
    },
    methods: {
      // fetch 檔案用 EnergyType 過濾
      energyTypeFilter() {
        fetch("/義/power.json")
          .then(res =>res.json())
          .then((data) => {
              data.forEach(item => {
                  // 條件由父層傳入 props 
                  // .includes() 包含括號內的字串就回傳true
                  if(item.EnergyType.includes(this.energySelect)){
                      this.energyType.push(item)
                  }
              })

              this.cityFilter() 
          })
      },
      // 從 energyType[] 過濾出不重複的縣市名稱
      cityFilter(){
        this.energyType.forEach(item => {
          if(!this.city.includes(item.Address.substring(0,3))){
              this.city.push(item.Address.substring(0,3))
          }
        })
      },
      // energyType[] 用 button.value 過濾
      dataFilter(buttonCity){
        this.energyType.forEach(item => {
          if(item.Address.includes(buttonCity)){
              this.buttonShow.push(item)
          }
        })
        console.log(this.buttonShow)
      },    

      // 切換互動視窗狀態(隱藏 or 消失) 
      // *tooggle 切換 *modal 互動視窗
      toggleModal(buttonCity) {
        // 將 button.value 傳給 dataFilter 過濾要顯示的資料
        // this.$refs.標籤名 引用已指定的標籤 ( ref = 標籤名)
        // if(this.$refs.targetModal.style.display === "none"){
        //   this.dataFilter(buttonCity)
        //   this.$refs.targetModal.style.display = "block";
        // }
        // else{
        //   this.$refs.targetModal.style.display = "none";
        // }
        //2021/5/12 將上述改用v-if寫法
        this.buttonShow = []
        this.dataFilter(buttonCity)
        this.modalVisible = !this.modalVisible;

      },
      mouseEnterEvent(item) {
        console.log('傳入buttonValue')
        // 觸發 hover 事件，傳入 true 給父層
        this.$emit('hover', true)
        // 觸發 buttonValue 事件，傳入 item 給父層
        this.$emit('buttonValue', item)
        // console.log('handleMouseEnter')

      },
      // 滑鼠離開 button
      mouseLeaveEvent() {
        console.log('清空buttonValue')
        this.$emit('hover', false)
        this.$emit('buttonValue', '')
        // console.log('handleMouseLeave')
      }
    },

    // 生命週期中的 created() 階段先執行 fetch 的操作防止非同步的問題發生 (網頁載好了但資料還沒fetch，會報錯)
    created() {
      this.energyTypeFilter()
    },
  }
</script>

<!-- 這裡是html -->
<template>
  <div class="buttonCreatBigArea">
    <!-- button 上要有縣市名稱，點擊會觸發互動式視窗 -->
    <!-- v-for 根據 city 的資料動態生成按鈕 -->
    <!-- button.value 為縣市名稱  -->
    <!-- toggleModal($event.target.value) 點擊取得 button.value -->
    <!-- $event.target.value 其實就等於 item 也可以寫成 toggleModal(item) -->
    <!-- 2024/5/12 -->
    <!-- 監聽滑鼠事件觸發對應的函數 -->
    <div v-if="energySelect=='太陽能'" class="sunButtonArea">
      <button @click="toggleModal(item)" @mouseenter="mouseEnterEvent(item)" @mouseleave="mouseLeaveEvent"
              v-for="(item) in city">
        {{ item }}
      </button>
    </div>

    <div v-if="energySelect=='風力'" class="windButtonArea">
      <button @click="toggleModal(item)" @mouseenter="mouseEnterEvent(item)" @mouseleave="mouseLeaveEvent"
              v-for="(item) in city">
        {{ item }}
      </button>
    </div>

    <div v-if="energySelect=='水力'" class="waterButtonArea">
      <button @click="toggleModal(item)" @mouseenter="mouseEnterEvent(item)" @mouseleave="mouseLeaveEvent"
              v-for="(item) in city">
        {{ item }}
      </button>
    </div>
    <!-- 為這個 div 添加一個 ref 屬性使其可以被 methods 引用 -->
    <!-- <div ref=targetModal class="modal"> -->
    <!-- 2024/5/12 改用v-if寫法 -->

    <div class="modal" v-show="modalVisible">
      <div class="modal_content">
        <span class="close" @click="toggleModal()">&times;</span>
        <div class="data" v-for="(item) in buttonShow">
            {{"站名 : " + item.StationName}}
            <br>
            {{"地址 : " + item.Address}}
            <br>
            {{"裝置容量 : " + item.InstalledCapacitykW + " kW"}}
            <br>
        </div>
      </div>
    </div>
  </div>
  


</template>
<style scoped lang="scss">
  .buttonCreatBigArea {
    width: 60%;
    .sunButtonArea{
      button {
        width: 120px;
        height: 40px;
        margin: 20px 50px 0px 0px ;
        font-size: 18px;
        letter-spacing: 5px;
        // padding: 10px;
        font-family: "Poetsen One", sans-serif;
        border-radius: 70px;
        border:solid 1.5px #ddaf25;
        background-color: #fefefe00;
        color: #ddaf25;
        transition: 1s;
        &:hover{
          background-color: #ddaf25;
          color: #3E3E3E;
        }
      }
    }

    .windButtonArea{
      button {
        width: 120px;
        height: 40px;
        margin: 20px 50px 0px 0px ;
        font-size: 18px;
        letter-spacing: 5px;
        // padding: 10px;
        font-family: "Poetsen One", sans-serif;
        border-radius: 70px;
        border:solid 1.5px #e1ff2d;
        background-color: #fefefe00;
        color: #e1ff2d;
        transition: 1s;
        &:hover{
          background-color: #e1ff2d;
          color: #3E3E3E;
        }
      }
    }
      

    .waterButtonArea{
    button {
      width: 120px;
      height: 40px;
      margin: 20px 50px 0px 0px ;
      font-size: 18px;
      letter-spacing: 5px;
      // padding: 10px;
      font-family: "Poetsen One", sans-serif;
      border-radius: 70px;
      border:solid 1.5px #2d8bff;
      background-color: #fefefe00;
      color: #2d8bff;
      transition: 1s;
      &:hover{
        background-color: #2d8bff;
        color: #3E3E3E;
      }
    }
    }
    .modal {
      width: 100%;
      height: 100%;
      // 將區塊定錨才不會造成區塊的位置超出網頁外面，並且固定從瀏覽器左上開始顯示 
      // (因為區塊大小跟網頁一樣大，區塊跑位就會跑出畫面外，會導致vue報錯)
      position: fixed;
      left: 0;
      top: 0;
      // 讓視窗顯示在最上層
      z-index: 1;
      background-color:rgba(0, 0, 0, 0.411); /* 半透明背景 */
      .modal_content {
        width: 60%;
        height: 60%;
        padding: 25px;
        overflow: auto;
        border: 1px solid #888;
        border-radius: 15px;
        background-color: #2e2e2e;
        // 將視窗置中
        // https://ithelp.ithome.com.tw/articles/10277454?sc=iThelpR
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%); 
        font-size: 20px;
        color: #bab9b9;
        line-height: 35px;
        text-align: center;
        border: none;

        .data{
          padding: 15px;
          margin: 20px;
          border: 1px solid #e1ff2d;  
          border-radius: 50px;
          &:hover{
            color: #636363;
            cursor: pointer;
          }
        }
        .close {
          color: #aaa;
          // 將關閉按鈕放在區塊的右邊
          // float: right;
          position: absolute;
          right: 20px;
          top:5px;
          font-size: 60px;
          font-weight: bold;
          &:hover{
            color: black;
            text-decoration: none;
            // 改變滑鼠樣式
            cursor: pointer;
          }
        }
      }
    }
  }
</style>


