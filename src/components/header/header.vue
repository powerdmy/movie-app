<template>
	<div class="header">
    <header>
      <i @click="$router.back()" class="iconfont icon-fanhui" v-if="backshow"></i>  {{title}} <i class="iconfont icon-sousuo" @click="searchShow =! searchShow"></i>
    </header>
		<div class="search-wrap" v-show="searchShow">
			<input type="text" class="search-input" v-model="searchText" placeholder="请输入">
			<div class="btn" @click="clearText">
				<router-link :to="{name: 'search', query:{q: searchText}}">搜索</router-link>
			</div>
		</div>
	</div>
</template>
<script>
import Bus from '../../common/Bus.js'
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
	},
	data() {
		return {
			searchShow: false,
			searchText: ''
		}
	},
	methods: {
		clearText() {
			Bus.$emit('setTitle', '搜索' + this.searchText)
			this.searchShow = false
			this.searchText = ''
		}
	}
}
</script>
<style lang="less">
@blueColor: #2691e9;
.header {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 46px;
  line-height: 46px;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  background-color: @blueColor;
  .icon-sousuo {
    position: absolute;
    right: 5px;
    top: 0;
    font-size: 20px;
    padding: 0 15px;
  }
  .icon-fanhui {
    position: absolute;
    left: 2px;
    top: 0;
    font-size: 18px;
    padding: 0 15px;
  }
}
.search-wrap{
	position: absolute;
	top: 46px;
	width: 100%;
	.btn{
		position: absolute;
		top: 0;
		right: 10px;
		a{
			display: block;
			padding: 0 5px;
			line-height: 40px;
			color: #2691e9;
			font-size: 14px;
		}
	}
}
.search-input{
	display: block;
	width: 100%;
	box-sizing: border-box;
	line-height: 40px;
	height: 40px;
	font-size: 14px;
	color: #666666;
	padding: 0 15px;
	outline: none;
	border: none;
	border-bottom: 1px solid #dddddd;
}
</style>
