<template>
  <div>
      <m-loading :end="complete"></m-loading>
			<div v-if="artInfo">
				<div class="actor-wrap">
					<img :src="artInfo.avatars.small" alt="">
					<p class="tips">
						<span class="name">{{ artInfo.name }}</span>
						<span class="role">{{ artInfo.gender }} {{ artInfo.born_place }}</span>
					</p>
				</div>
				<ul>
					<m-item v-for="(item, index) in artInfo.works" :key="index" :m-info="item.subject"></m-item>
				</ul>
			</div>
  </div>
</template>
<script>
import httpClient from '../../api/index.js'
import mLoading from '../loading/loading.vue'
import mItem from '../movieItem/movieItem.vue'
import Bus from '../../common/Bus.js'
export default {
  name: 'actor',
  data() {
		return {
			complete: false,
			artInfo: null
		}
	},
	components: {
		mLoading,
		mItem
	},
	// 修改title
	beforeRouteLeave(to, from, next) {
		if (to.name === 'movieDetail') {
			Bus.$emit('setTitle', this.$root.backTitle)
			this.$root.backName = this.artInfo.name
		}
		next()
	},
	created() {
		httpClient.getActor(this.$route.params.id).then(res => {
			this.artInfo = res.data
			this.complete = true
		})
	}
}
</script>
<style lang="less" scoped>
.actor-wrap{
	margin-top: 15px;
	img{
		display: block;
		margin: 0 auto;
		width: 50%;
		height: auto;
	}
	.tips{
		width: 50%;
		margin: 10px auto;
		text-align: center;
		.name{
			font-size: 16px;
			color: #333333;
		}
		.role{
			font-size: 14px;
			color: #999999;
		}
	}
}
</style>
