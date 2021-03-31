    <style scoped lang="less">
    .info {
      position: relative;
      background: rgba(3, 19, 42, 1);
    }

    .info-container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 170px;
    }

    .info-img {
      margin-top: 95px;
      width: 1200px;
    }

    .info-title {
      font-size: 70px;
      font-family: Arial-BoldMT, Arial;
      font-weight: normal;
      color: #FFFFFF;
      background: linear-gradient(360deg, #EE9C0F 0%, #F5CA40 50%, #FFDC6A 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .info-content {
      padding-top: 90px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }


    .info-line {
      width: 814px;
      height: 135px;
      background-image: url('../assets/image/info/info-line.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .info-line-two {
      width: 814px;
      height: 110px;
      background-image: url('../assets/image/info/info-line-two.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .info-text {
      padding-top: 30px;
      font-size: 30px;
      font-family: Arial-BoldMT, Arial;
      font-weight: normal;
      color: #FFFFFF;
    }

    .info-text-s {
      padding-top: 30px;
      font-size: 32px;
      font-family: Arial-BoldMT, Arial;
      font-weight: normal;
      color: #FFFFFF;
    }

    .info-lable {
      font-size: 12px;
      font-family: Swiss721BT-LightExtended, Swiss721BT;
      font-weight: normal;
      color: #FFFFFF;
      line-height: 25px;
      padding-top: 35px;
    }

    .info-model {
      width: 386px;
      height: 181px;
      background: rgba(33, 33, 33, 1);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      justify-content: center;
      &:hover {
        background: linear-gradient(90deg, #EE580F 0%, #FD913B 100%);
      }
    }


    .info-cross {
      width: 285px;
      height: 306px;
      background: rgba(33, 33, 33, 1);
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:hover {
        background: linear-gradient(90deg, #EE580F 0%, #FD913B 100%);
      }

      img {
        margin-top: 28px;
        width: 38px;
        height: 38px;
      }
    }

    .cross-title {
      margin-top: 18px;
      font-size: 20px;
      font-family: PingFangTC-Semibold, PingFangTC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 28px;
    }

    .cross-title-s {
      font-size: 18px;
    }

    .cross-text {
      margin-top: 10px;
      width: 80%;
      font-size: 14px;
      font-family: Swiss721BT-LightExtended, Swiss721BT;
      font-weight: normal;
      color: #FFFFFF;
      line-height: 26px;
    }


    .info-ecosy {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .info-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .info-info-s {
      width: 100%;
      //margin-left: -150px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .model-top {
      padding-top: 23px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      img {
        width: 40px;
        height: 40px;
      }

      span {
        font-size: 24px;
        font-family: PingFangTC-Semibold, PingFangTC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 33px;
      }
    }

    .model-text {
      padding-top: 11px;
      width: 80%;
      font-size: 14px;
      font-family: Swiss721BT-LightExtended, Swiss721BT;
      font-weight: normal;
      color: #FFFFFF;
      line-height: 26px;
    }

    .info-appliaction {
      position: relative;
      padding-top: 34px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .censu-content {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-top: 100px;
    }

    .censu-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 60px;
      width: 386px;
      height: 486px;
      border-radius: 8px;
      border: 1px solid #253852;
      cursor: pointer;
      &:hover {
        background: linear-gradient(45deg, #EE9C0F 0%, #F5CA40 100%);
      }

      img {
        padding-top: 77px;
        width: 100px;
        height: 100px;
      }

      span {
        padding: 77px 37px 0 37px;
        font-size: 24px;
        font-family: Arial-BoldMT, Arial;
        font-weight: normal;
        color: #FFFFFF;
        text-align: center;
      }
    }


    .censu-info-text {
      padding-top: 68px;
      width: 75%;
      font-size: 14px;
      font-family: Swiss721BT-LightExtended, Swiss721BT;
      font-weight: normal;
      color: #FFFFFF;
      line-height: 24px;
    }
    .censu-info-text-s {
      padding-top: 30px;
    }



    @media (max-width: 1200px) {
      .info-container {
        width: 100%;
      }

      .info-img {
        width: 600px;
      }
    }

    @media (max-width: 960px) {
      .info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .info-title {
        font-size: 32px;
      }

      .info-line {
        margin-left: 15px;
        margin-right: 15px;
        width: 325px;
        height: 54px;
      }
      .info-line-two {
        width: 325px;
        height: 44px;
      }
      .info-text {
        font-size: 14px;
        padding-top: 12px;
      }
      .info-text-s {
        font-size: 14px;
        padding-top: 12px;
      }
      .info-lable {
        text-align: center;
        font-size: 12px;
        margin-top: -25px;
        line-height: 15px;
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
        height: 100%;
        //height: 150px;
        span {
          text-align: center;
          padding-top: 30px;
        }
        img {
          padding-top: 30px;
        }
      }
      .censu-info-text {
        padding-top: 40px;
        padding-bottom: 30px;
      }

    }

    @media (max-width: 480px) {
      .info-container {
        padding-top: 60px;
        padding-bottom: 60px;
      }

      .pro-title {
        width: 83%;
        margin: 40px auto;
      }
    }
    </style>
    <template>
      <div class="info" id="infoId" v-animate-onscroll.repeat="{down: 'animated'}">
        <div class="info-container">
          <div class="info-title" :class="{'animated fadeInUp':flag }">Application Scenario</div>
          <div class="censu-content">
            <div class="censu-info">
              <!--              <div class="censu-info-top">-->
              <img src="../assets/image/info/icon1.png"/>
              <span>Decentralized Exchange</span>
              <!--              </div>-->
              <div class="censu-info-text">
                Through the ABEY Network, users can pay the digital asset in exchange for services or goods.
              </div>
            </div>
            <div class="censu-info">
              <img src="../assets/image/info/icon2.png"/>
              <span>Stable coin</span>
              <div class="censu-info-text">
                Stable coin could be deployed in ABEY chain as medium of exchange to avoid price fluctuations.
              </div>
            </div>
            <div class="censu-info">
              <img src="../assets/image/info/icon3.png"/>
              <span>Decentralized Business Contracts</span>
              <div class="censu-info-text censu-info-text-s">
                Business Contracts such as loans can be designed as a smart contract and deployed in ABEY network. The rest operation would be executed automatically once the terms of the contract are met.
              </div>
            </div>
          </div>

        </div>
      </div>
    </template>

    <script>
    export default {
      name: 'Protocol.vue',
      data() {
        return {
          flag: true,
          interTimer: null
        }
      },
      methods: {},
      mounted() {
        let that = this;
        this.interTimer = setInterval(function () {
          let subCoreDom = document.querySelector('#infoId')
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
    <style scoped></style>
