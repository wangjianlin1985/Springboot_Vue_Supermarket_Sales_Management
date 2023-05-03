import { request } from './request'

//获取侧边栏数据
export function getMenus(){
  return request({
    url: '/menus'
  })
}

//获取用户列表数据
export function getUsers(){
  return request({
    url: '/user/getUsers',
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
//更改用户状态
export function changeState(uid,type){
  return request({
    url: '/users/'+ uid + '/state/' + type,
    method: 'put'
  })
}

//添加用户
export function addUserInfo(userInfo){
  return request({
    url: '/user/addUser',
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
export function queryIdUser(id){
  return request({
    url: '/user/getUserInfo' ,
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
export function changeUser(userInfo){
  return request({
    url: '/user/upUser' ,
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
export function czUser(userInfo){
  return request({
    url: '/user/czUser' ,
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
//删除用户
export function delUsers(id){
  return request({
    url: '/user/delUser',
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

// 分配角色-角色列表
export function allotJsList(){
  return request({
    url: '/roles'
  })
}

// 分配用户角色
export function allotJs(id,rid){
  return request({
    url: '/users/' + id + '/role',
    method: 'put',
    data: {
      rid
    }
  })
}
