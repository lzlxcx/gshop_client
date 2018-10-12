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
export const reqSearchShops = (geohash,keyword) => ajax('/api/search_shops',{geohash,keyword})
