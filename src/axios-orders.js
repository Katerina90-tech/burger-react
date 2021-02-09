import  axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-react-e69ca-default-rtdb.firebaseio.com/'

});

export default instance;
