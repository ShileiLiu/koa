const koa = require('koa');
const app = new koa();
const fs = require('fs');
const path = process.cwd();
app.listen(3000,'127.0.0.3')
//中间件，设置静态文件目录
app.use(async (ctx,next)=>{	
	let url = ctx.request.url;
	if(~url.indexOf('/static/src/')){
		let res = await new Promise(function(reslove,reject){
			fs.readFile(path+url.replace(/\//g,'\\'),'utf-8',(err,res)=>{
				if(err) reslove({status:404,err});
				reslove({status:200,body:res})
			})			
		})
		if(res.status == 200){
			ctx.body = res.body;
		}else{
			ctx.res.status=404
		}
			
		
	}
})

