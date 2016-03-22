/**
 * Created by bll on 16/3/22.
 */
//模块系统
var out=require("./inc.js");
out();
//路由
var server=require("./router");
var router=require("./router-path");
server.start(router.route);
//全局对象
console.log(__filename);
console.log(__dirname);
console.log(process.cwd());
console.log(process.version);
//输出内存使用情况
console.log(process.memoryUsage());
var fs=require("fs");
//异步读取文件
fs.readFile("a.js",function(err,data){
    if(err){
        return console.log(err);
    }
    console.log("异步读取:"+data.toString());
});
fs.stat("a.js",function(err,stats){
    if(err){
        return console.log(err);
    }
    console.log("异步读取:"+data.toString());
    console.log(stats.isFile());
});
//同步读取
var data=fs.readFileSync('b.js');
console.log('同步读取:'+data.toString());
eval(data.toString());
console.log("程序执行完毕!!");
//删除文件
//fs.unlink("d.js",function(err){
//    if(err){
//        return console.error(err);
//    }
//    console.log('删除成功!!');
//});
//读取文件
fs.readdir("/Applications/MAMP/htdocs/",function(err,files){
    if(err){
        return console.log(err);
    }
    files.forEach(function(file){
        console.log(file);
    })
});
var util=require("util");
var http=require("http");
var url=require("url");
var app=require('express')();
//get请求
//http.createServer(function(req,res){
//    res.end(util.inspect(url.parse(req.url,true)));
//}).listen(3000);
//post请求
//http.createServer(function(req,res){
//    var post="";
//    req.on("data",function(chunk){
//        post+=chunk;
//    });
//    req.on('end',function(){
//        post.querystring.parse(post);
//        res.end(util.inspect(post));
//    });
//}).listen(3000);
app.get('/listUsers',function(req,res){
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
});
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});