/*
* vuex的mutation模块（包含N个直接更新状态数据方法的对象）
* */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
  /*[RECEIVE_SEARCHSHOPS](state,{searchShops}){
    state.searchShops = searchShops
  }*/
  [RECEIVE_USER] (state,{user}){
    state.user = user
  },
  [RESET_USER] (state){
    state.user = {}
  },
  [RECEIVE_GOODS] (state,{goods}){
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state,{ratings}){
    state.ratings = ratings
  },
  [RECEIVE_INFO] (state,{info}){
    state.info = info
  },
  [INCREMENT_FOOD_COUNT] (state,{food}) {
    if (food.count) {
      food.count++
    }else {
      Vue.set(food,'count',1)
      state.cartFoods.push(food)
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if (food.count){
      food.count--
      if (food.count === 0){
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
  [CLEAR_CART] (state) {
    //将购物车中的food清零
    state.cartFoods.forEach(food => food.count = 0)
    //重置cartFoods
    state.cartFoods = []
  }

}
