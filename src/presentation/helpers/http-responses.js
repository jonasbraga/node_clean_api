const MissingParamsError = require('./missing-params-error')

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
}
