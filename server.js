const express = require('express')
const app = express()
const port = 3030

app.use(express.json()); 

app.post('/playbooks', (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.send(JSON.stringify(req.body, null, 2))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})