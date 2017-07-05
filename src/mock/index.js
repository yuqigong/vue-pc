/**
 * Created by gongyuqi on 2017/5/17.
 */
import Mock from 'mockjs'
import loginAPI from './login'
import rightsAPI from './rights'
import operationAPI from './operation'
import fundsAPI from './funds'
import informationAPI from './information'
import systemAPI from './system'

debugger

Mock.mock(/\/trade-app\/ops\/opsSysUserController\/login/, 'post', loginAPI.login);
Mock.mock(/\/trade-app\/ops\/opsSysUserController\/logout/, 'post', loginAPI.logout);
Mock.mock(/\/trade-app\/ops\/opsSysUserController\/queryLoginUserInfo/, 'post', loginAPI.getLoginInfo);

Mock.mock(/\/trade-app\/ops\/opsSysUserController\/queryOpsSysUserDOList/, 'post', rightsAPI.getUserList);
Mock.mock(/\/trade-app\/ops\/opsSysUserController\/queryOpsSysUserInfo/, 'post', rightsAPI.getUserInfo);
Mock.mock(/\/trade-app\/ops\/opsSysUserController\/insertOpsSysUserDO/, 'post', rightsAPI.addUser);
Mock.mock(/\/trade-app\/ops\/opsSysUserController\/deleteOpsSysUserDOList/, 'post', rightsAPI.delUser);
Mock.mock(/\/trade-app\/ops\/opsSysUserController\/updateOpsSysUserDO/, 'post', rightsAPI.updateUser);

Mock.mock(/\/trade-app\/ops\/opsSysRoleController\/queryOpsSysRoleDOList/, 'post', rightsAPI.getRoleList);
Mock.mock(/\/trade-app\/ops\/opsSysRoleController\/insertOpsSysRoleDO/, 'post', rightsAPI.addRole);
Mock.mock(/\/trade-app\/ops\/opsSysRoleController\/deleteOpsSysRoleDOList/, 'post', rightsAPI.delRole);
Mock.mock(/\/trade-app\/ops\/opsSysRoleController\/updateOpsSysRoleDO/, 'post', rightsAPI.updateRole);

Mock.mock(/\/trade-app\/ops\/opsSysMenuController\/queryOpsSysMenuDOList/, 'post', rightsAPI.getMenuList);
Mock.mock(/\/trade-app\/ops\/opsSysMenuController\/insertOpsSysMenuDO/, 'post', rightsAPI.addMenu);
Mock.mock(/\/trade-app\/ops\/opsSysMenuController\/deleteOpsSysMenuDOList/, 'post', rightsAPI.delMenu);
Mock.mock(/\/trade-app\/ops\/opsSysMenuController\/updateOpsSysMenuDO/, 'post', rightsAPI.updateMenu);

Mock.mock(/\/trade-app\/ops\/opsRunningEventController\/queryOpsRunningEventDOList/, 'post', operationAPI.getSysOperationEvents);
Mock.mock(/\/trade-app\/ops\/opsRunningEventController\/updateOpsRunningEvent/, 'post', operationAPI.updateSysOperationEvent);

Mock.mock(/\/trade-app\/ops\/opsFinanceConfirmController\/queryOpsFinanceConfirmDOList/, 'post', fundsAPI.getFundsConfirmList);
Mock.mock(/\/trade-app\/ops\/opsFinanceConfirmController\/updateOpsFinanceConfirmList/, 'post', fundsAPI.updateFundsConfirmList);
Mock.mock(/\/trade-app\/ops\/opsCwTransferController\/queryOpsCwTransferDOList/, 'post', fundsAPI.getFundsLoanList);
Mock.mock(/\/trade-app\/ops\/opsCwTransferAccountController\/queryOpsCwTransferAccountDOList/, 'post', fundsAPI.getFundsCheckingList);

Mock.mock(/\/trade-app\/ops\/opsScmsCustController\/queryOpsScmsCustDOList/, 'post', informationAPI.getCustomerList);
Mock.mock(/\/trade-app\/ops\/opsScmsCustController\/queryOpsScmsCustDetail/, 'post', informationAPI.getCustomerInfo);
Mock.mock(/\/trade-app\/ops\/opsScmsLnController\/queryOpsScmsLnDOList/, 'post', informationAPI.getLoanList);
Mock.mock(/\/trade-app\/ops\/opsScmsStsController\/queryOpsScmsStsDOList/, 'post', informationAPI.getLoanStatusList);
Mock.mock(/\/trade-app\/ops\/opsScmsIntCtController\/queryOpsScmsIntCtDOList/, 'post', informationAPI.getInterestList);

Mock.mock(/\/trade-app\/ops\/opsSrcsysCdController\/queryOpsSrcsysCdDOList/, 'post', systemAPI.getMerchantsList);

export default Mock
