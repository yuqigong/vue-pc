/**
 * Created by gongyuqi on 2017/5/16.
 */
import fetch from '../utils/fetch';

export const login = (login_name, pass_word) => {
    const data = {
        login_name,
        pass_word
    };
    return fetch({
        url: '/trade-app/ops/opsSysUserController/login',
        method: 'post',
        data
    });
};

export const logout = () => {
    return fetch({
        url: '/trade-app/ops/opsSysUserController/logout',
        method: 'post'
    });
};

export const getLoginInfo = () => {
    return fetch({
        url: '/trade-app/ops/opsSysUserController/queryLoginUserInfo',
        method: 'post'
    });
};


