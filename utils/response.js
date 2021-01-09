const { STATUS_CODE } = require('./const.js')

class Response {
    constructor(statusCode, data, msg) {
        this.code = statusCode
        this.msg = msg || this.getMsg(statusCode)
        this.data = data
    }

    getMsg(code) {
        let msg = null
        switch (code) {
            case STATUS_CODE.SUCCESS:
                msg = '操作成功'
                break;
            case STATUS_CODE.MISS_PUBLIC_PARAMS:
                msg = '缺少公共参数'
                break
            case STATUS_CODE.OPERATION_FAIL:
                msg = '操作失败'
                break
            case STATUS_CODE.NOT_FOUND:
                msg = '404'
                break
            default:
                msg = '未知错误'
                break;
        }
        return msg
    }

    get body() {
        return {
            code: this.code,
            msg: this.msg,
            data: this.data
        }
    }
}

module.exports = Response