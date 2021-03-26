<style scoped lang="less">
.census {
  width: 100%;
  height: 100%;
  background: rgba(3, 19, 42, 1);
}

.census-container {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-top: -150px;
  //padding-top: 170px;
  //padding-bottom: 120px;
}

.census-center {
  //padding-left: 200px;
  //padding-left: 200px;
}

.census-img {
  width: 1200px;
}


.census-text {
  line-height: 30px;
  padding-top: 88px;
}

.census-title {
  text-align: center;
  font-size: 70px;
  font-family: Arial-BoldMT, Arial;
  font-weight: normal;
  color: #FFFFFF;
  line-height: 103px;
  background: linear-gradient(360deg, #EE9C0F 0%, #F5CA40 50%, #FFDC6A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.censu-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
}

.censu-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  width: 386px;
  height: 418px;
  border-radius: 20px;
  background: linear-gradient(45deg, #0A1B32 0%, #202F43 100%);;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  cursor: pointer;

  &:hover {

    background: linear-gradient(45deg, #EE9C0F 0%, #F5CA40 100%);
  }

  img {
    padding-top: 60px;
    width: 80px;
    height: 80px;
  }

  span {
    padding-top: 37px;
    padding-bottom: 20px;
    font-size: 30px;
    font-family: Arial-BoldMT, Arial;
    font-weight: normal;
    color: #FFFFFF;
  }
}

.censu-info-s {
  margin-left: 28px;
}


.censu-info-text {
  width: 80%;
  font-size: 14px;
  font-family: Swiss721BT-LightExtended, Swiss721BT;
  font-weight: normal;
  color: #FFFFFF;
  line-height: 26px;
}


@media (max-width: 1200px) {
  .census-container {
    width: 100%;
  }

  .census-img {
    width: 600px;
  }

  .census-item {
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
  }
}

@media (max-width: 960px) {
  .census {
    margin-top: -300px;
  }

  .census-title {
    font-size: 32px;
  }

  .census-img {
    width: 300px;
  }

  .census-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .censu-info-s {
    margin-left: 0;
  }

  .censu-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0;
  }

  .censu-info {
    width: 80%;
    height: 360px;
    //height: 150px;
    span {
      text-align: center;
    }
  }


  .censu-info-text {
    width: 80%;
    font-size: 12px;
    line-height: 15px;
  }

}

@media (max-width: 480px) {

  .census-item {
    padding-top: 69px;
  }

  .census-container {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .census-title {
    width: 83%;
    margin: 20px auto;
  }
}
</style>
<template>
  <div class="census" id="censusId" v-animate-onscroll.repeat="{down: 'animated'}">
    <div class="census-container">
      <div class="census-center">
        <div class="census-title" :class="{'animated fadeInUp':flag }">Characteristic</div>
        <div class="censu-content">
          <div class="censu-info">
            <!--              <div class="censu-info-top">-->
            <img src="../assets/image/census/icon1.png"/>
            <span>ABEY Consensus</span>
            <!--              </div>-->
            <div class="censu-info-text">ABEY2.0 follows a design paradigm where DPoS and PoW are combined together to
              attain high levels of scalability and consistency without significant reduction to decentralization.
            </div>
          </div>
          <div class="censu-info">
            <img src="../assets/image/census/icon2.png"/>
            <span>Multi-layered Architecture</span>
            <div class="censu-info-text">ABEY2.0 would use a multi-layered framework to adapt one slow chain and several
              fast chains to extend scalability.
            </div>
          </div>
          <div class="censu-info">
            <img src="../assets/image/census/icon3.png"/>
            <span>ABEY Virtual Machine </span>
            <div class="censu-info-text">AVM is a high-performance virtual machine based on WebAssembly. It can can run
              code at a speed close to the native computer hardware speed, while also providing a more flexible contract
              interface.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Census.vue',
  data() {
    return {
      flag: true,
      interTimer: null
    }
  },
  mounted() {
    let that = this;
    this.interTimer = setInterval(function () {
      let subCoreDom = document.querySelector('#introduceId')
      if (subCoreDom) {
        let classStr = subCoreDom.classList.toString() || ''
        that.flag = classStr.includes('animated')
      }
    }, 500)
  },
  destroyed() {
    if (this.interTimer) {
      window.clearInterval(this.interTimer)
    }
  }
}
</script>
