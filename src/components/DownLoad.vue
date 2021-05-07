<style scoped lang="less">
.down{
  //position: relative;
  background-color: rgba(3, 19, 42, 1);;
}
.down-container {
  width: 1200px;
  margin: 0 auto;
  padding-top: 170px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.down-content {
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
}

.down-icon {
  width: 70px;
  height: 70px;
}

.down-title {
  font-size: 70px;
  font-family: Arial-BoldMT, Arial;
  font-weight: normal;
  color: #FFFFFF;
  background: linear-gradient(360deg, #EE9C0F 0%, #F5CA40 50%, #FFDC6A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.down-img {
  margin-top: 134px;
  img {
    width: 1200px;
  }
}

.down-text {
  text-align: center;
  width: 219px;
  //height: 110px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 12px;
  font-family: ArialMT;
  color: white;
  line-height: 28px;

}

.down-info {
  border:1px solid white;
  width: 190px;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    margin-left: 5px;
    color: white;
    font-size: 22px;
  }
}

.down-infos {
  opacity: 0.4;
  cursor: no-drop;
}



@media(max-width: 1200px) {
  .down-container{
    width: 100%;
  }
}
@media(max-width: 960px) {
  .down-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .down-content {
    padding-top: 60px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .down-info {
    margin-top: 20px;
  }
  .down-title {
    padding-left: 15px;
    padding-right: 15px;
    font-size: 32px;
    text-align: center;
  }
  .down-img {
    margin-top: 60px;
    img {
      margin-left: 15px;
      margin-right: 15px;
      width: 90%;
    }
  }
}
@media(max-width: 480px) {
  .down-container {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
</style>
<template>
  <div class="down" id="downId" v-animate-onscroll.repeat="{down: 'animated'}">
    <div class="down-container">
      <div class="down-title" :class="['sub-title', {'animated fadeInUp': flag}]">Download ABEY Wallet APP</div>
      <div class="down-content">
        <div class="down-info down-infos">
          <img src="../assets/image/down/apple.png"/>
          <span>iOS</span>
        </div>
        <div class="down-info down-infos">
          <img src="../assets/image/down/adro.png"/>
          <span>GooglePlay</span>
        </div>
        <div @click="actionAndroid()" class="down-info">
          <img src="../assets/image/down/adro.png"/>
          <span>Android</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownLoad.vue',
  data () {
    return {
      flag: true,
      interTimer: null
    }
  },
  methods: {
    actionAndroid(){
      window.open('https://files.abeychain.com/app/ABEY_v1.0.0_release.apk',"_blank")
    },
  },
  mounted () {
    let that = this;
    this.interTimer = setInterval(function () {
      let subCoreDom = document.querySelector('#downId')
      if (subCoreDom) {
        let classStr = subCoreDom.classList.toString() || ''
        that.flag = classStr.includes('animated')
      }
    }, 500)
  },
  destroyed () {
    if (this.interTimer) {
      window.clearInterval(this.interTimer)
    }
  }
}
</script>
