const args = process.argv.filter(v => {
    return /^[0-9]+\.?[0-9]*$/.test(v)
})
const port = args[0] || 9999
const Koa = require('koa2')
const app = new Koa()

// koabody，参数处理
app.use(require('./utils/bodyParser.js'))

// log
app.use(require('./utils/logger.js'))

// 处理路由前的拦截
app.use(require('./Intercepters/beforeEach.js'))

// routes
app.use(require('./routes/index.js'))

// listen
app.listen(port)

console.log(`mock server start listen ${port}...`);