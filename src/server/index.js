const express = require('express')
const https = require('https')
const cors = require('cors')

const app = express()
const port = 3010

app.use(express.static('static'))
app.use(cors())

app.get('/', (_, res) => {
  let html = ''
  https
    .get('https://www.gutenberg.org/cache/epub/730/pg730-images.html', (httpsRes) => {
      httpsRes
        .on('data', (chunk) => {
          html += chunk.toString('utf-8')
        })
        .on('error', (error) => {
          console.log('error:', error)
        })
        .on('end', () => {
          console.log('end')
          res.send(html)
        })
    })
    .on('error', (error) => {
      console.log('ERROR:', error.message)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
