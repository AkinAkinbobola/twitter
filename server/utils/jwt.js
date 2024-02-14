import jwt from 'jsonwebtoken';

const generateAccessToken = (user) => {
    const config = useRuntimeConfig();
    return jwt.sign({userId: user.id}, config.jwtAccessSecret, {
        expiresIn: "15m"
    })
}
const generateRefreshToken = (user) => {
    const config = useRuntimeConfig();
    return jwt.sign({userId: user.id}, config.jwtRefreshSecret, {
        expiresIn: "4h"
    })
}

export const generateTokens = (user) => {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    return {
        accessToken,
        refreshToken
    }
}

export const sendRefreshToken = (event, refreshToken) => {
    setCookie(event, 'refreshToken', refreshToken, {
        httpOnly: true,
        sameSite: true,
        path: '/refresh_token'
    })
}