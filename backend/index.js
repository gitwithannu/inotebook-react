const express = require('express')
var cors = require('cors')
const connectToMongova = require('./db');
connectToMongova();

const app = express()
const port = 5000
app.use(cors())
app.use(express.json()); // express middle ware to return body 

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.use('/api/banners',require('./routes/banners'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})