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
    })
}

export const decodeRefreshToken = (token) => {
    try {
        const config = useRuntimeConfig();
        return jwt.verify(token, config.jwtRefreshSecret)
    }catch (e) {
        return null
    }
}
export const decodeAccessToken = (token) => {
    try {
        const config = useRuntimeConfig();
        return jwt.verify(token, config.jwtAccessSecret)
    }catch (e) {
        return null
    }
}