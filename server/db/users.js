import {prisma} from "."
import bcrypt from "bcrypt";

export const createUser = (userData) => {
    const finalUserData = {
        ...userData,
        password: bcrypt.hashSync(userData.password, 10)
    }
    return prisma.users.create({
        data: finalUserData
    })
}

export const getUserByUsername = (username) => {
    return prisma.users.findUnique({
        where: {
            username
        }
    })
}