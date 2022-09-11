import axios from 'axios';

const instance = axios.create
(
    {
        baseURL:'http://localhost:8000/api',
        //baseURL: 'https://api.adweb.aiub.edu'
    }
);

/*
instance.interceptors.request.use((config)=>{
    config.headers.common["Authorization"] = localStorage.getItem('_authToken');
    console.log("intercepted");
    //console.log(config);
    return config;
},(error)=>{
    return Promise.reject(error);
});
instance.interceptors.response.use((rsp)=>{
    //console.log('got response);
    return rsp;
},(err)=>{
    console.log(err.response);
    if(err.response.status === 401)
    {
        window.location.href="/";
    }
    return Promise.reject(err);
});
*/
export default instance;