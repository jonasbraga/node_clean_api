module.exports = class MissingParamsError extends Error {
  constructor (...paramsNames) {
    super(`Missing params: ${paramsNames.join(', ')}`)
    this.name = 'MissingParamsError'
  }
}
