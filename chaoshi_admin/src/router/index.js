import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * 重写路由的push方法、replace方法,防止报错
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

const Login = () => import('views/login/Login')
const Home = () => import('views/home/Home')

const Welcome = () => import('views/home/children/Welcome')
const UserList = () => import('views/home/children/users/UserList')
const AdminList = () => import('views/home/children/users/AdminList')
const RolesList = () => import('views/home/children/roles/RolesList')

const OrderList = () => import('views/home/children/roles/OrderList')
const GoodsReturn = () => import('views/home/children/roles/GoodsReturnList')

const Salary = () => import('views/home/children/shenqing/SalaryList')
const Leave = () => import('views/home/children/shenqing/LeaveList')


const GoodsList = () => import('views/home/children/goods/GoodsList')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: UserList
      },
	  {
	    path: '/admins',
	    component: AdminList
	  },
	  {
	    path: '/tuihuo',
	    component: GoodsReturn
	  },
	  {
	    path: '/goods',
	    component: GoodsList
	  },
      {
        path: '/roles',
        component: RolesList
      },
     {
       path: '/orders',
       component: OrderList
     },
          
     
	 
	  {
	    path: '/salary',
	    component: Salary
	  },
	  {
	    path: '/leave',
	    component: Leave
	  }
    ]
  }
]
const router = new VueRouter({
    routes
})

// 是否已经登录  导航守卫
router.beforeEach((to, from, next) => {
  if(to.path === '/login'){
    return next()
  }
  // 获取到token (有无token判断，是否登录)
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr){
    return next('/login')
  }else{
    return next()
  }
})

export default router
