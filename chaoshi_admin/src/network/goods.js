import { request } from './request'

//获取用户列表数据
export function getUsers(){
  return request({
    url: '/user/getUsers',
     method: 'post',
  })
}

//获取用户列表数据
export function getGoods(){
  return request({
     url: '/goods/getGoods',
     method: 'post',
  })
}
//获取用户列表数据
export function getOrders(){
  return request({
     url: '/orders/getOrders',
     method: 'post',
  })
}
//获取用户列表数据
export function getUsersByKey(userInfo){
  return request({
    url: '/user/getUsersByKey',
     method: 'post',
	  data: userInfo,
	  transformRequest: [function (data) {  // 将{username:111,password:111} 转成 username=111&password=111
	                      var ret = '';
	                      for (var it in data) {
	                          // 如果要发送中文 编码
	                          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
	                      }
	                      return ret.substring(0,ret.length-1)
	                  }]
  })
}


//获取用户列表数据
export function addOrders(userInfo){
  return request({
    url: '/orders/addOrders',
     method: 'post',
	  data: userInfo,
	  transformRequest: [function (data) {  // 将{username:111,password:111} 转成 username=111&password=111
	                      var ret = '';
	                      for (var it in data) {
	                          // 如果要发送中文 编码
	                          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
	                      }
	                      return ret.substring(0,ret.length-1)
	                  }]
  })
}
//获取用户列表数据
export function searchGoods(userInfo){
  return request({
    url: '/goods/searchGoods',
     method: 'post',
	  data: userInfo,
	  transformRequest: [function (data) {  // 将{username:111,password:111} 转成 username=111&password=111
	                      var ret = '';
	                      for (var it in data) {
	                          // 如果要发送中文 编码
	                          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
	                      }
	                      return ret.substring(0,ret.length-1)
	                  }]
  })
}


//添加用户
export function addGoods(userInfo){
  return request({
    url: '/goods/addGoods',
    method: 'post',
    data: userInfo,
    transformRequest: [function (data) {  // 将{username:111,password:111} 转成 username=111&password=111
	                    var ret = '';
	                    for (var it in data) {
	                        // 如果要发送中文 编码
	                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
	                    }
	                    return ret.substring(0,ret.length-1)
	                }]
  })
}

// 根据id查询用户信息
export function getGoodsInfo(id){
  return request({
    url: '/goods/getGoodsInfo' ,
	method: 'post',
    data: {id},
 	transformRequest: [function (data) {  // 将{username:111,password:111} 转成 username=111&password=111
 		                    var ret = '';
 		                    for (var it in data) {
 		                        // 如果要发送中文 编码
 		                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
 		                    }
 		                    return ret.substring(0,ret.length-1)
 		                }]
 	})

}

// 修改用户信息
export function upGoods(userInfo){
  return request({
    url: '/goods/upGoods' ,
    method: 'post',
    data: userInfo,
	transformRequest: [function (data) {  // 将{username:111,password:111} 转成 username=111&password=111
		                    var ret = '';
		                    for (var it in data) {
		                        // 如果要发送中文 编码
		                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
		                    }
		                    return ret.substring(0,ret.length-1)
		                }]
	
 }) 
}

// 修改用户信息
export function upNum(userInfo){
  return request({
    url: '/goods/upNum' ,
    method: 'post',
    data: userInfo,
	transformRequest: [function (data) {  // 将{username:111,password:111} 转成 username=111&password=111
		                    var ret = '';
		                    for (var it in data) {
		                        // 如果要发送中文 编码
		                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
		                    }
		                    return ret.substring(0,ret.length-1)
		                }]
	
 }) 
}

//删除
export function delGoods(id){
  return request({
    url: '/goods/delGoods',
    method: 'post',
	data:{id},
	transformRequest: [function (data) {  // 将{username:111,password:111} 转成 username=111&password=111
		                    var ret = '';
		                    for (var it in data) {
		                        // 如果要发送中文 编码
		                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
		                    }
		                    return ret.substring(0,ret.length-1)
		                }]
	
  })
}
//删除
export function delOrders(id){
  return request({
    url: '/orders/delOrders',
    method: 'post',
	data:{id},
	transformRequest: [function (data) {  // 将{username:111,password:111} 转成 username=111&password=111
		                    var ret = '';
		                    for (var it in data) {
		                        // 如果要发送中文 编码
		                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
		                    }
		                    return ret.substring(0,ret.length-1)
		                }]
	
  })
}

