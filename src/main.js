import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from './http'
// 引入轮播图
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false
Vue.prototype.$axios = service
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')