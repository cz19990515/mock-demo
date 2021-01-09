const koaBody = require('koa-body')
const { uploadDir } = require('./path.js')

module.exports = koaBody({
    encoding: 'utf-8',
    patchKoa: true,
    multipart: true,
    urlencoded: true,
    text: true,
    json: true,
    formLimit: 56 * 1024,
    textLimit: 56 * 1024,
    jsonLimit: 1024 * 1024,
    formidable: {
        uploadDir: uploadDir,
        keepExtensions: true,
        maxFileSize: 10 * 1024 * 1024
    },
    onError(error, ctx) {
        console.log(error);
    }
})