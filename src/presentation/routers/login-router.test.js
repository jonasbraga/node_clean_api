class LoginRouter {
  route (httpRequest) {
    if (!httpRequest || !httpRequest.body) return HttpResponse.serverError()

    const { email, password } = httpRequest.body
    if (!email) return HttpResponse.badRequest('email')
    if (!password) return HttpResponse.badRequest('password')
  }
}

class HttpResponse {
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

class MissingParamsError extends Error {
  constructor (...paramsNames) {
    super(`Missing params: ${paramsNames.join(', ')}`)
    this.name = 'MissingParamsError'
  }
}
describe('Login Router', () => {
  test('Should return 400 if no email is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'minhaSenha2021'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamsError('email'))
  })
  test('Should return 400 if no password is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        email: 'jonasbraga2001@gmail.com'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamsError('password'))
  })
  test('Should return 500 if no httpRequest is provided', () => {
    const sut = new LoginRouter()
    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })
  test('Should return 500 if httpRequest has no body', () => {
    const sut = new LoginRouter()
    const httpRequest = {}
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
