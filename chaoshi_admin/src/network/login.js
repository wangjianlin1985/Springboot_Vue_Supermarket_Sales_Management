import { request } from './request'

export function getlogin(account,pwd){
  return request({
    url: '/admin/login',
    method: 'post',
    data: {
      account,
      pwd
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
