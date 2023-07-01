import axios from "axios";

axios.defaults.baseURL = "https://api.reena.app"
const http = {
    get: axios.get,
    post: axios.post,  
};

export default http;