const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cfenv = require('cfenv')
const app = express()

const config = require('./config')

const ConversationV1 = require('watson-developer-cloud/conversation/v1')

app.use(bodyParser.json())

var appEnv = cfenv.getAppEnv()

var context = {}

var conversation = new ConversationV1({
  username: config.username,
  password: config.password,
  version_date: ConversationV1.VERSION_DATE_2017_05_26
})

app.post('/api/question', function(req, res) {
  console.log(req)
  conversation.message({
    input: { text: req.body.question },
    workspace_id: '7aea4577-7e09-4262-9758-302b66d4df5a',
    context: context
  }, (err, response) => {
    if (err) {
      res.sendStatus(500)
    } else {
      context = response.context
      res.send(response);
    }
  })
})

app.use('/static', express.static('app/assets/dist'))
app.use('/images', express.static('app/assets/src/images'))
app.use('/styles.css', express.static('app/assets/src/styles.css'))
app.use('/updated-styles.min.css', express.static('app/assets/src/updated-styles.min.css'))

app.get('/', function (req, res) {
  res.sendFile(path.resolve('app/templates/index.html'))
})

var port = appEnv.port || 3000

app.listen(port, function () {
  console.log('Example app listening on port', port)
})
