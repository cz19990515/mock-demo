const { METHOD, STATUS_CODE } = require('../../utils/const.js')
const Response = require('../../utils/response.js')

module.exports = {
    method: METHOD.GET,
    url: '/getExample',
    handler: async (ctx, next) => {
        // 取出GET请求参数
        let params = ctx.request.query
        let offset = params.offset || 0
        let pageSize = params.pageSize || 20

        // 处理返回结果
        const maxNumber = offset + pageSize > 100 ? 100 : offset + pageSize
        const array = []
        for (let index = offset; index < maxNumber; index++) {
            array.push(`${index}`)
        }

        // 模拟延时2s
        await new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, 2000)
        })

        ctx.response.body = new Response(STATUS_CODE.SUCCESS, {
            list: array
        })
    }
}