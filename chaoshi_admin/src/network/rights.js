import { request } from './request'

//权限列表数据
export function getRightsList(type){
  return request({
    url: '/rights/' + type
  })
}

//角色列表数据
export function getRolesList(){
  return request({
    url: '/notice/getAllNotice',
	 method: 'post'
  })
}

//删除角色指定权限
export function delqx(jsid,qxid){
  return request({
    url: '/roles/'+ jsid + '/rights/' + qxid,
    method: 'delete'
  })
}

// 角色授权
export function addqx(roleId, rids){
  return request({
    url: '/roles/' + roleId + '/rights',
    method: 'post',
    data: {
      rids
    }
  })
}

//添加
export function addRolesData(data){
  return request({
    url: '/notice/pubNotice',
    method: 'post',
    data,
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

//编辑角色
export function editRolesData(id, data){
  return request({
    url: '/roles/' + id,
    method: 'put',
    data
  })
}
//删除角色
export function deleteRoleData(id){
  return request({
    url: '/notice/delNotice',
    method: 'post',
	data: {
	  id
	},
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
