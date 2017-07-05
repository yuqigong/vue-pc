/**
 * Created by gongyuqi on 2017/5/12.
 */

import _ from 'lodash'
import {toMenus} from '../../utils'

const hasPermission = (menus, routes) => {
    let _menus = toMenus(menus);

    let loopMenus = [];
    for (let menu in _menus) {
        _menus[menu].filter(submenu => {
            loopMenus.push(menu + '/' + submenu)
        });
    }

    return routes.filter(route => {
        let menu = route.path.slice(1);
        if (_.keys(_menus).indexOf(menu) !== -1) {
            if (route.children) {
                route.children = route.children.filter(child => {
                    return loopMenus.indexOf(menu + '/' + child.path) > -1
                });
                return route;
            }
            return route;
        }
    });
};

const app = {
    state: {
        sidebar: {
            opened: true
        },
        theme: 'default',
        serverError: false,
        routers: [],
        addRouters: []
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.sidebar.opened = !state.sidebar.opened;
        },
        SET_ROUTERS: (state, routes) => {
            state.routers = routes;
        },
        SET_ADDROUTERS: (state, routes) => {
            state.addRouters = routes;
        },
        SET_SERVER_STATE: (state, tag) => {
            state.serverError = tag;
        }
    },
    actions: {
        ToggleSideBar ({commit}) {
            commit('TOGGLE_SIDEBAR')
        },
        GenerateRoutes ({commit}, data) {
            let asyncRoutes = hasPermission(data.menus, data.routes.async);
            return new Promise((resolve) => {
                commit('SET_ADDROUTERS', asyncRoutes);
                commit('SET_ROUTERS', data.routes.constant.concat(asyncRoutes));
                resolve(asyncRoutes);
            });
        }
    }
};

export default app
