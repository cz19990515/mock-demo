const { METHOD, STATUS_CODE } = require('../../utils/const.js')
const Response = require('../../utils/response.js')
const upload = require('../../utils/upload.js')

module.exports = {
    method: METHOD.POST,
    url: '/uploadExample',
    handler: async (ctx, next) => {
        const params = ctx.request.body

        const files = ctx.request.files.myFile
        let promise = null
        if (Array.isArray(files)) {
            promise = upload(files)
        } else {
            promise = upload([files])
        }

        promise.then(res => {
            ctx.response.body = new Response(STATUS_CODE.SUCCESS, {
                files: res
            })
        }).catch(error => {
            ctx.response.body = new Response(STATUS_CODE.OPERATION_FAIL, null)
        })
    }
}