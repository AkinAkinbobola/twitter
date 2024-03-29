import {userTransformer} from "~/server/transformers/users.js";

export default defineEventHandler(async (event) => {
    return {
        user: userTransformer(event.context.auth?.user)
    }
})