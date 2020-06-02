import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://todo-4b0f0.firebaseio.com/'
});

export default instance