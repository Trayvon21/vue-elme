import { SET_LONGITUDE, SET_LATITUDE, SET_ADDRESS, SET_SHOPS, SET_LIST, SET_USER }
from './mutation-types'
export default {
    //经纬度
    [SET_LONGITUDE](state, data) {
        state.longitude = data
    },
    [SET_LATITUDE](state, data) {
        state.latitude = data
    },
    //地址
    [SET_ADDRESS](state, data) {
        state.address = data
    },
    //商家信息
    [SET_SHOPS](state, data) {
        state.shops = data
    },
    //轮播信息
    [SET_LIST](state, data) {
        state.list = data
    },
    //用户信息
    [SET_USER](state, data) {
        console.log(data);
        state.user = data
    },
}