import axios from "axios";

axios.defaults.baseURL = 'https://django-restf.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();