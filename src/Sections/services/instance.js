import Axios from 'axios';
console.log(process.env)
export const instance = Axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    timeout: 10000
})