import VueRouter from 'vue-router';
import homePage from '../component/nav/homePage.vue'
import my from '../component/nav/my.vue'
import proCenter from '../component/proCenter/proCenter.vue'
import shopCar from '../component/shopCar/shopCar.vue'
import setOrder from '../component/setOrder/setOrder.vue'
import updateAddr from '../component/updateAddr/updateAddr.vue'
import myOrder from '../component/myOrder/myOrder.vue'
import orderDetail from '../component/orderDetail/orderDetail.vue'
import addAddress from '../component/addAddress/addAddress.vue'
import login from '../component/login/login.vue'
import register from '../component/register/register.vue'
import sort from '../component/sort/sort.vue'
import search from '../component/search/search.vue'
import prolist from '../component/prolist/prolist.vue'

export default new VueRouter({
	routes:[
		{path:'/homePage',component:homePage},
		{path:'/my',component:my},
		{path:'/login',component:login},
		{path:'/register',component:register},
		{path:'/login',component:login},
		{path:'/register',component:register},
		{path:'/proCenter/:id',component:proCenter},
		{path:'/shopCar',component:shopCar},
		{path:'/setOrder',component:setOrder},
		{path:'/myOrder',component:myOrder},
		{path:'/orderDetail',component:orderDetail},
		{path:'/addAddress',component:addAddress},
		{
			path:'/sort',
			component:sort,
			children:[
				{path:'/prolist',component:prolist}
			]
		},
		{path:'/search',component:search},
		{path:'/',redirect:'/homePage'},
	]
})