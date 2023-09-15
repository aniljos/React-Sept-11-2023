import axios, {InternalAxiosRequestConfig} from 'axios';
import {store} from '../redux/store';


axios.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {

    const loginRequestUrl = "http://localhost:9000/login";

    if(config.url !== loginRequestUrl && config.url?.startsWith(process.env.REACT_APP_BASE_PRODUCTS_URL + "")){
        const reduxState = store.getState();
        config.headers.Authorization = `Bearer ${reduxState.auth.accessToken}`;
    }
    return config;
})