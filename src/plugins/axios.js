import axios from "axios"
import {owner,token} from '../../token.json'

const service = axios.create({
  baseURL: `https://api.github.com/users/${owner}`,
  timeout: 3000,
})

service.interceptors.request.use(
  (config) => {
    if(config.needToken === true) {
      config.headers = {
        Authorization: `token ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service