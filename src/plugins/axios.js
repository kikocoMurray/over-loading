import axios from "axios"

const service = axios.create({
  baseURL: `/github`,
  timeout: 3000,
})

service.interceptors.request.use(
  (config) => {
    if(config.needToken === true) {
      config.headers = {
        Authorization: `token ${import.meta.env.VITE_TOKEN}`
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