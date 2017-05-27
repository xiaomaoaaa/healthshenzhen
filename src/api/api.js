import axios from 'axios';
let base = '/proxyapi/'; //开发用
// let base = 'http://115.236.19.146:48023/shenzhen';//生成的时候用
// 登录页选择机构
export const requestOrgList = params => {
	return axios.post(`${base}/api/doctor/common/region`, {}, params)
};