
import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken"

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

        const token = sign(
            {
                name: user.name as string,
                email: user.email as string
            },
            process.env.JWT_SECRET,
            {
                subject: user.id.toString(),//so aceita id string
                expiresIn: "30d"
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token,
        }

    }
}