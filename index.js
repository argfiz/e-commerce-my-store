const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')
const { checkApiKey } = require('./middlewares/auth.handler');

const { logErrors, errorHandler, boomErrorHandler, handleSQLError } = require('./middlewares/error.handler')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) //podemos recibir json por post

/*const whitelist = ['http://localhost:8080', 'https://myapp.ar']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'), false);
    }
  }
}
app.use(cors(options))*/
app.use(cors())

require('./utils/auth')

app.get('/', (req, res) => {
  res.send('BIENVENIDOS AL SERVIDOR DE ARGFIZ')
})

app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('BIENVENIDOS NUEVA RUTA')
})

routerApi(app)

app.use(logErrors)
app.use(handleSQLError)
app.use(boomErrorHandler)
app.use(errorHandler)


app.listen(port, () => {
  console.log('Server running on port ' + port)
})


