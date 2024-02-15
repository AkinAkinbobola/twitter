import {sendError} from 'h3'
import {getUserByUsername} from "~/server/db/users.js";
import {userTransformer} from "~/server/transformers/users.js";
import bcrypt from "bcrypt";
import {generateTokens, sendRefreshToken} from "~/server/utils/jwt.js";
import {createRefreshToken} from "~/server/db/refreshTokens.js";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const {username, password} = body;

    if (!username || !password) {
        sendError(event, createError({
            statusCode: 400,
            statusMessage: 'All fields are required'
        }))
    }

    const user = await getUserByUsername(username);
    if (!user) {
        sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Invalid username or password'
        }))
    }
    if (!bcrypt.compareSync(password, user.password)) {
        sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Invalid username or password'
        }))
    }
    const {accessToken, refreshToken} = generateTokens(user);

    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    });
    sendRefreshToken(event, refreshToken);
    return {
        access_token: accessToken, user: userTransformer(user)
    };
});