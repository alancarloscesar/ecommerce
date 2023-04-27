import { promises } from "dns";
import { connection } from "../database/connectionFactory";
import { compare } from "bcryptjs";

interface authData {
    id:number,
    email: string,
    cpf: string,
    password: string
}

export class AuthUserService {
    async execute({ id, email, cpf, password }: authData) {
        // let passwordMatch = await compare(password, )

        let query = connection.query(`SELECT * FROM user WHERE (email='${email}' OR cpf='${cpf}') AND password='${password}'`).spread((users:authData) => {
            // console.log(users[0].name);

            return users;
        });
     
        console.log(query)

        return query
    }
}