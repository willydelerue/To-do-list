import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://to-do-list-f4b92-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;