/**
 * Created by gongyuqi on 2017/5/23.
 */
import fetch from '../utils/fetch';

export const updatePassWord = (params) => {
    const data = {
        old_pass_word: params.old_pass_word,
        new_pass_word: params.new_pass_word
    };

    return fetch({
        url: '/trade-app/ops/opsSysUserController/updatePassWord',
        method: 'post',
        data
    });
};

export const getUserList = (params) => {
    const data = {
        user_no: params.user_no,
        login_name: params.login_name,
        real_name: params.real_name,
        phone_no: params.phone_no,
        page_no: params.page_no,
        page_size: params.page_size
    };

    return fetch({
        url: '/trade-app/ops/opsSysUserController/queryOpsSysUserDOList',
        method: 'post',
        data
    });
};

export const getUserInfo = (id) => {
    const data = {
        id
    };

    return fetch({
        url: '/trade-app/ops/opsSysUserController/queryOpsSysUserInfo',
        method: 'post',
        data
    });
};

export const addUser = (params) => {
    const data = {
        login_name: params.login_name,
        nick_name: params.nick_name,
        real_name: params.real_name,
        role_code_list: params.role_code_list,
        phone_no: params.phone_no,
        remarks: params.remarks
    };

    return fetch({
        url: '/trade-app/ops/opsSysUserController/insertOpsSysUserDO',
        method: 'post',
        data
    });
};

export const delUser = (user_no_list) => {
    const data = {
        user_no_list
    };

    return fetch({
        url: '/trade-app/ops/opsSysUserController/deleteOpsSysUserDOList',
        method: 'post',
        data
    });
};

export const updateUser = (data) => {
    return fetch({
        // todo
        url: '/trade-app/ops/opsSysUserController/updateOpsSysUserDO',
        method: 'post',
        data
    });
};

export const getRoleList = (params) => {
    const data = {
        role_name: params.role_name,
        role_type: params.role_type,
        page_no: params.page_no,
        page_size: params.page_size
    };

    return fetch({
        url: '/trade-app/ops/opsSysRoleController/queryOpsSysRoleDOList',
        method: 'post',
        data
    });
};

export const getRoleInfo = (id) => {
    const data = {
        id
    };

    return fetch({
        url: '/trade-app/ops/opsSysRoleController/queryOpsSysRoleInfo',
        method: 'post',
        data
    });
};

export const addRole = (params) => {
    const data = {
        remarks: params.remarks,
        role_name: params.role_name,
        status: params.status,
        menu_code_list: params.menu_code_list,
        menus: params.menus
    };

    return fetch({
        url: '/trade-app/ops/opsSysRoleController/insertOpsSysRoleDO',
        method: 'post',
        data
    });
};

export const delRole = (role_code_list) => {
    const data = {
        role_code_list
    };

    return fetch({
        url: '/trade-app/ops/opsSysRoleController/deleteOpsSysRoleDOList',
        method: 'post',
        data
    });
};

export const updateRole = (data) => {
    return fetch({
        // todo
        url: '/trade-app/ops/opsSysRoleController/updateOpsSysRoleDO',
        method: 'post',
        data
    });
};

export const getMenuList = (params) => {
    const data = {
        menu_code: params.menu_code,
        menu_name: params.menu_name,
        page_no: params.page_no,
        page_size: params.page_size
    };

    return fetch({
        url: '/trade-app/ops/opsSysMenuController/queryOpsSysMenuDOList',
        method: 'post',
        data
    });
};

export const addMenu = (params) => {
    const data = {
        menu_name: params.menu_name,
        menu_type: params.menu_type,
        parent_code: params.parent_code,
        parent_name: params.parent_name,
        menu_path: params.menu_path,
        menu_url: params.menu_url,
        status: params.status
    };

    return fetch({
        url: '/trade-app/ops/opsSysMenuController/insertOpsSysMenuDO',
        method: 'post',
        data
    });
};

export const delMenu = (menu_code_list) => {
    const data = {
        menu_code_list
    };

    return fetch({
        url: '/trade-app/ops/opsSysMenuController/deleteOpsSysMenuDOList',
        method: 'post',
        data
    });
};

export const updateMenu = (params) => {
    const data = {
        id: params.id,
        menu_name: params.menu_name,
        menu_type: params.menu_type,
        parent_code: params.parent_code,
        menu_path: params.menu_path,
        menu_url: params.menu_url
    };

    return fetch({
        // todo
        url: '/trade-app/ops/opsSysMenuController/updateOpsSysMenuDO',
        method: 'post',
        data
    });
};
