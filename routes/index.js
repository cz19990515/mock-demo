const { METHOD } = require('../utils/const.js')
const Router = require('koa-router')
const router = new Router({})
const fs = require('fs')
const { routesDir } = require('../utils/path.js')
const { dir } = require('console')

module.exports = (() => {
    function addAPI(api) {
        if (!api) {
            return
        }

        console.log(api)

        if (api.method === METHOD.GET) {
            router.get(api.url, api.handler)
        } else if (api.method === METHOD.POST) {
            router.post(api.url, api.handler)
        } else {
            // 不支持的接口类型
        }
    }

    // 扫描routes目录下所有的子目录的js文件，剔除index.js
    let dirs = null
    try {
        dirs = fs.readdirSync(routesDir)
    } catch (error) {
        // 这里暂时不处理，只catch住未扫描到文件夹时抛出的错误，以防阻断流程
    }

    if (!dirs) {
        console.log(`========= 文件夹为空：${path} =========`);
        return router.routes()
    }

    dirs.filter(dir => dir.indexOf('.') === -1)
        .forEach(dir => {
            try {
                const files = fs.readdirSync(routesDir + dir)
                files.filter(file => file.endsWith('.js'))
                    .forEach(file => {
                        const filePath = `./${dir}/${file}`
                        const api = require(filePath)
                        addAPI(api)
                    })
            } catch (error) {
                console.log(error);
                // 这里暂时不处理，只catch住未扫描到文件夹时抛出的错误，以防阻断流程
            }
        })
    return router.routes()
})()