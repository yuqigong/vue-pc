/**
 * Created by gongyuqi on 2017/5/16.
 */
import axios from 'axios'
import store from '../store'
import {MessageBox} from 'element-ui'

const httpService = axios.create({
    baseURL: process.env.BASE_API,
    headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    timeout: 10000
});

httpService.interceptors.request.use(config => {
    debugger
    if (store.getters.token) {
        config.data ? Object.assign(config.data, {token: store.getters.token}) :
            Object.assign(config, {data: {token: store.getters.token}})
    }
    return config;
}, error => {
    return Promise.reject(error);
});

httpService.interceptors.response.use(response => {

    if (response.data.code === '0007') {
        store.dispatch('CLogout').then(() => {
            debugger
            MessageBox.alert('用户超时', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    location.reload();
                }
            });
        }).catch(err => {
            console.log(err);
        });
    }

    return response;
}, error => {
    return Promise.reject(error);
});

const fetch = (httpParams) => {
    return new Promise((resolve, reject) => {
        httpService(httpParams).then(response => {
            resolve(response);
        }).catch(error => {
            MessageBox.alert('网络异常', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    reject(error);
                    console.log('fetch##' + error); // for debug
                }
            });
        })
    });
};

export default fetch;
