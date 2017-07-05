/**
 * Created by gongyuqi on 2017/5/10.
 */

const Layout = () => import('../views/dashboard/index.vue');

const Login = () => import('../views/login/index.vue');
const Error404 = () => import('../views/error/404.vue');
const Error500 = () => import('../views/error/500.vue');
const Error401 = () => import('../views/error/401.vue');
const defaultDashboard = () => import('../views/dashboard/default/index.vue');

const Customer = () => import('../views/information/customer.vue');
const Interest = () => import('../views/information/interest.vue');
const LoanInfo = () => import('../views/information/loan.vue');
const Loanstatus = () => import('../views/information/loanstatus.vue');
const RefundInfo = () => import('../views/information/refund.vue');
const Repayment = () => import('../views/information/repayment.vue');

const Rights = () => import('../views/rights/roles.vue');
const Users = () => import('../views/rights/users.vue');
const Menus = () => import('../views/rights/menus.vue');

const Confirm = () => import('../views/funds/confirm.vue');
const Loan = () => import('../views/funds/loan.vue');
const Checking = () => import('../views/funds/checking.vue');

const reClaims = () => import('../views/report/claims.vue');
const reCapital = () => import('../views/report/capital.vue');
const reLoan = () => import('../views/report/loan.vue');
const reAccrual = () => import('../views/report/accrual.vue');

const operSysEvents = () => import('../views/operation/systemevent.vue');

const sysMerchants = () => import('../views/system/merchants.vue');
const sysAutotask = () => import('../views/system/autotask.vue');

const Download = () => import('../views/ftp/download.vue');

const Pwd = () => import('../views/settings/pwd.vue');
const Account = () => import('../views/settings/account.vue');

const routes = {
    constant: [
        {path: '/login', component: Login, menu: false, hidden: true},
        {path: '/401', component: Error401, menu: false, hidden: true},
        {path: '/404', component: Error404, menu: false, hidden: true},
        {path: '/500', component: Error500, menu: false, hidden: true},
        {
            path: '/',
            component: Layout,
            redirect: '/dashboard',
            name: '首页',
            menu: false,
            hidden: true,
            children: [
                {path: 'dashboard', component: defaultDashboard, meta: {requiresAuth: true}}
            ]
        }
    ],
    async: [
        {
            path: '/information',
            component: Layout,
            redirect: '/information/customer',
            name: '信息查询',
            icon: 'fa-users',
            children: [
                {path: 'customer', component: Customer, name: '借款人信息', meta: {requiresAuth: true}},
                {path: 'loan', component: LoanInfo, name: '借款信息', meta: {requiresAuth: true}},
                {path: 'refund', component: RefundInfo, name: '还款信息', meta: {requiresAuth: true}},
                {path: 'repayment', component: Repayment, name: '还款计划', meta: {requiresAuth: true}},
                {path: 'loanstatus', component: Loanstatus, name: '贷款状态', meta: {requiresAuth: true}},
                {path: 'interest', component: Interest, name: '日息计提', meta: {requiresAuth: true}}
            ]
        },
        {
            path: '/funds',
            component: Layout,
            redirect: '/funds/loan',
            name: '资金管理',
            icon: 'fa-bank',
            children: [
                {path: 'loan', component: Loan, name: '放款交易', meta: {requiresAuth: true}},
                {path: 'checking', component: Checking, name: '对账结果', meta: {requiresAuth: true}},
                {path: 'confirm', component: Confirm, name: '资金确认', meta: {requiresAuth: true}}
            ]
        },
        {
            path: '/report',
            component: Layout,
            redirect: '/report/loan',
            name: '报表管理',
            icon: 'fa-pie-chart',
            children: [
                {path: 'loan', component: reLoan, name: '借款总额报表', meta: {requiresAuth: true}},
                {path: 'capital', component: reCapital, name: '还款本金总额报表', meta: {requiresAuth: true}},
                {path: 'accrual', component: reAccrual, name: '还款利息总额报表', meta: {requiresAuth: true}},
                {path: 'claims', component: reClaims, name: '理赔流水报表', meta: {requiresAuth: true}}
            ]
        },
        {
            path: '/operation',
            component: Layout,
            redirect: '/operation/events',
            name: '运营预警',
            icon: 'fa-bug fa-lg',
            children: [
                {path: 'events', component: operSysEvents, name: '系统事件', meta: {requiresAuth: true}}
            ]
        },
        {
            path: '/ftp',
            component: Layout,
            redirect: '/ftp/download',
            name: 'FTP下载',
            icon: 'fa-cloud-download',
            multiple: true,
            children: [
                {path: 'download', component: Download, name: '文件列表', meta: {requiresAuth: true}}
            ]
        },
        {
            path: '/system',
            component: Layout,
            redirect: '/system/merchants',
            name: '系统管理',
            icon: 'fa-cogs',
            children: [
                {path: 'merchants', component: sysMerchants, name: '商户配置', meta: {requiresAuth: true}},
                {path: 'autotask', component: sysAutotask, name: '自动任务配置', meta: {requiresAuth: true}}
            ]
        },
        {
            path: '/rights',
            component: Layout,
            redirect: '/rights/users',
            name: '权限管理',
            icon: 'fa-user-secret fa-lg',
            meta: {role: ['super', 'admin']},
            children: [
                {path: 'users', component: Users, name: '用户列表', meta: {requiresAuth: true, role: ['super', 'admin']}},
                {path: 'roles', component: Rights, name: '角色列表', meta: {requiresAuth: true, role: ['super', 'admin']}},
                {path: 'menus', component: Menus, name: '菜单列表', meta: {requiresAuth: true, role: ['super', 'admin']}}
            ]
        },
        {
            path: '/profile',
            component: Layout,
            redirect: '/profile/account',
            name: '设置',
            menu: false,
            icon: 'fa-wrench fa-lg',
            children: [
                {path: 'account', component: Account, name: '用户信息', meta: {requiresAuth: true}},
                {path: 'pwd', component: Pwd, name: '修改密码', meta: {requiresAuth: true}}
            ]
        },
        {path: '*', redirect: '/404', hidden: true}
    ]
};

export default routes;
