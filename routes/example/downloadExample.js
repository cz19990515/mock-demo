const { METHOD, STATUS_CODE } = require('../../utils/const.js')
const Response = require('../../utils/response.js')
const download = require('../../utils/download.js')

module.exports = {
    method: METHOD.GET,
    url: '/downloadExample',
    handler: async (ctx, next) => {
        const filePath = ctx.request.query.filePath
        const result = download(filePath)
        if (result === null) {
            ctx.response.body = new Response(
                STATUS_CODE.NOT_FOUND,
                null,
                '文件不存在'
            )
        } else {
            const pathComponets = filePath.split('/')
            const lastComponet = pathComponets.pop()
            ctx.set('Content-Disposition', 'attachment; fileName=' + lastComponet)
            ctx.response.body = result
        }
    }
}