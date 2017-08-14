const koa = require('koa');
const app = new koa();
app.listen(3000,'127.0.0.3')
app.use(async (ctx,next) => {
	console.log('test 111');
	await next();
	console.log('test 222');	
})
app.use(async (ctx,next) =>{
	console.log('test 333');
	ctx.body = 'hello koa';
	console.log('test 444');	
})


