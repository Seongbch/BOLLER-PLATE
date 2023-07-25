const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://lum-tester:qwer1234@atlascluster.szvuvl0.mongodb.net/?retryWrites=true&w=majority',{

}).then(() => console.log('mongDB connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('반갑습니다.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})