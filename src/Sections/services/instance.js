import Axios from 'axios';
export const instance = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10000
})