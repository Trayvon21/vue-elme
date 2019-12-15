import axios from '../http'
import { SET_LONGITUDE, SET_LATITUDE, SET_ADDRESS, SET_SHOPS, SET_LIST }
from './mutation-types'
export default {
    //axios请求，获取轮播图
    async getList({ commit, dispatch }) {
        let res = await axios.req("/v2/index_entry")
        commit(SET_LIST, res)
        dispatch('getCity')
            //轮播图获取完毕，开始获取城市经纬度
    },
    //获取得到经纬度
    async getCity({ commit, dispatch }) {
        let res = await axios.req("https://elm.cangdu.org/v1/cities?type=guess")
        commit(SET_LONGITUDE, res.longitude)
        commit(SET_LATITUDE, res.latitude)
            //获取到了经纬度之后，调取getaddre与getshops获取地址和商家信息
        dispatch('getAddress')
        dispatch('getShops')

    },
    //获取地址
    async getAddress({ commit, state }) {
        let res = await axios.req(`/v2/pois/${state.latitude},${state.longitude}`)
        commit(SET_ADDRESS, res.name)
    },
    //获取商家信息
    async getShops({ commit, state }) {
        let res = await axios.req(`/shopping/restaurants?latitude=${state.latitude}&longitude=${state.longitude}`)
        commit(SET_SHOPS, res)
    },
}