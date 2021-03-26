<template>
  <div class="road" id="roadMapId" v-animate-onscroll.repeat="{down: 'animated'}">
    <div class="road-container">
      <!--      标题-->
      <div :class="['road-title', {'animated zoomInDown': flag}]" class="road-title">Circuit diagram</div>
      <div   class="road-content">
        <img class="road-img" src="../assets/image/roadmap/diagram.png"/>
        <img class="road-img-s" src="../assets/image/roadmap/content-two.png"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoadMap',
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
      let subCoreDom = document.querySelector('#roadMapId')
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
.road-left-text {
  width: 600px;
}
.road{
  position: relative;
  background: #000;
}
.road-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  padding-top: 170px;
  padding-bottom: 155px;
}
.road-img {
    width: 1200px;
}
.road-img-s {
  display: none;
}

.road-right-info {
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 2px;
  display: flex;
  flex-direction: row;
}

.road-right-img {
  padding-left: 2px;
}

.road-right-text {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}


.road-left-content {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: flex-end;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 2px;
}

.road-content {
  padding-top: 121px;
  display: flex;
  flex-direction: row;
  //align-items: center;
  justify-content: space-between;
}

.road-left-date {
  font-size: 24px;
  font-family: Helvetica-Bold, Helvetica;
  font-weight: bold;
  color: #000000;
  line-height: 29px;

}

.road-info {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.road-left-title {
  font-size: 19px;
  font-family: NexaBold;
  color: #FF5805;
  text-align: right;
  font-weight: 800;
}
.road-title {
  text-align: center;
  font-size: 70px;
  font-family: Arial-BoldMT, Arial;
  font-weight: normal;
  color: #EE580F;
  background: linear-gradient(360deg, #EE580F 0%, #FD913B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.road-line {
  padding-top: 30px;
  border-right: 1px black dashed;
}

.road-line-right {
  padding-top: 30px;
  border-left: 1px black dashed;
}

.road-left-icon {
  width: 8px;
  height: 15px;
}

.road-left {
  margin-right: 25px;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
}

.road-right {
  margin-left: 25px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
}


.road-left-info {
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-right: 20px;
}

.road-check {
  margin-top: 85px;
  width: 507px;
  height: 74px;
  background: #FF5805;
  border-radius: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.road-check-texta {
  font-size: 14px;
  font-family: ArialMT;
  color: #FFFFFF;
  line-height: 16px;
}
.road-check-textb {
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 25px;
}

.road-check-icon {
  width: 32px;
  height: 21px;
}

@media(max-width: 1200px) {
  .road-container {
    width: 100%;
  }
}
@media(max-width: 960px) {
  .road-img {
    display: none;
  }
  .road-img-s {
    display: block;
    width: 90%;
  }
  .road-container {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .road-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
  }
  .road-title {
    font-size: 32px;
  }
  .road-img {
    width: 90%;
    margin-left: 15px;
    margin-right: 15px;
  }
  .road-left {
    width: 100%;
    //margin-right: 0;
  }
  .road-right {
    width: 100%;
    //margin-left: 0;
  }
  .road-left-text {
    width: 100%;
  }
  .road-left-info {
    width: 100%;
  }
  .road-right-content {
    width: 100%;
  }
  .road-right-info {
    width: 100%;
  }
}




</style>
