const { ValidationError } = require('sequelize')
const boom = require ('@hapi/boom')

function logErrors(err, req, res, next) {
  console.log(err)
  next(err)
}

function errorHandler(err, req, res, next) {
  res.status(500).json(
    {
      message: err.message,
      stack: err.stack
    }
  )
  next()
}
//Maneja errorres como crear claves unicas ya existentes como "email"
function handleSQLError (err, req, res, next) {
  if (err instanceof ValidationError) {
    boomErrorHandler(boom.badRequest(err.errors[0].message), req, res, next);
    //throw boom.conflict(err.errors[0].message)
  } else {
    next (err)
  }
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }
}



module.exports = { logErrors, errorHandler, boomErrorHandler, handleSQLError }
