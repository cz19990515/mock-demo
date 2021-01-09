const fs = require('fs')
const { downloadDir } = require('./path.js')

module.exports = filePath => {
    const originalPath = downloadDir + filePath
    if (!fs.existsSync(originalPath)) {
        return null
    }
    return fs.createReadStream(originalPath)
}