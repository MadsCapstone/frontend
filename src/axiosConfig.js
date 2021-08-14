import axios from 'axios';


const axiosInstance = axios.create(
    {
        baseURL:'https://api.the-ripple-effect.app/api/v1',
        // baseURL:'http://localhost:5001/api/v1'
    });

axiosInstance.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
    console.log(response);
    // Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axiosInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';


export default axiosInstance