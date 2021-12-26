<style scoped lang="less">
.footer {
    clear: both;
    width: 100%;
    //min-height: 482px;
    background: rgba(18, 33, 55, 1);
    padding-top: 120px;
    padding-bottom: 138px;
    color: white;
    ul,
    li {
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
        height: 80px;
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
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 20px;
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
.ctx-left {
    .ft-investor {
        margin-bottom: 41px;
        span {
            display: inline-block;
            vertical-align: middle;
            font-size: 20px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #ffffff;
            line-height: 28px;
        }
        a {
            display: inline-block;
            vertical-align: middle;
            width: 116px;
            height: 24px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin-right: 16px;
        }
        .ft-soft {
            background-image: url("../assets/image/footer/soft.png");
        }
    }
    .ft-social {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 33px;
        span {
            display: inline-block;
            vertical-align: middle;
            font-size: 20px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #ffffff;
            line-height: 28px;
        }
        a {
            color: white;
        }

        .ft-social-img {
            border: 1px solid white;
            border-radius: 100%;
            padding: 5px;
        }
        .ft-social-icon {
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
        .ft-kakao {
            background-image: url("../assets/image/footer/kakao.png");
        }
        .ft-cat {
            background-image: url("../assets/image/footer/cat.png");
        }
    }
    .ft-copyright {
        span {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            /*color: #CCCCCC;*/
            color: #ffffff;
            line-height: 20px;
        }
    }
}
.ft-sup-title {
    font-size: 20px;
    font-family: Helvetica;
    color: #ffffff;
    line-height: 24px;
    margin-bottom: 26px;
}
.ft-sup-li {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    /*color: #CCCCCC;*/
    color: #ffffff;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 15px;
    a {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        /*color: #CCCCCC;*/
        color: #ffffff;
        font-weight: 400;
    }
}
.footer-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.footer-icon {
    width: 85%;
    margin-top: 42px;
    cursor: pointer;
    padding-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img {
        width: 60px;
        height: 60px;
    }
}
.footer-icon-e {
    margin-left: 20px;
}
.footer-icon-span {
    width: 60px;
    height: 60px;
    background: #1f2e42;
    border-radius: 8px;
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 30px;
    margin: 10px 10px;
    flex-wrap: wrap;
}

.footer-content-text {
    font-size: 16px;
    font-family: ArialMT;
    color: #ffffff;
    line-height: 39px;
}

.footer-content-line {
    margin-top: 34px;
    width: 425px;
    height: 1px;
    border-top: 1px dashed #979797;
}

@media (max-width: 1200px) {
    .ft-container {
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
@media (max-width: 960px) {
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
    .footer-icon {
        width: 250px;
    }
}

@media (max-width: 480px) {
    .footer {
        padding-top: 67px;
    }
    .ft-logo {
        margin: 0 auto 66px auto;
    }
    .ctx-left {
        .ft-social {
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
        .ctx-center,
        .ctx-right {
            margin-top: 26px;
        }
    }
    .ft-mobile-copyRight {
        padding-top: 41px;
    }
    .footer-icon {
        width: 250px;
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
                    <!-- <img src="../assets/image/footer/t.png" />
                    <a href="mailto:inquiry@abeychain.com">
                        <img class="footer-icon-e" src="../assets/image/footer/e.png" />
                    </a> -->
                    <div class="footer-icon-span iconfont icon-twitter" @click="goPath(1)"></div>
                    <div class="footer-icon-span iconfont icon-facebook" @click="goPath(2)"></div>
                    <div class="footer-icon-span iconfont icon-linkedin" @click="goPath(3)"></div>
                    <div class="footer-icon-span iconfont icon-instagram" @click="goPath(4)"></div>
                    <div class="footer-icon-span iconfont icon-medium" @click="goPath(5)"></div>
                    <div class="footer-icon-span iconfont icon-bxl-telegram" @click="goPath(6)"></div>
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
    methods: {
        goPath(val) {
            switch (val) {
                case 1:
                    window.open("https://twitter.com/ABEYFoundation", "_blank");
                    break;
                case 2:
                    window.open("https://www.facebook.com/ABEYNews", "_blank");
                    break;
                case 3:
                    window.open("https://www.linkedin.com/company/the-abey-foundation", "_blank");
                    break;
                case 4:
                    window.open("https://www.instagram.com/abey.foundation", "_blank");
                    break;
                case 5:
                    window.open("https://medium.com/@abeynews", "_blank");
                    break;
                case 6:
                    window.open("https://t.me/ABEY_Official", "_blank");
                    break;
            }
        }
    }
}
</script>
