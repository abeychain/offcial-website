<template>
  <div class="" :class="top>300 ? 'my-header-s':'my-header'" id="homeId">
    <div class="container">
      <div class="logo"></div>
      <div class="nav-menu animated fadeIn">
        <div class="header-list">
          <div @click="actionIdavoll" class="header-list-text">
            <span :class="listtext==0?'header-list-text-color':''">ABEY</span>
            <div class="line" v-show="listtext==0"></div>
          </div>
          <div @click="actionArchitecture()" class="header-list-text">
            <span :class="listtext==1?'header-list-text-color':''">Characteristic</span>
            <div class="line" v-show="listtext==1"></div>
          </div>
          <div @click="actionEcosy()" class="header-list-text">
            <span :class="listtext==2?'header-list-text-color':''">Frame diagram</span>
            <div class="line" v-show="listtext==2"></div>
          </div>
          <div id="RoadMapID"  @click="actionRoadMap()" class="header-list-text">
            <span :class="listtext==3?'header-list-text-color':''">AVM diagram</span>
            <div class="line" v-show="listtext==3"></div>
          </div>
          <div @click="actionTeam()" class="header-list-text">
            <span :class="listtext==4?'header-list-text-color':''">Application Scenario</span>
            <div class="line" v-show="listtext==4"></div>
          </div>
          <div @click="actionGitHub()" class="header-list-text">
            <span :class="listtext==5?'header-list-text-color':''">GitHub</span>
            <div class="line" v-show="listtext==5"></div>
          </div>
          <div @click="actionDown()" class="header-list-text">
            <span :class="listtext==6?'header-list-text-color':''">DownLoad</span>
            <div class="line" v-show="listtext==6"></div>
          </div>
<!--          <div @click="actionContact()" class="header-list-text">-->
<!--            <span :class="listtext==5?'header-list-text-color':''">Contact Us</span>-->
<!--            <div class="line" v-show="listtext==5"></div>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {setStore, getStore, setTitle} from '@/libs/util'

export default {
  name: 'MyHeader.vue',
  data() {
    return {
      listtext:0,//选中
      activeNav: 'home',
      selectLangVisible: false, // 选择语言（默认不展示）
      selectLang: {
        name: '',
        subName: '',
        tag: ''
      },
      top:''
    }
  },
  created() {
    let tag = getStore('marcoLang')
    if (tag === null) {
      tag = 'en'
      setStore('marcoLang', 'en')
    }
    let langList = this.$t('header.langList') || []
    let langVo = langList.filter(item => {
      return item.tag === tag
    })
    if (langVo && langVo.length > 0) {
      this.selectLang.name = langVo[0].name
      this.selectLang.subName = langVo[0].subName
      this.selectLang.tag = langVo[0].tag
    }

  },
  mounted() {
    window.addEventListener('scroll',this.scrollHandle);
  },
  methods: {
    scrollHandle(e){
      let top = e.srcElement.scrollingElement.scrollTop;    // 获取页面滚动高度
      this.top=top
      // console.log(top);


      if (top>0&&top<500) {
        this.listtext=0
      }
      else if(top>=500 &&top<1200) {
        this.listtext=1
      }
      else if(top>=1200 &&top<2000) {
        this.listtext=2
      }
      else if(top>=2000 &&top<3100) {
        this.listtext=3
      }
      else if(top>=3100 &&top<3700) {
        this.listtext=4
      }
      else if(top>=3700 &&top<4000) {
        this.listtext=-1
      }
      else if(top>=4000  &&top<4400) {
        this.listtext=6
      }
      else if(top>=4400 ) {
        this.listtext=-1
      }

    },
    actionIdavoll(){
      this.listtext=0
      window.location.href='/'
    },
    actionArchitecture(){
      this.listtext=1
      let child  = document.getElementById("censusId")
      document.documentElement.scrollTop  = (child.offsetTop - 130)
    },
    actionEcosy() {
      this.listtext=2
      let child  = document.getElementById("muchId")
      document.documentElement.scrollTop  = (child.offsetTop)
    },
    actionRoadMap(){
      this.listtext=3
      let child  = document.getElementById("protocolId")
      document.documentElement.scrollTop  = (child.offsetTop)
    },
    actionTeam(){
      this.listtext=4
      let child  = document.getElementById("infoId")
      document.documentElement.scrollTop  = (child.offsetTop)
    },
    actionContact(){
      this.listtext=5
      document.documentElement.scrollTop=8800
    },
    actionGitHub(){
      this.listtext=5
      window.open("https://github.com/abeychain")
    },
    actionDown() {
      this.listtext=6
      let child  = document.getElementById("downId")
      document.documentElement.scrollTop  = (child.offsetTop)
    },
    changeNav(item, ins) {
      this.activeNav = item.key
      const {path} = item;
      console.log(1)
      if (item.key === 'wallet') {
        let routeUrl = this.$router.resolve({
          path: '/about'
        });
        window.open(routeUrl.href, '_blank');
      } else {
        ins === 0 ? this.$router.go(0) : (path.includes('://') ? window.open(path) : document.querySelector(`#${item.path}`).scrollIntoView({
          behavior: 'smooth', // 平滑过渡
          block: 'start' // 上边框与视窗顶部平齐。默认值
        }))
        if (!path.includes('://')) {
          if (this.activeNav === 'why') {
            document.querySelector('#nav_line').style.transform = 'translateX(158px) translateX(0)'
          } else if (this.activeNav === 'roadMap') {
            document.querySelector('#nav_line').style.transform = 'translateX(280px) translateX(0)'
          } else if (this.activeNav === 'wallet') {
            document.querySelector('#nav_line').style.transform = 'translateX(400px) translateX(0)'
          } else if (this.activeNav === 'white') {
            document.querySelector('#nav_line').style.transform = 'translateX(520px) translateX(0)'
          } else if (this.activeNav === 'conTact') {
            document.querySelector('#nav_line').style.transform = 'translateX(640px) translateX(0)'
          } else {
            document.querySelector('#nav_line').style.transform = 'translateX(38px) translateX(0)'
          }
        }
      }
    },
    changeLang(item) {
      setStore('marcoLang', item.tag)
      this.$i18n.locale = item.tag;
      this.selectLangVisible = false
      this.selectLang.name = item.name
      this.selectLang.subName = item.subName;
      this.selectLang.tag = item.tag
    }
  }
}
</script>

