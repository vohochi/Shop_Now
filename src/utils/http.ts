import axios, { AxiosError, HttpStatusCode, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'

class Http {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response
      },
      (error: AxiosError) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        if (error.response?.status === HttpStatusCode.UnprocessableEntity) {
          // Do something when user is not authenticated
          const data: any | undefined = error.response?.data
          if (data) {
            if (data.message) {
              toast.error(data.message)
              console.log(data.message)
            }
            if (data.errors) {
              toast.error('Please check your input')
              console.log(data.errors)
            }
          }
        }

        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
