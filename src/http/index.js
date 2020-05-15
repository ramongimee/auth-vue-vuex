import axios from 'axios'

const htpp = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json'
    }
})

htpp.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, function (erro) {
    return Promise.reject(erro)
})

export default htpp