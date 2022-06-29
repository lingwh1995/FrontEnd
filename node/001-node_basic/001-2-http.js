//1.引入http模块
var http = require('http');
//2.创建服务器
var server = http.createServer();
//3.提供http服务
server.on('request',function(request,response){
	console.log('收到了来自客户端的请求');
	console.log('请求的url:'+request.url);
	response.write('hello');
	response.write('world');
	response.end();
});
//4.绑定端口号,启动服务器
server.listen(8080,function(){
	console.log('服务器启动成功,端口号为8080');
});

