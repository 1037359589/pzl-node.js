/**
 * Created by bll on 16/3/21.
 *
 */
var http=require("http"),
    event=require("events"),
    fs=require("fs");
var data="console.log('呵呵哒');";
//创建服务
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('hello word');
}).listen(8080);
//事件监听服务
var events=new event.EventEmitter();
events.on("connection",eventHandler);
events.on('data_received',dataHandler);
function eventHandler(){
    console.log("事件触发了!!");
    events.emit('data_received',dataHandler);
}
function dataHandler(){
    console.log('接受到了数据!!');
}
events.emit('connection');
//异步读取文件
fs.readFile('a.js',function(err,data){
    //console.log(eval(data.toString()));
    console.log(err,data.toString());
});
//node.js 流
//读取流
var readerStream=fs.createReadStream("b.js");
readerStream.setEncoding("UTF8");
readerStream.on('data',function(datas){
    data=data+datas.toString();
    console.log(11,datas.toString());
});
readerStream.on('error',function(err){
    console.log(err.stack);
});
readerStream.on('end',function(){
    console.log(data);
    console.log('访问结束!!');
});
//写入流
var writeStream=fs.createWriteStream("c.js");
//writeStream.write(data,'UTF8');
//writeStream.end();
//writeStream.on('finish',function(){
//    console.log("写入结束!!呵呵哒");
//});
//writeStream.on('error',function(err){
//    console.log(err.stack);
//});
readerStream.pipe(writeStream);

console.log("服务在http://localhost:8080");