<style scoped lang="less">
.line {
  width: 80%;
  height: 2px;
  background: rgba(245, 202, 64, 1);
  border-radius: 4px;
}
.my-header-s {
  width: 100%;
  //height:85px;
  background: rgba(3, 19, 42, 1);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06);
  position: fixed;
  z-index: 99999;
  box-shadow: 2px 11px 13px 2px rgba(24,22,22,0.74);
  -webkit-box-shadow: 2px 11px 13px 2px rgba(24,22,22,0.74);
  -moz-box-shadow: 2px 11px 13px 2px rgba(24,22,22,0.74);
}
.my-header {
  width: 100%;
  //height:85px;
  background: rgba(3, 19, 42, 1);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06);
  position: fixed;
  z-index: 99999;
  //box-shadow: 0px 12px 24px 3px rgba(75,72,72,0.64);
  //-webkit-box-shadow: 0px 12px 24px 3px rgba(75,72,72,0.64);
  //-moz-box-shadow: 0px 12px 24px 3px rgba(75,72,72,0.64);
}
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    align-items: center;
    padding-top: 36px;
    padding-bottom: 36px;

    .logo {
      //display: block;
      width: 186px;
      height: 57px;
      background-image: url("../assets/image/header/logo.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      //margin-left: 20px;
    }

    .nav-menu {
      margin-left: 90px;
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .nav_line {
      position: absolute;
      bottom: 0;
      width: 25px;
      height: 2px;
      background: rgba(245, 202, 64, 1);
      border-radius: 4px;
      transform: translateX(38px) translateX(0);
      transition-duration: 0.3s;
    }

    .menu {
      display: flex;
      justify-content: flex-end;

      li {
        //width: 15%;
        list-style-type: none;
        //width: 140px;
        margin-left: 35px;
        text-align: center;

        a {
          width: 100%;
          //min-width: 46px;
          text-align: center;
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          color: white;
          text-decoration: none;
          font-weight: 800;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        a:hover {
          color: rgba(245, 202, 64, 1);
          font-size: 18px;
          font-weight: 800;
        }

        //&:last-child {
        //  margin-right: 0;
        //  width: 180px;
        //  padding-right: 16px;
        //}
      }
    }
  }
  .header-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    font-family: Arial-BoldMT, Arial;
    font-weight: normal;
    color: white;
    line-height: 21px;
    .header-list-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      margin-left: 20px;
      span {
        line-height: 40px;
        height: 40px;
      }
    }
    .header-list-line {

    }
    .header-list-text:hover {
      color: rgba(245, 202, 64, 1);
    }
    .header-list-text-color {
      color:rgba(245, 202, 64, 1);
    }

  }
  .nav_line {
    position: absolute;
    bottom: 0;
    width: 46px;
    height: 6px;
    background: black;
    transform: translateX(38px) translateX(0);
    transition-duration: 0.3s;
  }

  .lang-layout {
    position: relative;
    text-align: right;

    .icon-select {
      display: inline-block;
      vertical-align: middle;
      width: 12px;
      height: 12px;
      margin-left: 8px;
      background-image: url('../assets/image/header/select-top.png');
      transform: rotate(180deg);
      background-repeat: no-repeat;
      background-size: 100% 100%;

      &.up {
        transform: rotate(0);
        background-image: url('../assets/image/header/select-top.png');
      }
    }

    .lang-show {
      margin-bottom: 10px;
      display: inline-block;
    }

    .lang-list {
      position: absolute;
      right: 0;
      width: 164px;
      background: #ffffff;
      border: 1px solid #000000;
      z-index: 999;

      li {
        width: 100%;
        cursor: pointer;
        text-align: center;
        margin: 0 0;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
        line-height: 35px;

        &.active {
          background: #131313;
          color: #ffffff;
        }
      }
    }
  }
@media(max-width: 1200px) {
  .my-header-s {
    display: none;
  }
}
</style>
