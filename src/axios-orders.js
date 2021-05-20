import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-68304-default-rtdb.firebaseio.com/'
});

export default instance;