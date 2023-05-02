
import { compare } from "bcryptjs";
import prismaClient from "../prisma";
import { throws } from "assert";

interface authData {
    email: string,
    cpf: string,
    password: string
}

export class AuthUserService {
    async execute({ email, cpf, password }: authData) {

        const user = await prismaClient.user.findFirst({
            where: {
                OR: [
                    {
                        email: {
                            equals: email
                        }
                    },
                    {
                        cpf: {
                            equals: cpf
                        }
                    }
                ]
            }
        })

        if (!user) {
            throw new Error("Email/Cpf/Senha incorretos!")
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email/Cpf/Senha incorretos!")
        }
        const yes = "Login efetuado com sucesso"

        return yes
    }
}