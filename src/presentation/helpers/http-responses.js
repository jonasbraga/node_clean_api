const MissingParamsError = require('./missing-params-error')
const UnauthorizedError = require('./unauthorized-error')

module.exports = class HttpResponse {
  static badRequest (...paramsNames) {
    return {
      statusCode: 400,
      body: new MissingParamsError(...paramsNames)
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }

  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }
}
