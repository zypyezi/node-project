

import axios from 'axios'

axios.interceptors.response.use(
    response=> {
        console.log(response, '----')
    //   let code = response.data.retcode
      // 特殊状态下允许返回
    //   if (code === 0) {
    //     return response.data    // 请求成功
    //   } else {
    //     return Promise.reject(response.data)
    //   }
    },
    error=> {
    }
  )

export const post = (url,data)=> {
    return axios.post(url, data)
  }
  