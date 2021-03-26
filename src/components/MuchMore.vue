<template>
  <div class="much" id="muchId" v-animate-onscroll.repeat="{down: 'animated'}">
    <div class="much-container">
        <div class="much-title" :class="['sub-title', {'animated fadeInUp': flag}]" >General frame drawing</div>
        <div  class="much-img">
          <img src="../assets/image/muchmore/content.png"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name: "MuchMore",
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
.much{
  width: 100%;
  height: 100%;
  position: relative;
  background: rgba(3, 19, 42, 1);
}
.much-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 170px;
  //padding-bottom: 88px;
}

.much-title {
  text-align: center;
  font-size: 70px;
  font-family: Arial-BoldMT, Arial;
  font-weight: normal;
  line-height: 103px;
  color: #FFFFFF;
  background: linear-gradient(360deg, #EE9C0F 0%, #F5CA40 50%, #FFDC6A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.much-info {
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
}

.much-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.much-img {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 33px;
  padding-top: 110px;
  img {
    width: 1198px;
  }
}

.much-img-pay {
  margin-bottom: 33px;
  width: 255px;
  height: 162px;
}

@media (max-width: 1200px) {
  .much-container {
    width: 100%;
  }
}
@media (max-width: 960px) {
  .much-container {
    padding-top: 60px;
  }
  .much-title {
    font-size: 32px;
    text-align: center;
    line-height: normal;
  }
  .much-info {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .much-img {
    padding-top: 60px;
    img {
      margin-left: 15px;
      margin-right: 15px;
      width: 90%;
    }
  }
  .much-content {
    margin-top: 30px;
  }
}

</style>
