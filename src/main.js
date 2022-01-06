import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import PurchaseList from './view/purchase/Purchase.vue'
import SellList from './view/sell/Sell.vue'

// import axios from 'axios'
// import VueAxios from 'vue-axios'

Vue.use(VueRouter)
Vue.config.productionTip = false



//Thiet lap router
const routes = [
    { path: '/purchase', component: PurchaseList },
    { path: '/sell', component: SellList }
]
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')