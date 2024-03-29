const jwt = require('jsonwebtoken');
const refreshModel = require('../models/refresh');
class Token{
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET, {
            expiresIn:'1h'
        });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN_SECRET, {
            expiresIn:'1y'
        });
        return { accessToken, refreshToken };
    }

    async storeRefreshToken(token, userId) {
        try {
            await refreshModel.create({
                token, userId
            });
        }
        catch (e)
        {
            console.log(e);
        }
    }
}

module.exports = new Token();