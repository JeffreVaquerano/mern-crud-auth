import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.47.128/api',
    withCredentials: true,
})

export default instance