import { request } from './request'

//获取侧边栏数据
export function getMenus(){
  return request({
    url: '/menus'
  })
}

//获取用户列表数据
export function getAdmins(){
  return request({
     url: '/admin/getAdmins',
     method: 'post',
  })
}
//获取用户列表数据
export function getAdminsByKey(userInfo){
  return request({
    url: '/admin/getAdminsByKey',
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
export function addAdmin(userInfo){
  return request({
    url: '/admin/addAdmin',
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
export function getAdminInfo(id){
  return request({
    url: '/admin/getAdminInfo' ,
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
export function upAdmin(userInfo){
  return request({
    url: '/admin/upAdmin' ,
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
export function upAdminType(id,type){
  return request({
    url: '/admin/upAdminType' ,
    method: 'post',
    data: {id,type},
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


//删除用户
export function delAdmin(id){
  return request({
    url: '/admin/delAdmin',
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


