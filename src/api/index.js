import axios from 'axios'

const baseUrl = 'api'
class MovieClient {
    constructor() {
        this.$http = axios.create({
            baseURL: baseUrl
        })
    }
    // 正在热映
    getHotlist() {
        return this.$http.get(`/v2/movie/in_theaters`)
    }
    // top250
    getToplist(star, count) {
        return this.$http.get(`/v2/movie/top250`, {
            params: {
                star,
                count
            }
        })
    }
    // 电影条目信息
    getMovieItem(movieid) {
        return this.$http.get(`/v2/movie/subject/${movieid}`)
    }
    // 影人条目信息
    getActor(id) {
        return this.$http.get(`/v2/movie/celebrity/${id}`)
    }
    // 搜索
    searchMovie(text) {
        return this.$http.get(`/v2/movie/search?q=${text}`)
    }
}

export default new MovieClient()
