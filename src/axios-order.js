import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-2d38b.firebaseio.com/'
})

export default instance;