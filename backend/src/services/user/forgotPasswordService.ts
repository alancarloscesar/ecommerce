import { userInfo } from "os";
import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface userProps {
    email: string;
    newPass: string;
}

export class ForgotPassword {
    async execute({ email, newPass }: userProps) {

        const passHash = await hash(newPass, 8);//criptografando senha

        const forgot = await prismaClient.user.updateMany({
            where: {
                email
            },
            data: {
                password: passHash
            }
        })

        if (email === "" || newPass === "") {
            throw new Error("Campos obrigatórios não preenchidos!")
        }
        if (newPass.length < 6) {
            throw new Error("Você deve inserir uma senha maior que 5 digitos!")
        }



        return forgot;
    }
}