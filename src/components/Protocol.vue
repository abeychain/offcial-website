<style scoped lang="less">
  .protocol{
    //position: relative;
    background-color: rgba(3, 19, 42, 1);;
  }
  .pro-container {
    width: 1200px;
    margin: 0 auto;
    padding-top: 170px;
    //padding-bottom: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pro-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pro-icon {
    width: 70px;
    height: 70px;
  }

  .pro-title {
    font-size: 70px;
    font-family: Arial-BoldMT, Arial;
    font-weight: normal;
    color: #FFFFFF;
    background: linear-gradient(360deg, #EE9C0F 0%, #F5CA40 50%, #FFDC6A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .pro-img {
    margin-top: 134px;
    img {
      width: 1200px;
    }
  }

  .pro-text {
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
  .dot-grid{
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: url(../assets/image/protocol/pattern-large-dots.svg);
    background-repeat: repeat-x;
    position: absolute;
  }
  @media(max-width: 1200px) {
    .pro-container{
      width: 100%;
    }
  }
  @media(max-width: 960px) {
    .pro-container{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .pro-content {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .pro-title {
      font-size: 32px;
    }
    .pro-img {
      margin-top: 60px;
      img {
        margin-left: 15px;
        margin-right: 15px;
        width: 90%;
      }
    }
  }
  @media(max-width: 480px) {
    .pro-container {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }
</style>
<template>
  <div class="protocol" id="protocolId" v-animate-onscroll.repeat="{down: 'animated'}">
    <div class="pro-container">
        <div class="pro-title" :class="['sub-title', {'animated fadeInUp': flag}]">AVM</div>
        <div   class="pro-img">
          <img src="../assets/image/protocol/content-map.png"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Protocol.vue',
  data () {
    return {
      flag: true,
      interTimer: null
    }
  },
  methods: {},
  mounted () {
    let that = this;
    this.interTimer = setInterval(function () {
      let subCoreDom = document.querySelector('#protocolId')
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
