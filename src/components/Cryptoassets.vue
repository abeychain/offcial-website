<style scoped lang="less">
.cry{
  //position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: #000;
}

.cry-img-text {
    width: 225px;
    height: 34px;
}

.cry-lable {
  font-size: 70px;
  font-family: Arial-BoldMT, Arial;
  font-weight: normal;
  color: #EE580F;
  line-height: 103px;
  background: linear-gradient(360deg, #EE580F 0%, #FD913B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}



.cry-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 170px;
}

.cry-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  width: 400px;
  //height: 210px;
}

.cry-icon {
  width: 70px;
  height: 70px;
}

.cry-title {
  padding-top: 20px;
  padding-bottom: 30px;
  font-size: 20px;
  font-family: Arial-BoldMT, Arial;
  font-weight: normal;
  color: #000000;
  line-height: 23px;

}

.cry-line {
  width: 238px;
  height: 6px;
  background: #EA581A;
}

.cry-text {
  //width: 319px;
  //height: 220px;
  padding-right: 50px;
  padding-left: 50px;
  font-size: 14px;
  font-family: ArialMT;
  color: #0C0C0C;
  line-height: 20px;
  padding-top: 30px;
  text-align: left;
}

.cry-info {
  padding-top: 60px;
  //padding-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  flex-wrap: wrap;
  img {
    width: 260px;
    height: 56px;
  }
}
.cry-img {
    width: 25%;
  img {
    width: 224px;
    height: 103px;
  }
}
.cry-img-s {
  padding-top: 48px;
}

@media(max-width: 1200px) {
  .cry-container{
    width: 100%;
  }
}
@media(max-width: 960px) {
  .cry-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .cry-img-s {
    padding-top: 0;
  }
  .cry-img {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
  }
  .cry-lable {
    font-size: 32px;
    line-height: normal;
  }
  .cry-content {
    padding-top: 30px;
  }
}
@media(max-width: 480px) {
  .cry-container {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
</style>
<template>
  <div class="cry" id="cryId" v-animate-onscroll.repeat="{down: 'animated'}">
    <div class="cry-container">
      <div class="cry-lable" :class="{'animated fadeInUp':flag }">Partners</div>
      <div class="cry-info">
        <div class="cry-img"><img src="../assets/image/cry/one-one.png"/></div>
        <div class="cry-img"><img src="../assets/image/cry/one-two.png"/></div>
<!--        <div class="cry-img"><img src="../assets/image/cry/logo.png"/></div>-->
<!--        <div class="cry-img"><img src="../assets/image/cry/logo.png"/></div>-->
<!--        <div class="cry-img cry-img-s"><img src="../assets/image/cry/logo.png"/></div>-->
<!--        <div class="cry-img cry-img-s"><img src="../assets/image/cry/logo.png"/></div>-->
<!--        <div class="cry-img cry-img-s"><img src="../assets/image/cry/logo.png"/></div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cryp.vue',
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
      let subCoreDom = document.querySelector('#cryId')
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
