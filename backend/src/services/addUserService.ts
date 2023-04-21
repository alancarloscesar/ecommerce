
import { config } from "dotenv";
import { connection } from "../database/connectionFactory";

interface userProps {
    name: string,
    gender: string,
    brith: string,
    cpf: string,
    phone: string,
    email: string,
    password: string
}

export class AddUserService {
    async execute({ name, gender, brith, cpf, phone, email, password }: userProps) {
        let sql = `INSERT INTO user (name, gender, birth, cpf, phone, email, password) VALUES ('${name}', '${gender}', '${brith}', '${cpf}', '${phone}', '${email}', '${password}')`;
        const useradd = await connection.execute(sql)

        return useradd;

        //verificar user iguais - SELECT * FROM user WHERE name="ALAN CARLOS TOMAZ CÉSAR" OR email="alancarloscesar@gmail.com" OR cpf="23456789012"
        //verificar idade >18 anos
        //campos obrigatorios
        //

    }
}