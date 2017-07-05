/**
 * Created by gongyuqi on 2017/5/12.
 */
const getters = {
    sidebar: state => state.app.sidebar,
    routers: state => state.app.routers,
    addRouters: state => state.app.addRouters,
    serverError: state => state.app.serverError,
    userid: state => state.user.userid,
    userno: state => state.user.userno,
    roles: state => state.user.roles,
    status: state => state.user.status,
    token: state => state.user.token,
    account: state => state.user.account,
    nickname: state => state.user.nickname,
    realname: state => state.user.realname,
    email: state => state.user.email,
    phone: state => state.user.phone,
    roleall: state => state.user.roleall,
    menus: state => state.user.menus,
    access: state => state.user.access
};
export default getters
