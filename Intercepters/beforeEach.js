const { STATUS_CODE } = require('../utils/const.js')
const Response = require('../utils/response.js')

module.exports = (() => {
    const validatePublicParamsExtendsRoute = ['/downloadExample']
    return async (ctx, next) => {
        const validator = require('../utils/validator.js')
        const publicParams = ctx.request.headers
        const isValid = validator.validatePublicParams(publicParams)
        if (!isValid && !validatePublicParamsExtendsRoute.includes(ctx.path)) {
            ctx.response.body = new Response(STATUS_CODE.MISS_PUBLIC_PARAMS)
            return
        }
        await next()
    }
})()