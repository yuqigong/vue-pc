/**
 * Created by gongyuqi on 2017/6/6.
 */
import Mock from 'mockjs'

const count = 10;
const [user, role, menu] = [[], [], []];

for (let i = 0; i < count; i++) {
    user.push(Mock.mock({
        'creator|1': ['SYSTEM', 'SUPER', 'ADMIN'],
        email: '@email',
        gmtCreated: +Mock.Random.date('T'),
        gmtModified: +Mock.Random.date('T'),
        id: '@natural(20, 500)',
        'roleName|1': ['超级管理员', '管理员', '普通用户'],
        'roleCode|1': ['super', 'admin', 'user'],
        loginName: '@email',
        loginPwd: '@word(6)',
        modifier: '@email',
        nickName: '@cword(5)',
        'phoneNo|1': ['13366666666', '13988888888', '18833333333'],
        realName: '@cname',
        'roles|1': ['user', 'admin', 'user1'],
        remarks: null,
        resvFld1: null,
        resvFld2: null,
        salt: null,
        'status|1': ['1', '0'],
        userNo: Mock.Random.now('yyyyMMddHHmmssSS')
    }));
    role.push(Mock.mock({
        'creator|1': ['SYSTEM', 'SUPER', 'ADMIN'],
        gmtCreated: +Mock.Random.date('T'),
        gmtModified: +Mock.Random.date('T'),
        id: '@natural(20, 500)',
        modifier: "SYSTEM",
        priority: 1,
        remarks: '@ctitle(10)',
        resvFld1: null,
        resvFld2: null,
        'roleCode|1': ['user', 'admin', 'user1'],
        'roleName|1': ['管理员', '普通用户', '超级管理员'],
        'rolePermession|1': ['1', '2', '0'],
        'status|1': ['1', '0'],
        choose: [1, 2],
        menus: [{
            id: 1,
            code: '201706051226145',
            label: '客户查询',
            children: [{
                id: 4,
                code: '201706051226145',
                label: '客户列表'
            }]
        }, {
            id: 2,
            code: '201706051226145',
            label: '资金管理',
            children: [{
                id: 5,
                code: '201706051226145',
                label: '借款'
            }, {
                id: 6,
                code: '201706051226145',
                label: '还款'
            }, {
                id: 7,
                code: '201706051226145',
                label: '对账'
            }]
        }]
    }));
    menu.push(Mock.mock({
        'creator|1': ['SYSTEM', 'SUPER', 'ADMIN'],
        gmtCreated: +Mock.Random.date('T'),
        gmtModified: +Mock.Random.date('T'),
        id: '@natural(20, 500)',
        menuCode: Mock.Random.now('yyyyMMddHHmmssSS'),
        menuName: '@cword(5)',
        menuPath: '@url',
        'menuType|1': ['1', '0'],
        menuUrl: '@url',
        modifier: "admin@example.com",
        parentCode: "0",
        parentName: '@cword(5)',
        remarks: null,
        resvFld1: null,
        resvFld2: null,
        'status|1': ['1', '0']
    }));
}

const userList = {
    "message": "成功",
    "code": "0000",
    "data": {
        "tableHead": [
            {
                "id": "主键"
            },
            {
                "userNo": "用户名"
            },
            {
                "loginName": "登录名"
            },
            {
                "nickName": "昵称"
            },
            {
                "realName": "真实名称"
            },
            {
                "email": "邮箱"
            },
            {
                "phoneNo": "手机"
            },
            {
                "status": "状态"
            },
            {
                "creator": "创建人"
            },
            {
                "gmtCreated": "创建时间"
            },
            {
                "modifier": "修改人"
            },
            {
                "gmtModified": "修改时间"
            },
            {
                "remarks": "备注"
            }
        ],
        "page": {
            "totalRecord": user.length,
            "totalPage": 10
        },
        "currentPageList": user
    }
};

const userInfo = {
    "message": "成功",
    "data": {
        "id": 104,
        "loginName": "admin4@example.com",
        "menus": [{
            id: 1,
            code: '201706051226145',
            label: '客户查询',
            children: [{
                id: 4,
                code: '201706051226145',
                label: '客户列表'
            }]
        }, {
            id: 2,
            code: '201706051226145',
            label: '资金管理',
            children: [{
                id: 5,
                code: '201706051226145',
                label: '借款'
            }, {
                id: 6,
                code: '201706051226145',
                label: '还款'
            }, {
                id: 7,
                code: '201706051226145',
                label: '对账'
            }]
        }, {
            id: 3,
            code: '201706051226145',
            label: '报表管理',
            children: [{
                id: 8,
                code: '201706051226145',
                label: '借款总额报表'
            }, {
                id: 9,
                code: '201706051226145',
                label: '还款本金总额报表'
            }, {
                id: 10,
                code: '201706051226145',
                label: '还款利息总额报表'
            }, {
                id: 11,
                code: '201706051226145',
                label: '理赔流水报表'
            }]
        }, {
            id: 4,
            code: '201706051226145',
            label: '结算管理',
            children: [{
                id: 12,
                code: '201706051226145',
                label: '借款确认'
            }, {
                id: 13,
                code: '201706051226145',
                label: '还款确认'
            }, {
                id: 14,
                code: '201706051226145',
                label: '理赔确认'
            }]
        }],
        "nickName": "admin3@example.com",
        "opsSysRoleDOList": [
            {
                "creator": "admin@example.com",
                "gmtCreated": 1496635285610,
                "gmtModified": 1496635285610,
                "id": 105,
                "modifier": "admin@example.com",
                "priority": 1,
                "remarks": null,
                "resvFld1": null,
                "resvFld2": null,
                "roleCode": "user",
                "roleName": "普通用户",
                "rolePermession": "1",
                "status": "1"
            }
        ],
        "realName": "admin3@example.com",
        "roles": null,
        "status": "1",
        "userNo": "201706052020031"
    },
    "code": "0000"
};

