/**
 * Created by bll on 16/3/22.
 */
//路由
var http=require("http");
var url=require("url");

function start(route){
    function onRequest(request,response){
        console.log(request.url);
        var pathname=url.parse(request.url).pathname;
        console.log("请求来自"+pathname+"服务!!");
        route(pathname);
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("hello world");
        response.end();
    }
    http.createServer(onRequest).listen("8080");
    console.log("服务已启动!!");
}
exports.start=start;
