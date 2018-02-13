<template>
  <li class="movie-item">
      <img class="poster" :src="mInfo.images.small" alt="">
      <div class="info-wrap">
        <div class="name">{{mInfo.title }}</div>
        <div class="star-wrap">
          <m-star size="36" :score='mInfo.rating.average'></m-star><span class="score">{{mInfo.rating.average}}</span>
        </div>
        <span class="director">导演：{{ getDirectors }}</span>
        <div class="artice"><span>主演：</span><p>{{ getArticles }}</p></div>
      </div>
  </li>
</template>
<script>
import mStar from '../star/star.vue'
export default {
  name: 'movie-item',
  components: {
      mStar
  },
  props: {
    mInfo: {
      type: Object
    }
  },
  computed: {
    // 导演
    getDirectors() {
      let dir = []
      for (let i = 0, len = this.mInfo.directors.length; i < len; i++) {
        dir.push(this.mInfo.directors[i].name)
      }
      return dir.join('/')
    },
    // 演员
    getArticles() {
      let art = []
      for (let i = 0, len = this.mInfo.casts.length; i < len; i++) {
        art.push(this.mInfo.casts[i].name)
      }
      return art.join('/')
    }
  }
}
</script>
<style lang="less">
.movie-item{
  margin: 15px;
  height: 140px;
  padding-bottom: 15px;
  border-bottom: 1px solid #dddddd;
  &:last-child{
    border-bottom: none;
  }
  .poster{
    float: left;
    width: 100px;
    height: 140px;
  }
  .info-wrap{
    margin-left: 110px;
    .director{
      display: block;
      line-height: 24px;
      color: #666666;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .name{
      margin-bottom: 10px;
      font-size: 18px;
    }
    .score{
      color: #999999;
      font-size: 14px;
      margin-left: 10px;
      display: inline-block;
      vertical-align: top;
    }
    .star-wrap{
      margin: 4px 0;
    }
  }
  .artice{
    color: #666666;
    display: flex;
    >span{
      display: inline-block;
      width: 42px;
      line-height: 24px;
    }
    >p{
      flex: 1;
      line-height: 24px;
    }
  }
}
</style>
