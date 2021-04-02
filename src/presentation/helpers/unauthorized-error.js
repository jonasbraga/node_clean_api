module.exports = class UnauthorizedError extends Error {
  constructor () {
    super('Not authorized')
    this.name = 'UnauthorizedError'
  }
}
