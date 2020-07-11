import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-chat-7c5b7.firebaseio.com'
});

export default instance;