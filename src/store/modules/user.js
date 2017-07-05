/**
 * Created by gongyuqi on 2017/5/12.
 */
import {login, logout, getLoginInfo} from '../../api/login'
import Cookies from 'js-cookie'

const user = {
    state: {
        userid: '',
        userno: '',
        roles: [],
        status: '',
        token: Cookies.get('X-Credit-Token'),
        account: '',
        nickname: '',
        realname: '',
        email: '',
        phone: '',
        roleall: [],
        menus: [],
        access: false
    },
    mutations: {
        SET_USERID: (state, userid) => {
            state.userid = userid;
        },
        SET_USERNO: (state, userno) => {
            state.userno = userno;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        },
        SET_STATUS: (state, status) => {
            state.status = status;
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_ACCOUNT: (state, account) => {
            state.account = account;
        },
        SET_NICKNAME: (state, nickname) => {
            state.nickname = nickname;
        },
        SET_REALNAME: (state, realname) => {
            state.realname = realname;
        },
        SET_EMAIL: (state, email) => {
            state.email = email;
        },
        SET_PHONE: (state, phone) => {
            state.phone = phone;
        },
        SET_ROLEALL: (state, roleall) => {
            state.roleall = roleall;
        },
        SET_MENUS: (state, menus) => {
            state.menus = menus;
        },
        SET_ACCESS: (state, access) => {
            state.access = access
        }
    },
    actions: {
        Login ({commit}, userInfo) {
            const login_name = userInfo.login_name.trim();
            return new Promise((resolve, reject) => {
                login(login_name, userInfo.pass_word).then(response => {
                    let result = response.data.data;
                    if (response.data.code === '0000') {
                        Cookies.set('X-Credit-Token', result.token);
                        commit('SET_TOKEN', result.token);
                    }
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        },
        GetInfo ({commit}) {
            return new Promise((resolve, reject) => {
                getLoginInfo().then(response => {
                    let result = response.data.data;
                    if (response.data.code === '0000') {
                        commit('SET_USERID', result.id);
                        commit('SET_USERNO', result.userNo);
                        commit('SET_ROLES', result.roles);
                        commit('SET_STATUS', result.status);
                        commit('SET_ACCOUNT', result.loginName);
                        commit('SET_NICKNAME', result.nickName);
                        commit('SET_REALNAME', result.realName);
                        commit('SET_EMAIL', result.email);
                        commit('SET_PHONE', result.phoneNo);
                        commit('SET_ROLEALL', result.roleAll);
                        commit('SET_MENUS', result.menus);
                        commit('SET_ACCESS', true);
                    }
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        },
        CLogout ({commit}) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '');
                commit('SET_ROLES', []);
                Cookies.remove('X-Credit-Token');
                resolve();
            });
        },
        Logout ({commit}) {
            return new Promise((resolve, reject) => {
                logout().then(response => {
                    commit('SET_TOKEN', '');
                    commit('SET_ROLES', []);
                    Cookies.remove('X-Credit-Token');
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        }
    }
};

export default user
