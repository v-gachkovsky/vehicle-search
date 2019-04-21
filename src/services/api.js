import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  responseType: 'json'
})

export function get(url, data = {}, options = {}) {
  return axios.get(url, { params: data, ...options })
}
