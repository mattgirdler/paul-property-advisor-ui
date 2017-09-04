const express = require('express')
const path = require('path')
const cfenv = require('cfenv')
const app = express()

app.use('/static', express.static('app/assets/dist'))

app.get('/', function (req, res) {
  res.sendFile(path.resolve('app/templates/index.html'))
})

var appEnv = cfenv.getAppEnv()
var port = appEnv.port || 3000

app.listen(port, function () {
  console.log('Example app listening on port 3000')
})