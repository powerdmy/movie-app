<template>
  <div>
		<m-loading :end="completed"></m-loading>
		<div  v-if="movieInfo">
			<div class="m-top-poster">
				<div class="cover">
					<img :src="movieInfo.images.small" alt="">
				</div>
			</div>
			<div class="movie-info-wrap fixed">
				<div class="movie-info-l">
					<div class="title">{{ movieInfo.title }}</div>
					<div class="movie-info-item">
						{{ movieInfo.year }}/{{ movieInfo.countries.join('/') }}
					</div>
					<div class="movie-info-item">
						{{ movieInfo.genres.join('/') }}
					</div>
					<div class="movie-info-item">原名：{{ movieInfo.original_title }}</div>
					<div class="movie-info-item">导演：{{ getDirectors }}</div>
				</div>
				<div class="movie-info-r">
					<div class="movie-score-wrap">
						<div class="score">
							评分：<span> {{ movieInfo.rating.average }} </span>
						</div>
						<m-star size="36" :score="movieInfo.rating.average"></m-star>
						<div class="person-num">{{ movieInfo.ratings_count }}人</div>
					</div>
				</div>
			</div>
			<div class="movie-btn-wrap fixed">
				<div class="btn">想看（{{ movieInfo.wish_count }}）</div>
				<div class="btn">看过（{{ movieInfo.collect_count }}）</div>
			</div>
			<div class="movie-summary">
				<div class="title">剧情简介：</div>
				<div class="main">
					{{ movieInfo.summary }}
				</div>
			</div>
		</div>
  </div>
</template>
<script>
import Bus from '../../common/Bus.js'
import mStar from '../star/star.vue'
import httpClient from '../../api/index.js'
import mLoading from '../loading/loading.vue'
export default {
	name: 'movieDetail',
	components: {
		mStar,
		mLoading
	},
  data() {
		return {
			completed: false,
			movieInfo: null
		}
	},
	computed: {
		// 导演
		getDirectors() {
      let dir = []
      for (let i = 0, len = this.movieInfo.directors.length; i < len; i++) {
        dir.push(this.movieInfo.directors[i].name)
      }
      return dir.join('/')
    }
	},
	// 回退修改Header
  beforeRouteLeave (to, from, next) {
		if (to.name === 'hotList') {
			Bus.$emit('setTitle', '正在热映')
			Bus.$emit('backshow', false)
		}
		next()
	},
	created() {
		httpClient.getMovieItem(this.$route.params.id).then(res => {
			this.movieInfo = res.data
			this.completed = true
		}).catch(error => {
			console.log(error)
		})
	}
}
</script>
<style lang="less">
.m-top-poster{
	margin: 20px auto;
	width: 40%;
	.cover{
		width: 100%;
		padding-bottom: 140%;
		height: 0;
		overflow: hidden;
		img{
			width: 100%;
			height: auto;
		}
	}
}
.movie-info-wrap{
	margin: 15px;
}
.movie-info-l{
	float: left;
	width: 50%;
	.title{
		font-size: 18px;
		color: #333333;
	}
	.movie-info-item{
		font-size: 14px;
		color: #666666;
		margin-top: 8px;
	}
}
.movie-info-r{
	float: right;
	width: 50%;
}
.movie-score-wrap{
	padding: 10px;
	border: 1px solid #eeeeee;
	width: 100px;
	margin: 10px auto 0;
	border-radius: 4px;
	.score{
		font-size: 14px;
		color: #666666;
		display: block;
		text-align: center;
		margin-bottom: 6px;
		span{
			color: #c75c1e;
		}
	}
	.person-num{
		color: #999999;
		font-size: 14px;
		display: block;
		margin-top: 4px;
		text-align: center;
	}
}
.movie-btn-wrap{
	margin: 0 15px;
	.btn{
		float: left;
		width: 47%;
		margin-right: 6%;
		box-sizing: border-box;
		line-height: 34px;
		height: 34px;
		text-align: center;
		font-size: 14px;
		border: 1px solid #ff7a2d;
		color: #ff7a2d;
		&:last-child{
			margin-right: 0;
		}
	}
}
.movie-summary{
	margin: 15px;
	.title{
		color: #999999;
		font-size: 14px;
	}
	.main{
		margin-top: 8px;
		color: #999999;
		font-size: 14px;
		line-height: 1.5;
	}
}
</style>
