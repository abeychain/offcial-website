<template>
  <div class="earn" id="earnId" v-animate-onscroll.repeat="{down: 'animated'}">
    <div class="earn-container">
      <div class="ear-title" :class="{'animated fadeInUp':flag }">Technical team</div>
      <div class="earn-content">
        <div class="earn-img" >
          <img src="../assets/image/earn/head.png"/>
          <div class="earn-img-name">JIN KO</div>
          <div class="earn-img-text">
            JIN KO worked as an assistant to the Ministry of Defense of the Republic of  Korea and has worked as managing director at Bitblock Capital being  responsible for the analysis and evaluation of blockchain projects in  Europe. He can speak Spanish, English, and Korean fluently.<br>
            He is currently joining the team being in charge of his expertise which are project management and international cooperation.
          </div>
        </div>
<!--        <div class="earn-img" >-->
<!--          <div class="earn-img-name">Name</div>-->
<!--          <div class="earn-img-text">introduce introduce introduce introduce introduce introduce introduce </div>-->
<!--        </div>-->
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Earn",
  data() {
    return {
      flag: true,
      interTimer: null
    }
  },
  mounted() {
    let that = this;
    this.interTimer = setInterval(function () {
      let subCoreDom = document.querySelector('#muchId')
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

<style scoped lang="less">
.earn{
  position: relative;
  background: #000;
}
.earn-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 170px;
  //padding-bottom: 100px;
}

.ear-title {
  font-size: 70px;
  font-family: Arial-BoldMT, Arial;
  font-weight: normal;
  color: #EE580F;
  background: linear-gradient(360deg, #EE580F 0%, #FD913B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.earn-content {
  padding-top: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
}

  .earn-img {
    width: 386px;
    height: 622px;
    border-radius: 8px;
    background: linear-gradient(360deg, #202020 0%, #050505 100%);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      background: linear-gradient(360deg, #EE580F 0%, #FD913B 100%);
    }
    img {
      width: 180px;
      height: 180px;
      margin-top: 30px;
    }
  }
  .earn-img-name {
    padding-top: 20px;
    font-size: 28px;
    font-family: Arial-BoldMT, Arial;
    font-weight: normal;
    color: #FFFFFF;
    line-height: 32px;
  }
  .earn-img-text {
    width: 80%;
    padding-top: 30px;
    font-size: 14px;
    font-family: Swiss721BT-LightExtended, Swiss721BT;
    font-weight: normal;
    color: #FFFFFF;
    line-height: 26px;
  }
  .earn-title {
    font-weight: 800;
    font-size: 26px;
    font-family: NexaBold;
    color: #EA581A;
    line-height: 32px;
  }
  .earn-text {
    padding-top: 20px;
    padding-bottom: 20px;
  }

.ean-info {
  padding-left: 50px;
}
@media(max-width: 1200px) {
  .earn-container {
    width: 100%;
  }
}
@media(max-width: 960px) {
  .earn-container {
    padding-top: 60px;
  }
  .earn-content {
    padding-top: 60px;
  }
  .ear-title {
    font-size: 32px;
  }
  .earn-img {
    width: 80%;
    height: 100%;
    padding-bottom: 20px;
  }
  .earn-img-name {
  }
  .earn-img-text {
  }
  .earn-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

</style>
