const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors('*'))
app.use(express.json())

app.get('/', (request, response) => {
  response.send('welcome to the my APIs')
})

// add the required routes
const productRouter = require('./routes/product')
app.use('/product', productRouter)

app.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 4000')
})
