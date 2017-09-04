const express = require('express')
const path = require('path')
const cfenv = require('cfenv')
const app = express()

const ConversationV1 = require('watson-developer-cloud/conversation/v1')

var appEnv = cfenv.getAppEnv()

var conversation = new ConversationV1({
  username: '<USERNAME>',
  password: '<PASSWORD>',
  version_date: ConversationV1.VERSION_DATE_2017_05_26
})

// Example conversation use
conversation.message({
  input: { text: 'Hello' },
  workspace_id: '26a6e7d0-4127-4be4-bf44-2355001a6a38'
}, function(err, response) {
  if (err) {
    console.error(err);
  } else {
    console.log(response.output.text[0]);
  }
})

app.use('/static', express.static('app/assets/dist'))

app.get('/', function (req, res) {
  res.sendFile(path.resolve('app/templates/index.html'))
})

var port = appEnv.port || 3000

app.listen(port, function () {
  console.log('Example app listening on port 3000')
})