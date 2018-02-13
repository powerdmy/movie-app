<template>
  <div>
    <m-loading :end="completed"></m-loading>
    <ul>
        <m-item v-for="(item, index) in info" :key="index" :m-info="item"></m-item>
    </ul>
  </div>
</template>
<script>
import mItem from '../movieItem/movieItem.vue'
import httpClient from '../../api/index.js'
import mLoading from '../loading/loading.vue'
export default {
  name: 'hotlist',
  components: {
    mItem,
    mLoading
  },
  data() {
    return {
      info: null,
      completed: false
    }
  },
  created() {
    httpClient.getHotlist()
    .then(res => {
      this.info = res.data.subjects
      this.completed = true
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>
<style lang="less">
</style>
