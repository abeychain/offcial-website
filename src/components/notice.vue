<style scoped lang="less">
.notice {
  position: relative;
  height: 100%;
  width: 100%;
  background: rgba(3, 19, 42, 1);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: white;
}

.notice-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

}

.notice-container {
  width: 1200px;
  margin: 0 auto;
  padding-top: 165px;
  position: absolute;
  //left: 12%;
  top: 104px;
  z-index: 9999;
}

.notice-img {
  width: 672px;
  height: 147px;
  margin-left: 20px;
  //margin-right: -20px;
}

.notice-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 30px;
  //padding-left: 17px;
  //padding-bottom: 50px;
}

.notice-icon {
  width: 6px;
  height: 19px;
}

.notice-text {
  width: 63%;
  font-size: 14px;
  font-family: Swiss721BT-LightExtended, Swiss721BT;
  font-weight: normal;
  color: #FFFFFF;
  line-height: 26px;
}

.notice-title {
  width: 100%;
  text-align: left;
  font-size: 83px;
  font-family: Arial-BoldMT, Arial;
  font-weight: normal;
  color: #F5CA40;
  line-height: 85px;
  span {
    font-size: 30px;
    font-family: Arial-BoldMT, Arial;
    font-weight: normal;
    color: #F5CA40;
    line-height: 85px;
  }
}


.notice-download {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  margin-left: 20px;
}

.notice-download-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 33px;
  padding-right: 33px;
  background: white;
  border-radius: 6px;
}

.notice-download-icon {
  width: 28px;
  height: 28px;
}

.notice-download-right {
  padding-left: 10px;

  .notice-download-text {
    color: black;
  }
}

.notice-button {
  padding-top: 60px;

  button {
    cursor: pointer;
    width: 224px;
    height: 61px;
    font-size: 22px;
    font-family: Arial-BoldMT, Arial;
    font-weight: normal;
    color: #FFFFFF;
    background: linear-gradient(90deg, #EE580F 0%, #FD913B 100%);
    border-radius: 43px;
    outline-style: none;
    text-decoration: none;
    border: 0;
  }
}

.notice-proint {
  padding-top: 250px;
}


@media (max-width: 1200px) {
  .notice-container {
    width: 100%;
    position: absolute;
    left: 10%;
  }
}

@media (max-width: 960px) {
  .notice-content {
    padding-top: 50px;
    padding-left: 0;
  }

  .notice-container {
    position: absolute;
    left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .notice-title {
    font-size: 16px;
    margin-left: 30px;
    margin-right: 30px;
    width: 90%;
    span {
      font-size: 26px;
      text-align: left;
      line-height: 20px;
    }
  }

  .notice-content {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .notice-text {
    width: 100%;
  }

  .notice-img {
    width: 326px;
    height: 72px;
  }

  .notice-download-content {
    padding-left: 15px;
    padding-right: 15px;
  }

  .notice-download {
    margin-left: 20px;
    margin-right: 20px;
  }
}

@media (max-width: 480px) {
  .notice-title {
    font-size: 24px;
    line-height: 40px;
    span {
      font-size: 14px;
      text-align: left;
      line-height: 30px;
    }
  }

  .notice-container {
    padding-top: 10px;
    padding-bottom: 60px;
    left: 0;
  }

  .notice-button {
    button {
      width: 179px;
      height: 49px;
      font-size: 16px;
    }
  }

  .notice-text {
    font-size: 16px;
    line-height: 30px;
  }

  .notice-title {
  }
}
</style>
<template>
  <div class="notice" id="notice">
    <div class="notice-top" >
      <div class="notice-container">
        <div class="notice-title" :class="['sub-title', {'animated fadeInUp': flag}]">ABEY 2.0<br>
          <span>Multi-Layered Programmable Blockchain for High-Volume Transactions</span>
        </div>
        <div class="notice-content">
          <!--          <img class="notice-icon" src="../assets/image/notice/text-icon.png"/>-->
          <div class="notice-text">
            ABEY2.0 is a Hybrid consensus multi-layered blockchain systems which incorporates DPoS (Delegated Proof of Stake) and POW (Proof of Work) consensus. It’s aim is to support High-Volume transactions based on sharding and ABEY Virtual Machine(AVM).
          </div>
        </div>
<!--        <div class="notice-button">-->
<!--          <button>Whitepaper</button>-->
<!--        </div>-->
      </div>
    </div>
    <div class="notice-proint">
      <Pointwave/>
    </div>
  </div>
</template>

<script>
import Pointwave from "@/components/Pointwave";

export default {
  name: 'Protocol.vue',
  components: {Pointwave},
  data() {
    return {
      flag: true,
      interTimer: null,
      min: 1,
      sec: 1,
      day: 1,
      hr: 1
    }
  },
  methods: {
    //倒计时
    countdown() {
      const end = Date.parse(new Date('2020-09-30 18:00:00'))
      const now = Date.parse(new Date())
      const msec = end - now
      // console.log(msec)
      if (msec < 0) return;
      // 将时间戳进行格式化00：00的形式
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt(msec / 1000 / 60 / 60 % 24)
      let min = parseInt(msec / 1000 / 60 % 60)
      let sec = parseInt(msec / 1000 % 60)
      this.day = day
      this.hr = hr > 9 ? hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      const that = this
      if (day >= 0 && hr >= 0 && min >= 0 && sec >= 0) {
        //倒计时结束关闭订单
        if (day == 0 && hr == 0 && min == 0 && sec == 0) {
          return
        }
        //一秒更新一次
        setTimeout(function () {
          that.countdown()
        }, 1000)
      }
    },
    //图片滚动
    // scrollHandle(){
    //   // 获取页面滚动像素
    //   var scrollTop=window.pageYOffset ||
    //       document.documentElement.scrollTop ||
    //       document.body.scrollTop;
    //   // var offsetTop=document.querySelector("#coin").offsetTop;
    //   console.log(scrollTop)
    //   if (scrollTop<=3500){
    //     document.querySelector(".coin").style.transform='translate('+(scrollTop*0.3)+"px,"+(scrollTop*0.95)+"px)"
    //   }else if (scrollTop>3500 ){
    //     document.querySelector(".coin").style.transform='translate('+(7000-scrollTop)*0.3+"px,"+(scrollTop*0.95)+"px)"
    //   }
    //   if (scrollTop<=3000){
    //     document.querySelector(".coin-bit").style.transform='translate('+(scrollTop*0.4)+"px,"+(scrollTop*0.95)+"px)"
    //   }else if (scrollTop>3000 ){
    //     document.querySelector(".coin-bit").style.transform='translate('+(6000-scrollTop)*0.4+"px,"+(scrollTop*0.945)+"px)"
    //   }
    //   console.log(document.querySelector('.coin-t').style.transform)
    //   if (scrollTop<=2500){
    //     document.querySelector(".coin-t").style.transform='translate('+(scrollTop*0.4)+"px,"+(scrollTop*0.93)+"px)"
    //   }else if (scrollTop>2500 ){
    //     document.querySelector(".coin-t").style.transform='translate('+(5000-scrollTop)*0.4+"px,"+(scrollTop*0.93)+"px)"
    //   }
    // }
  },
  mounted() {
    // this.countdown()
  },
  destroyed() {
  },
  created() {
    // window.addEventListener("scroll",this.scrollHandle)
  }
}
</script>
