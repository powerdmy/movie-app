<template>
  <header class="header">
    <i @click="$router.back()" class="iconfont icon-fanhui" v-if="backshow"></i>  {{title}} <i class="iconfont icon-sousuo"></i>
  </header>
</template>
<script>
export default {
  name: 'm-header',
  props: {
      title: {
          type: String,
          default: '电影APP'
      },
      backshow: {
          type: Boolean,
          default: false
      }
  }
}
</script>
<style lang="less">
@blueColor: #2691e9;
.header{
    position: absolute;
    z-index: 999;
    padding: 0 5px;
    top: 0;
    left: 0;
    right: 0;
    height: 46px;
    line-height: 46px;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    background-color:@blueColor;
    .icon-sousuo{
        position: absolute;
        right: 5px;
        top: 0;
        font-size: 20px;
        padding: 0 15px;
    }
    .icon-fanhui{
        position: absolute;
        left: 2px;
        top: 0;
        font-size: 18px;
        padding: 0 15px;
    }
}
</style>
