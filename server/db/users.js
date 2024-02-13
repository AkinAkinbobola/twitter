import {prisma} from "."

export const createUser = (userData) => {
    return prisma.users.create({
        data: userData
    })
}