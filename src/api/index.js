import axios from 'axios'

const baseUrl = 'api'
class MovieClient {
    constructor() {
        this.$http = axios.create()
    }
    // 正在热映
    getHotlist() {
        return this.$http.get(`${baseUrl}/v2/movie/in_theaters`)
    }
    // top250
    getToplist(star, count) {
        return this.$http.get(`${baseUrl}/v2/movie/top250`, {
            params: {
                star,
                count
            }
        })
    }
}

export default new MovieClient()
