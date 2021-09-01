const express = require('express')
const app = express()
const axios = require('axios');


const port = 3030

app.use(express.json());

const cmcAdminApiBaseUrl = "http://localhost:7847";

axios.defaults.baseURL = cmcAdminApiBaseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

app.post('/playbooks', (req, res) => {
  axios.post('/api/playbook-manager/playbooks', req.body)
  .then(function (response) {
    console.log(response);
    res.setHeader('Content-Type', 'application/json');
    res.send(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})