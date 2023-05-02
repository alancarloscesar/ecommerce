
import { compare } from "bcryptjs";

interface authData {
    email: string,
    cpf: string,
    password: string
}

export class AuthUserService {
    async execute({ email, cpf, password }: authData) {

    }
}