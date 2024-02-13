import {sendError} from 'h3'
import {createUser} from "~/server/db/users.js";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const {username, email, password, repeatPassword, name} = body;
    if (!username || !email || !password || !repeatPassword || !name) {
        sendError(event, createError({
            statusCode: 400,
            statusMessage: 'All fields are required'
        }))
    }
    if(password !== repeatPassword) {
        sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Passwords do not match'
        }))
    }
    const userData = {
        name,
        username,
        email,
        password,
        profileImage: 'https://i.kym-cdn.com/entries/icons/facebook/000/047/210/nah_id_win.jpg'
    }
    return createUser(userData);
});