const params = {
	prod:{
		url:"http://service.jifenfu.net/cloud-service",
		purchaserList:[
			{
				"name":"浙商银行在线商城",
				"channelId":1399
			}
		]
	},
	test:{
		url:"http://test.jifenfu.net:58686",
		purchaserList:[
			{
				name:"浙商银行在线商城2期",
				channelId:1148
			},
			// {
			// 	name:"浙商银行在线商城1期",
			// 	channelId:1127
			// }
		]
	},
}
module.exports = params;
	
