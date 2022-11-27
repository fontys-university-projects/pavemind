const jwt = require('jsonwebtoken')
const createError = require('http-errors')

const accessTokenSecret = process.env.JWT_KEY
const jwtIssuer = process.env.JWT_ISSUER
module.exports = {

    signAccessToken(payload){
        return new Promise((resolve, reject) => {
            jwt.sign( payload, accessTokenSecret, { algorithm: 'HS256', issuer: jwtIssuer }, (err, token) => {
                if (err) {
                reject(createError.InternalServerError())
                }
                resolve(token)
            })
        })
    },
    verifyAccessToken(token){
        return new Promise((resolve, reject) => {
            jwt.verify(token, accessTokenSecret, { algorithms:['HS256'], issuer: jwtIssuer }, (err, payload) => {
                if (err) {
                    const message = err.name == 'JsonWebTokenError' ? 'Unauthorized' : err.message
                    return reject(createError.Unauthorized(message))
                }
                resolve(payload)
            })
        })
    }

}
