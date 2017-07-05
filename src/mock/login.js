/**
 * Created by gongyuqi on 2017/5/17.
 */
import store from '../store'

const users = {
    super: {
        "code": "0000",
        "data": {
            "creator": "",
            "email": "",
            "gmtCreated": null,
            "gmtModified": null,
            "id": 123,
            "loginName": "abc",
            "loginPwd": "6524fee603d437060cdd1791f7227dbf",
            "menus": [
                {
                    "children": [
                        {
                            "children": [],
                            "code": "201706131720049",
                            "id": "117",
                            "label": "系统事件",
                            "parentCode": "201706130905397",
                            "route": "/operation/events"
                        }
                    ],
                    "code": "201706130905397",
                    "id": "110",
                    "label": "运营预警",
                    "parentCode": "0",
                    "route": "/operation"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "code": "12",
                            "id": "19",
                            "label": "借款查询",
                            "parentCode": "1",
                            "route": "/information/loan"
                        },
                        {
                            "children": [],
                            "code": "13",
                            "id": "119",
                            "label": "借款状态",
                            "parentCode": "1",
                            "route": "/information/loanstatus"
                        },
                        {
                            "children": [],
                            "code": "16",
                            "id": "122",
                            "label": "还款信息",
                            "parentCode": "1",
                            "route": "/information/refund"
                        },
                        {
                            "children": [],
                            "code": "14",
                            "id": "123",
                            "label": "还款计划",
                            "parentCode": "1",
                            "route": "/information/repayment"
                        },
                        {
                            "children": [],
                            "code": "15",
                            "id": "124",
                            "label": "日息即提",
                            "parentCode": "1",
                            "route": "/information/interest"
                        },
                        {
                            "children": [],
                            "code": "11",
                            "id": "2",
                            "label": "客户信息",
                            "parentCode": "1",
                            "route": "/information/customer"
                        }
                    ],
                    "code": "1",
                    "id": "1",
                    "label": "信息查询",
                    "parentCode": "0",
                    "route": "/information"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "code": "201706131709211",
                            "id": "115",
                            "label": "用户信息",
                            "parentCode": "201706130924225",
                            "route": "/profile/account"
                        },
                        {
                            "children": [],
                            "code": "201706131709562",
                            "id": "116",
                            "label": "修改密码",
                            "parentCode": "201706130924225",
                            "route": "/profile/pwd"
                        }
                    ],
                    "code": "201706130924225",
                    "id": "111",
                    "label": "设置",
                    "parentCode": "0",
                    "route": "/profile"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "code": "22",
                            "id": "17",
                            "label": "对账结果",
                            "parentCode": "2",
                            "route": "/funds/checking"
                        },
                        {
                            "children": [],
                            "code": "23",
                            "id": "18",
                            "label": "放款交易",
                            "parentCode": "2",
                            "route": "/funds/loan"
                        },
                        {
                            "children": [],
                            "code": "21",
                            "id": "4",
                            "label": "资金确认",
                            "parentCode": "2",
                            "route": "/funds/confirm"
                        }
                    ],
                    "code": "2",
                    "id": "3",
                    "label": "资金管理",
                    "parentCode": "0",
                    "route": "/funds"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "code": "31",
                            "id": "6",
                            "label": "用户列表",
                            "parentCode": "3",
                            "route": "/rights/users"
                        },
                        {
                            "children": [],
                            "code": "32",
                            "id": "7",
                            "label": "角色列表",
                            "parentCode": "3",
                            "route": "/rights/roles"
                        },
                        {
                            "children": [],
                            "code": "33",
                            "id": "8",
                            "label": "菜单列表",
                            "parentCode": "3",
                            "route": "/rights/menus"
                        }
                    ],
                    "code": "3",
                    "id": "5",
                    "label": "权限管理",
                    "parentCode": "0",
                    "route": "/rights"
                }
            ],
            "modifier": "",
            "nickName": "貂蝉",
            "phoneNo": "1398888888",
            "realName": "貂蝉",
            "remarks": "",
            "resvFld1": "",
            "resvFld2": "",
            "roleAll": [
                {
                    "roleName": "超级管理员",
                    "roleCode": "super"
                },
                {
                    "roleName": "管理员",
                    "roleCode": "201706231600495"
                },
                {
                    "roleName": "普通用户",
                    "roleCode": "201706231602009"
                }
            ],
            "roleCode": "",
            "roleName": "",
            "roles": [
                "super"
            ],
            "salt": "",
            "status": "1",
            "userNo": "201706211410190"
        },
        "message": "成功"
    },
    admin: {
        "code": "0000",
        "data": {
            "id": 106,
            "loginName": "admin@example.com",
            "loginPwd": "eb504b8f063c2fd6919af0f1e4990c42",
            "menus": [
                {
                    "children": [
                        {
                            "code": "201706131720049",
                            "id": "117",
                            "label": "系统事件",
                            "parentCode": "201706130905397",
                            "route": "/operation/events"
                        }
                    ],
                    "code": "201706130905397",
                    "id": "110",
                    "label": "运营预警",
                    "parentCode": "0",
                    "route": "/operation"
                },
                {
                    "children": [
                        {
                            "code": "11",
                            "id": "2",
                            "label": "客户列表",
                            "parentCode": "1",
                            "route": "/information/search"
                        }
                    ],
                    "code": "1",
                    "id": "1",
                    "label": "客户查询",
                    "parentCode": "0",
                    "route": "/information"
                },
                {
                    "children": [
                        {
                            "code": "201706131709211",
                            "id": "115",
                            "label": "用户信息",
                            "parentCode": "201706130924225",
                            "route": "/profile/account"
                        },
                        {
                            "code": "201706131709562",
                            "id": "116",
                            "label": "修改密码",
                            "parentCode": "201706130924225",
                            "route": "/profile/pwd"
                        }
                    ],
                    "code": "201706130924225",
                    "id": "111",
                    "label": "设置",
                    "parentCode": "0",
                    "route": "/profile"
                },
                {
                    "children": [
                        {
                            "code": "201706131703033",
                            "id": "114",
                            "label": "借款确认",
                            "parentCode": "201706131700475",
                            "route": "/settlement/loan"
                        }
                    ],
                    "code": "201706131700475",
                    "id": "113",
                    "label": "结算管理",
                    "parentCode": "0",
                    "route": "/settlement"
                },
                {
                    "children": [
                        {
                            "code": "21",
                            "id": "4",
                            "label": "资金确认",
                            "parentCode": "2",
                            "route": "/funds/confirm"
                        }
                    ],
                    "code": "2",
                    "id": "3",
                    "label": "资金管理",
                    "parentCode": "0",
                    "route": "/funds"
                },
                {
                    "children": [
                        {
                            "code": "31",
                            "id": "6",
                            "label": "用户列表",
                            "parentCode": "3",
                            "route": "/rights/users"
                        },
                        {
                            "code": "32",
                            "id": "7",
                            "label": "角色列表",
                            "parentCode": "3",
                            "route": "/rights/roles"
                        },
                        {
                            "code": "33",
                            "id": "8",
                            "label": "菜单列表",
                            "parentCode": "3",
                            "route": "/rights/menus"
                        }
                    ],
                    "code": "3",
                    "id": "5",
                    "label": "权限管理",
                    "parentCode": "0",
                    "route": "/rights"
                }
            ],
            "nickName": "大乔",
            "phoneNo": "13388888888",
            "realName": "大乔",
            "roleAll": [
                {
                    "roleName": "管理员",
                    "roleCode": "201706122244340"
                },
                {
                    "roleName": "普通用户",
                    "roleCode": "201706131732325"
                },
                {
                    "roleName": "超级管理员",
                    "roleCode": "super"
                }
            ],
            "roles": [
                "super"
            ],
            "status": "1",
            "userNo": "121"
        },
        "message": "成功"
    },
    user: {
        "code": "0000",
        "data": {
            "id": 106,
            "loginName": "user@example.com",
            "loginPwd": "eb504b8f063c2fd6919af0f1e4990c42",
            "menus": [
                {
                    "children": [
                        {
                            "code": "201706131720049",
                            "id": "117",
                            "label": "系统事件",
                            "parentCode": "201706130905397",
                            "route": "/operation/events"
                        }
                    ],
                    "code": "201706130905397",
                    "id": "110",
                    "label": "运营预警",
                    "parentCode": "0",
                    "route": "/operation"
                },
                {
                    "children": [
                        {
                            "code": "11",
                            "id": "2",
                            "label": "客户列表",
                            "parentCode": "1",
                            "route": "/information/customer"
                        }
                    ],
                    "code": "1",
                    "id": "1",
                    "label": "客户查询",
                    "parentCode": "0",
                    "route": "/information"
                },
                {
                    "children": [
                        {
                            "code": "201706131709211",
                            "id": "115",
                            "label": "用户信息",
                            "parentCode": "201706130924225",
                            "route": "/profile/account"
                        },
                        {
                            "code": "201706131709562",
                            "id": "116",
                            "label": "修改密码",
                            "parentCode": "201706130924225",
                            "route": "/profile/pwd"
                        }
                    ],
                    "code": "201706130924225",
                    "id": "111",
                    "label": "设置",
                    "parentCode": "0",
                    "route": "/profile"
                },
                {
                    "children": [
                        {
                            "code": "201706131703033",
                            "id": "114",
                            "label": "借款确认",
                            "parentCode": "201706131700475",
                            "route": "/settlement/loan"
                        }
                    ],
                    "code": "201706131700475",
                    "id": "113",
                    "label": "结算管理",
                    "parentCode": "0",
                    "route": "/settlement"
                },
                {
                    "children": [
                        {
                            "code": "21",
                            "id": "4",
                            "label": "资金确认",
                            "parentCode": "2",
                            "route": "/funds/confirm"
                        }
                    ],
                    "code": "2",
                    "id": "3",
                    "label": "资金管理",
                    "parentCode": "0",
                    "route": "/funds"
                }
            ],
            "nickName": "周瑜",
            "phoneNo": "13388888888",
            "realName": "周瑜",
            "roleAll": [
                {
                    "roleName": "管理员",
                    "roleCode": "201706122244340"
                },
                {
                    "roleName": "普通用户",
                    "roleCode": "201706131732325"
                },
                {
                    "roleName": "超级管理员",
                    "roleCode": "super"
                }
            ],
            "roles": [
                "user"
            ],
            "status": "1",
            "userNo": "121"
        },
        "message": "成功"
    }
};

const logins = {
    super: {
        message: '成功',
        code: '0000',
        data: {
            token: 'super'
        }
    },
    admin: {
        message: '成功',
        code: '0000',
        data: {
            token: 'admin'
        }
    },
    user: {
        message: '成功',
        code: '0000',
        data: {
            token: 'user'
        }
    }
};

const logouts = {
    super: {
        code: '0000',
        message: '成功',
        data: null
    },
    admin: {
        code: '0000',
        message: '成功',
        data: null
    },
    user: {
        code: '0000',
        message: '成功',
        data: null
    }
};

export default {
    login: (config) => {
        const {login_name} = JSON.parse(config.body);
        return logins[login_name.split('@')[0]];
    },
    getLoginInfo: () => {
        return users[store.getters.token]
    },
    logout: () => {
        return logouts[store.getters.token];
    }
};
