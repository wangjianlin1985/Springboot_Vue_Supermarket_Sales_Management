import { request } from './request'



//
export function getAllReward(){
  return request({
    url: '/reward/getAllReward',
     method: 'post',
  })
}
//

export function getOrdersNum(){
  return request({
    url: '/orders/getOrdersNum',
     method: 'post',
  })
}
export function getGoodsStatus(){
  return request({
    url: '/goods/getGoodsStatus',
     method: 'post',
  })
}
export function getAllSalary(){
  return request({
    url: '/salary/getAllSalary',
     method: 'post',
  })
}
export function getAllUser(){
  return request({
    url: '/user/getAllUser',
     method: 'post',
  })
}
export function getAllLeave(){
  return request({
    url: '/leave/getAllLeave',
     method: 'post',
  })
}
//添加用户
export function pubReward(userInfo){
  return request({
    url: '/reward/pubReward',
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

export function pubRework(userInfo){
  return request({
    url: '/rework/pubRework',
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


export function pubSalary(userInfo){
  return request({
    url: '/salary/pubSalary',
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
export function pubLeave(userInfo){
  return request({
    url: '/leave/pubLeave',
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
export function upLeaveStatus(userInfo){
  return request({
    url: '/leave/upLeaveStatus',
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
export function upReworkStatus(userInfo){
  return request({
    url: '/rework/upReworkStatus',
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
export function delReward(id){
  return request({
    url: '/reward/delReward',
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
export function delSalary(id){
  return request({
    url: '/salary/delSalary',
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

export function delLeave(id){
  return request({
    url: '/leave/delLeave',
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

//删除用户
export function delRework(id){
  return request({
    url: '/rework/delRework',
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