<template>
  <div class="home">
    <my-header-mobile />
    <my-header />
    <notice />
    <census />
    <much-more/>
    <protocol />
<!--    <earn/>-->
    <info />
<!--    <cryptoassets/>-->
<!--    <roadmap/>-->
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyHeaderMobile from '@/components/MyHeaderMobile'
import Notice from '@/components/notice'
import Protocol from '@/components/Protocol'
import Census from '@/components/Census'
import Info from '@/components/Info'
import Roadmap from '@/components/Roadmap'
import MyFooter from '@/components/Footer'
import Cryptoassets from "@/components/Cryptoassets";
import MuchMore from "@/components/MuchMore";
// import Earn from "@/components/Earn";

export default {
  name: 'home',
  components: {
    // Earn,
    MuchMore,
    Roadmap,
    Cryptoassets,
    MyHeader,
    MyHeaderMobile,
    Notice,
    Protocol,
    Census,
    Info,
    MyFooter
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  },
  destroyed () {
  }
}
</script>

<style lang="less">
  .home{
    overflow: hidden;
    background-color: white;
  }
</style>
