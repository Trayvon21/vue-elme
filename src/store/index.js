import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../http'
Vue.use(Vuex)

export default new Vuex.Store({
    //state
    state: {
        longitude: "",
        latitude: "",
        address: "",
        shops: [],
        list: [],
        user: {
            name: "",
            phone: "",
        }
    },
    //mutations
    mutations: {
        ['SET_LONGITUDE'](state, data) {
            state.longitude = data
        },
        ['SET_LATITUDE'](state, data) {
            state.latitude = data
        },
        ['SET_ADDRESS'](state, data) {
            state.address = data
        },
        ['SET_SHOPS'](state, data) {
            state.shops = data
        },
        ['SET_LIST'](state, data) {
            state.list = data
        },
        ['SET_USER'](state, data) {
            console.log(data);
            state.user = data
        },

    },
    //actions
    actions: {
        //axios请求，获取轮播图
        async getList({ commit, dispatch }) {
            let res = await axios.req("/v2/index_entry")
            commit('SET_LIST', res)
            dispatch('getCity')
                //轮播图获取完毕，开始获取城市经纬度
        },
        //获取得到经纬度
        async getCity({ commit, dispatch }) {
            let res = await axios.req("https://elm.cangdu.org/v1/cities?type=guess")
            commit('SET_LONGITUDE', res.longitude)
            commit('SET_LATITUDE', res.latitude)
                //获取到了经纬度之后，调取getaddre与getshops获取地址和商家信息
            dispatch('getAddress')
            dispatch('getShops')

        },
        //获取地址
        async getAddress({ commit, state }) {
            let res = await axios.req(`/v2/pois/${state.latitude},${state.longitude}`)
            commit('SET_ADDRESS', res.name)
        },
        //获取商家信息
        async getShops({ commit, state }) {
            let res = await axios.req(`/shopping/restaurants?latitude=${state.latitude}&longitude=${state.longitude}`)
            commit('SET_SHOPS', res)
        },

    },
    //getters
    getters: {},
    modules: {}
})