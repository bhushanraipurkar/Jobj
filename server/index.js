const express = require('express')
const next = require('next')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    require('./connection/conn')
    const bodyparser = require('body-parser')
    const user = require('./routes/user')
    const job = require('./routes/job')

    server.use(express.json())
    server.use(bodyparser.json())
    server.use('/user435', user)
    server.use('/job435', job)
    server.use(express.urlencoded({ extended: true }))

    // server.get('/kdnscjnncscnsdc', (req, res) => {
    //   res.send('hello world !')
    // })

    server.all('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, (err) => {
      if (err) throw err
      console.log(`> Ready on ${PORT}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
