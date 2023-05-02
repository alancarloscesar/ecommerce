import { promises } from "dns";
import { connection } from "../database/connectionFactory";
import { compare } from "bcryptjs";

interface authData {
    email: string,
    cpf: string,
    password: string
}

export class AuthUserService {
    async execute({ email, cpf, password }: authData) {
        
        let query = connection.query(`SELECT id,name,email,gender,phone FROM user WHERE (email='${email}' OR cpf='${cpf}') AND password='${password}'`).spread((results: authData) => {
            // console.log(users[0].name);
            
            return results;
        });
        let queryPass = connection.query(`SELECT password FROM user WHERE (email='${email}' OR cpf='${cpf}') AND password='${password}'`).spread((results: authData) => {
            // console.log(users[0].name);
            
            return results[0].password;
        });
        
        let passwordMatch = await compare(password, "$2a$08$zPAoWLCE2/aZqhe228gJS.peHm0/9T2bJkYVsXgbDDjvLYNMWrKXm")
       
        console.log(passwordMatch)

        return queryPass
    }
}