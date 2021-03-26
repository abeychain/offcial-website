<style scoped lang="less">
  .footer {
    clear: both;
    width: 100%;
    //min-height: 482px;
    background: rgba(18, 33, 55, 1);;
    padding-top: 120px;
    padding-bottom: 138px;
    color: white;
    ul,li {
      list-style-type: none;
    }
    a {
      text-decoration: none;
    }
  }
  .ft-container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .logo {
    padding-right: 100px;
    img {
      width: 347px;
      height: 80px
    }
  }
  .ft-logo {
    width: 127px;
    height: 127px;
    background-image: url("../assets/image/footer/logo.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 51px auto;
  }
  .ft-mobile-copyRight {
    display: none;
    width: 80%;
    word-break: break-all;
    text-align: center;
    padding-top: 41px;
    padding-bottom: 102px;
    font-size:14px;
    font-family: PingFangSC-Regular,PingFang SC;;
    font-weight:400;
    color: #FFFFFF;
    line-height:20px;
    margin: 0 auto;
  }
  .ft-ctx {
    display: flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    align-items: baseline;
    -webkit-align-items: baseline;
    -ms-align-items: baseline;
  }
  .ctx-left{
    .ft-investor{
      margin-bottom: 41px;
      span{
        display: inline-block;
        vertical-align: middle;
        font-size:20px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color: #ffffff;
        line-height:28px;
      }
      a{
        display: inline-block;
        vertical-align: middle;
        width: 116px;
        height: 24px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-right: 16px;
      }
      .ft-soft{
        background-image: url("../assets/image/footer/soft.png");
      }
    }
    .ft-social{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 33px;
      span{
        display: inline-block;
        vertical-align: middle;
        font-size:20px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color: #ffffff;
        line-height:28px;
      }
      a{
        color: white;
      }

      .ft-social-img {
        border: 1px solid white;
        border-radius: 100%;
        padding: 5px;
      }
      .ft-social-icon{
        display: inline-block;
        vertical-align: middle;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
        padding: 5px;
        flex-direction: row;
        align-items: center;
        justify-items: center;
      }
      .ft-social-a {
        color: white;
        border: 1px solid white;
        margin-left: 20px;
        border-radius: 20px;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 5px;
        padding-bottom: 5px;
        line-height: 25px;
      }
      .ft-telegram {
        background-image: url("../assets/image/footer/telegram.png");
      }
      .ft-twitter {
        background-image: url("../assets/image/footer/twitter.png");
      }
      .ft-bitcointalk {
        background-image: url("../assets/image/footer/bitcointalk.png");
      }
      .ft-naver {
        background-image: url("../assets/image/footer/naver.png");
      }
      .ft-medium {
        background-image: url("../assets/image/footer/medium.png");
      }
      .ft-kakao{
        background-image: url("../assets/image/footer/kakao.png");
      }
      .ft-cat {
        background-image: url("../assets/image/footer/cat.png");
      }
    }
    .ft-copyright {
      span {
        font-size:14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        /*color: #CCCCCC;*/
        color: #FFFFFF;
        line-height:20px;
      }
    }
  }
  .ft-sup-title {
    font-size: 20px;
    font-family: Helvetica;
    color:  #FFFFFF;
    line-height: 24px;
    margin-bottom: 26px;
  }
  .ft-sup-li {
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    /*color: #CCCCCC;*/
    color: #FFFFFF;
    font-weight:400;
    line-height:20px;
    margin-bottom: 15px;
    a {
      font-size:14px;
      font-family:PingFangSC-Regular,PingFang SC;
      /*color: #CCCCCC;*/
      color: #FFFFFF;
      font-weight:400;
    }
  }
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer-icon {
    margin-top: 42px;
    cursor: pointer;
    padding-bottom: 50px;
    img {
      width: 60px;
      height: 60px;
    }
  }
  .footer-icon-e {
    margin-left: 20px;
  }

  .footer-content-text {
    font-size: 16px;
    font-family: ArialMT;
    color: #FFFFFF;
    line-height: 39px;
  }

  .footer-content-line {
    margin-top: 34px;
    width: 425px;
    height: 1px;
    border-top: 1px dashed #979797;
  }

  @media(max-width: 1200px) {
    .ft-container{
      width: 100%;
    }
    .ft-mobile-copyRight {
      display: block;
    }
    .ft-ctx {
      flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      .ft-copyright {
        display: none;
      }
      .ctx-left {
        width: 100%;
        text-align: center;
      }
      .ctx-center {
        margin-top: 46px;
        width: 100%;
        text-align: center;
      }
      .ctx-right {
        margin-top: 41px;
        width: 100%;
        text-align: center;
      }
    }
  }
  @media(max-width: 960px) {
    .ft-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .logo {
      padding-right: 0;
      img {
        width: 175px;
        height: 40px;
      }
    }
    .footer-content {
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .footer-content-text {
      text-align: center;
      font-size: 14px;
    }
  }

  @media(max-width: 480px) {
    .footer {
      padding-top: 67px;
    }
    .ft-logo {
      margin: 0 auto 66px auto;
    }
    .ctx-left{
      .ft-social{
        span {
          display: block;
          margin-bottom: 20px;
        }
        a {
          width: 25px;
          height: 25px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .ft-ctx {
      .ctx-center, .ctx-right {
        margin-top: 26px;
      }
    }
    .ft-mobile-copyRight {
      padding-top: 41px;
    }
  }
</style>
<template>
  <div class="footer" id="footerId">
    <div class="ft-container">
<!--      <div class="logo">-->
<!--        <img src="../assets/image/footer/footer-logo.png"/>-->
<!--      </div>-->
      <div class="footer-content">
        <div class="footer-icon">
          <img  src="../assets/image/footer/t.png"/>
<!--          <a href="mailto:team@tetra.cash">-->
            <img @click="goE" class="footer-icon-e" src="../assets/image/footer/e.png"/>
<!--          </a>-->
        </div>
        <div class="footer-content-text">{{$t('Footer.list.a')}}</div>
        <div class="footer-content-text">{{$t('Footer.list.b')}}</div>
        <div class="footer-content-text">{{$t('Footer.list.c')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer.vue',
  methods:{
    goE() {
      // window.open("team@tetra.cash","_blank")
    },
    goT() {
      window.open("https://twitter.com/TetraPay_App","_blank")
    }
  }
}
</script>
