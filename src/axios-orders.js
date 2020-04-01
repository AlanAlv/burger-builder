import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-23a26.firebaseio.com/'
});

export default instance;