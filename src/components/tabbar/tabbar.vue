<template>
  <div class="tabbar">
      <div class="router-link-wrap" @click="setTitle('正在热映')">
        <router-link to="/hotlist">
            <i class="iconfont icon-bofang"></i>
            <p>正在热映</p>
        </router-link>
      </div>
      <div class="router-link-wrap" @click="setTitle('排行榜')">
        <router-link to="/rank">
            <i class="iconfont icon-paixingbang"></i>
            <p>排行榜</p>
        </router-link>
      </div>
  </div>
</template>
<script>
import Bus from '../../common/Bus.js'
export default {
	name: 'mTabbar',
	methods: {
			setTitle(title) {
				Bus.$emit('setTitle', title)
			}
		}
}
</script>
<style lang="less">
.tabbar{
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 56px;
    background-color: #F7F7FA;
    .router-link-wrap{
        flex: 1;
    }
    a{
        display: block;
        text-align: center;
        color: #999999;
        .iconfont{
            display: block;
            margin-top: 6px;
            font-size: 24px;
        }
        >p{
            font-size: 14px;
            margin-top: 6px;
        }
    }
    .router-link-active{
        color: #2691e9;
    }
}
</style>
