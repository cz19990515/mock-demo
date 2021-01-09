const fs = require('fs')

function uploadToFileServer(file) {
    return Promise.resolve({
        fileName: file.name,
        fileUrl: `file://${file.path}`,
        fileSize: file.size
    })
}

module.exports = files => {
    let arr = []
    files.forEach(file => {
        arr.push(uploadToFileServer(file))
    })
    return Promise.all(arr)
}