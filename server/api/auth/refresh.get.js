import {sendError} from "h3";
import {getRefreshToken} from "~/server/db/refreshTokens.js";
import {decodeRefreshToken, generateTokens} from "~/server/utils/jwt.js";
import {getUserById} from "~/server/db/users.js";

export default defineEventHandler(async (event) => {
    const refreshToken = getCookie(event, 'refreshToken')
    if (!refreshToken) {
        sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Refresh token is invalid'
        }))
    }
    const rToken = await getRefreshToken(refreshToken);
    if (!rToken) {
        sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Refresh token is invalid'
        }))
    }
    const token = decodeRefreshToken(refreshToken);
    try {
        const user = await getUserById(token.userId);
        const {accessToken} = generateTokens(user);
        return {
            access_token: accessToken
        }

    } catch (e) {
        sendError(event, createError({
            statusCode: 500,
            statusMessage: 'Something went wrong'
        }))
    }
})