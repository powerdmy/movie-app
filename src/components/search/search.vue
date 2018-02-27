<template>
  <div>
    <m-loading :end="complete"></m-loading>
   <ul>
      <m-item v-for="(item, index) in info" :key="index" :m-info="item"></m-item>
    </ul>
  </div>
</template>
<script>
import mItem from '../../components/movieItem/movieItem.vue'
import mLoading from '../../components/loading/loading.vue'
import httpClient from '../../api/index.js'
export default {
  name: 'm-search',
  components: {
    mItem,
    mLoading
  },
  data() {
		return {
			complete: false,
			info: null
		}
	},
  created() {
    httpClient.searchMovie(this.$route.query.q).then(res => {
			this.complete = true
			this.info = res.data.subjects
    }).catch(error => {
			console.log(error)
		})
  }
}
</script>