const roleList = {
    "message": "成功",
    "code": "0000",
    "data": {
        "tableHead": [
            {
                "id": "主键"
            },
            {
                "roleCode": "角色编码"
            },
            {
                "roleName": "角色名称"
            },
            {
                "status": "状态"
            },
            {
                "rolePermession": "角色权限"
            },
            {
                "creator": "创建人"
            },
            {
                "gmtCreated": "创建时间"
            },
            {
                "modifier": "修改人"
            },
            {
                "gmtModified": "修改时间"
            },
            {
                "remarks": "备注"
            }
        ],
        "page": {
            "totalRecord": role.length,
            "totalPage": 10
        },
        "currentPageList": role
    }
};

const roleInfo = {
    "message": "成功",
    "data": {
        "creator": "SYSTEM",
        "gmtCreated": 1496666158842,
        "gmtModified": 1496666158842,
        "id": 109,
        "modifier": "SYSTEM",
        "opsSysMenuDOList": [
            {
                "creator": "admin@example.com",
                "gmtCreated": 1496636774472,
                "gmtModified": 1496636977025,
                "id": 100,
                "menuCode": "201706051226145",
                "menuName": "菜单名称11111",
                "menuPath": "/operation/system",
                "menuType": "1",
                "menuUrl": "opsSysMenuController/saveOpsSysMenuDO",
                "modifier": "admin@example.com",
                "parentCode": "0",
                "remarks": null,
                "resvFld1": null,
                "resvFld2": null,
                "status": "1"
            }
        ],
        "priority": 1,
        "remarks": null,
        "resvFld1": null,
        "resvFld2": null,
        "roleCode": "user123",
        "roleName": "普通用户",
        "rolePermession": "1",
        "status": "1"
    },
    "code": "0000"
};

const menuList = {
    "message": "成功",
    "data": {
        "tableHead": [
            {
                "id": "主键"
            },
            {
                "menuCode": "菜单编码"
            },
            {
                "menuName": "菜单名称"
            },
            {
                "menuPath": "菜单链接"
            },
            {
                "menuUrl": "菜单URL"
            },
            {
                "menuType": "菜单类型"
            },
            {
                "parentCode": "父级菜单编码"
            },
            {
                "status": "状态"
            },
            {
                "creator": "创建人"
            },
            {
                "gmtCreated": "创建时间"
            },
            {
                "modifier": "修改人"
            },
            {
                "gmtModified": "修改时间"
            },
            {
                "remarks": "备注"
            }
        ],
        "page": {
            "totalRecord": menu.length,
            "totalPage": 10
        },
        "currentPageList": menu
    },
    "code": "0000"
};

const success = {
    "message": "成功",
    "code": "0000",
    "data": {}
};

const failure = {
    "message": "失败",
    "code": "9999",
    "data": ""
};

export default {
    getUserList: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##getUserList##' + confs);

        if (confs) {
            return userList;
        }
        return failure;
    },
    getUserInfo: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##getUserInfo##' + confs);

        if (confs) {
            return userInfo;
        }
        return failure;
    },
    addUser: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##addUser##' + confs);

        if (confs) {
            return success;
        }
        return failure;

    },
    delUser: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##delUser##' + confs);

        if (confs.user_no_list instanceof Array) {
            return success;
        }
        return failure;
    },
    updateUser: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##updateUser##' + confs);

        if (confs) {
            return success;
        }
        return failure;
    },
    getRoleList: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##getRoleList##' + confs);

        if (confs) {
            return roleList;
        }
        return failure;
    },
    getRoleInfo: () => {
        const confs = JSON.parse(config.body);
        console.log('##getRoleInfo##' + confs);

        if (confs) {
            return roleInfo;
        }
        return failure;
    },
    addRole: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##addRole##' + confs);

        if (confs) {
            return success;
        }
        return failure;

    },
    delRole: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##delRole##' + confs);

        if (confs.role_code_list instanceof Array) {
            return success;
        }
        return failure;
    },
    updateRole: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##updateRole##' + confs);

        if (confs) {
            return success;
        }
        return failure;
    },
    getMenuList: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##getMenuList##' + confs);

        if (confs) {
            return menuList;
        }
        return failure;
    },
    addMenu: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##addMenu##' + confs);

        if (confs) {
            return success;
        }
        return failure;

    },
    delMenu: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##delMenu##' + confs);

        if (confs.menu_code_list instanceof Array) {
            return success;
        }
        return failure;
    },
    updateMenu: (config) => {
        const confs = JSON.parse(config.body);
        console.log('##updateMenu##' + confs);

        if (confs) {
            return success;
        }
        return failure;
    }
};
