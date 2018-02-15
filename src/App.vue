<template>
  <div id="app">
    <m-header :title="title" :backshow="backshow"></m-header>
    <div class="router-view">
      <router-view/>
    </div>
    <m-tabbar></m-tabbar>
  </div>
</template>

<script>
import mHeader from './components/header/header.vue'
import mTabbar from './components/tabbar/tabbar.vue'
import Bus from './common/Bus.js'
export default {
  name: 'App',
  components: {
    mHeader,
    mTabbar
  },
  data() {
    return {
      title: '正在热映',
      backshow: false
    }
  },
  created() {
    // 标题设置
    Bus.$on('setTitle', title => {
      this.title = title
    })
    // 后退按钮显示
    Bus.$on('backshow', flag => {
      this.backshow = flag
    })
  }
}
</script>

<style>
html,body{
  height: 100%;
}
.router-view{
  height: 100%;
  position: relative;
  padding-top: 46px;
  padding-bottom: 50px;
  box-sizing: border-box;
  -webkit-overflow-scrolling : touch ;
  overflow: auto;
}
#app{
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
