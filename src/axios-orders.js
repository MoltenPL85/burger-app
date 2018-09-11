import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-bb455.firebaseio.com/',
});

export default instance;
