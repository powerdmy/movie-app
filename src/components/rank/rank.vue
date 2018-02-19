<template>
  <div>
    <m-loading :end="completed"></m-loading>
    <div class="rank-wrap">
      <p class="rank-wrap-tips">top250<a href="javascript:">更多</a></p>
      <ul class="movie-top-list fixed">
        <li @click="setTitle(item.title)" v-for="(item, index) in toplist" :key="index">
          <router-link :to="{ name: 'movieDetail', params: { id: item.id } }">
            <div class="cover">
              <img :src="item.images.small" :alt="item.alt">
              <span class="badge">{{ index + 1 }}</span>
            </div>
            <p>{{ item.title }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import mLoading from '../loading/loading.vue'
import httpClient from '../../api/index.js'
import Bus from '../../common/Bus.js'
export default {
  name: 'rank',
  components: {
    mLoading
  },
  data() {
    return {
      completed: false,
      toplist: null
    }
  },
  created() {
    // top250
    httpClient.getToplist(0, 9).then(res => {
      this.toplist = res.data.subjects
      this.completed = true
    }).catch(error => {
      console.log(error)
    })
    // 北美票房榜
  },
  methods: {
    // 点击 进入电影详情 修改header
    setTitle(title) {
      Bus.$emit('setTitle', title)
      Bus.$emit('backshow', true)
    }
  }
}
</script>

<style lang="less">
.rank-wrap{
  margin: 15px 5px;
  .rank-wrap-tips{
    color: #999999;
    font-size: 14px;
    padding: 0 10px;
    a{
      float: right;
      color: #999999;
    }
  }
}
.movie-top-list{
  margin-bottom: 15px;
  li{
    width: 33.33%;
    float: left;
    padding: 10px;
    box-sizing: border-box;
    .cover{
      position: relative;
      width: 100%;
      padding-bottom: 140%;
      overflow: hidden;
      height: 0;
      img{
        width: 100%;
        height: auto;
      }
      .badge{
        position: absolute;
        top: 0;
        right: 0;
        width: 20%;
        color: #ffffff;
        background-color: #f19f3a;
        text-align: center;
        font-size: 2vw;
        line-height: 1.8;
      }
    }
    p{
      text-align: center;
      color: #666666;
      font-size: 14px;
      margin-top: 6px;
    }
  }
}
</style>
