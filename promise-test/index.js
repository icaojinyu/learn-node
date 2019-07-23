let fs = require('fs')
let path = require('path')

/*
function getFileContent(filename, callback) {
  let fullFileName = path.resolve(__dirname, 'files', filename)
  fs.readFile(fullFileName, (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    callback(JSON.parse(data.toString()))
  })
}

// 测试 callback-hell(回调地狱)
getFileContent('a.json', (aData) => {
  console.log(aData)
  getFileContent(aData.next, (bData) => {
    console.log(bData)
    getFileContent(bData.next, (cData) => {
      console.log(cData)
    })
  })
})
*/

// 用promise获取文件内容

function getFileContent(filename) {
  return new Promise((resolve, reject) => {
    let fullFileName = path.resolve(__dirname, 'files', filename)
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(JSON.parse(data.toString()))
    })
  })
}

getFileContent('a.json')
  .then((aData) => {
    console.log(aData)
    return getFileContent(aData.next)
  })
  .then((bData) => {
    console.log(bData)
    return getFileContent(bData.next)
  })
  .then((cData) => {
    console.log(cData)
  })
