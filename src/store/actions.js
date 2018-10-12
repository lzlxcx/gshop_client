/*
* vuex的actions模块
* */
import {reqAddress,reqFoodCategorys,reqShops,reqSearchShops} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_SEARCHSHOPS
} from './mutation-types'

export default {
  //异步获取地址
  async getAddress({commit,state}){
    const {latitude,longitude} = state
    const result = await reqAddress(latitude+','+longitude)
    if (result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取分类列表
  async getCategorys({commit}){
    const result = await reqFoodCategorys()
    if (result.code===0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})

    }
  },
  //异步获取商家列表
  async getShops({commit,state}){
    const {latitude,longitude} = state
    const result = await reqShops(longitude,latitude)
    if (result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  //异步根据经纬度和关键字搜索商家列表
  async getSearchShops({commit,state},keyword){
    const {latitude,longitude} = state
    const result = await reqSearchShops(latitude+','+longitude,keyword)
    if (result.code ===0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCHSHOPS,{searchShops})
    }
  }
}
