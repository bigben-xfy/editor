
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'

import './filter'

import './style'


import {
	Menu,
	Submenu,
	MenuItem,
} from 'element-ui'

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)


Vue.use(VueRouter)
export const router = new VueRouter({
	routes: routes,
	mode: 'history',
	scrollBehavior:()=>({ // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
		y:0
	})
})

new Vue({
	router,
	store
}).$mount('#app')













