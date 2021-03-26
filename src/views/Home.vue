<template>
  <div class="home">
    <my-header-mobile />
    <my-header />
    <notice />
    <census />
    <much-more/>
    <protocol />
    <info />
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
import MyFooter from '@/components/Footer'
import MuchMore from "@/components/MuchMore";

export default {
  name: 'home',
  components: {
    MuchMore,
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
