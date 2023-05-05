import axios from "@/plugins/axios"
const needToken = true

export const getGitHubData = ({ page })=> new Promise((resolve,reject)=>{
  axios({
    url: '/repos',
    methods: 'GET',
    needToken,
    params:{
      per_page: 6,
      page,
    }
  })
    .then(res=>{
      return resolve(res.map(node=>({
        title: node.full_name,
        url: node.html_url,
        description: node.description,
      })))
    })
    .catch(err=>{
      return reject(err)
    })
})