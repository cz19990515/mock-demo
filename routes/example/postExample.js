const { METHOD, STATUS_CODE } = require('../../utils/const.js')
const Response = require('../../utils/response.js')

module.exports = {
    method: METHOD.POST,
    url: '/postExample',
    handler: async (ctx, next) => {
        ctx.response.body = new Response(STATUS_CODE.SUCCESS, {
            result: ctx.request.body
        })
    }
}