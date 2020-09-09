export default function({ $axios, redirect }) {
  // $axios.baseURL="http://39.99.224.10"
  // console.log($axios.baseURL)

  $axios.interceptors.request.use(
    config => {
      // do something before request is sent
      console.log(process.env.NODE_ENV)
      config.baseURL=process.env.NODE_ENV !== 'production'?"http://localhost:3000":"http://39.99.224.10"
      return config
    },
    error => {
      // do something with request error
      return Promise.reject(error)
    }
  )
}
