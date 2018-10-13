/*
* 后台交互模块
* */
import ajax from './ajax'

//根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax('/api/position/'+geohash)
//获取食品分类列表
export const reqFoodCategorys = () => ajax('/api/index_category')
//获取商铺列表
export const reqShops = (longitude,latitude) => ajax('/api/shops',{latitude,longitude})
//根据经纬度和关键字搜索商铺列表
/*export const reqSearchShops = (geohash,keyword) => ajax('/api/search_shops',{geohash,keyword})*/
//获取去短信验证码
export const reqSendCode = (phone) => ajax('/api/sendcode',{phone})
//账号密码登录
export const reqPwdLogin = ({name,pwd,captcha}) => ajax('/api/login_pwd',{name,pwd,captcha},'POST')
//手机号验证码登录
export const reqSmsLogin = (phone,code) => ajax('/api/login_sms',{phone,code},'POST')
//获取用户信息
export const reqUser = () =>ajax('/api/userinfo')
//退出登录
export const reqLogout = () => ajax('/api/logout')
