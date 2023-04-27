
import { config } from "dotenv";
import { connection } from "../database/connectionFactory";
import { Locale, format, differenceInYears, formatDistance } from "date-fns"
import { ptBR } from "date-fns/locale";
import { hash } from "bcryptjs";

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

    connection.connect(function (err) {
      if (err) throw err;

      connection.query(`SELECT * FROM user WHERE name="${name}" OR email="${email}" OR cpf="${cpf}"`, (err, result: any) => {
        if (err) throw err;

        getResult(result)

      })
    })

    const getResult = async function (item: any) {

      let convertItem = Object.keys(item).length;

      if (convertItem > 0) {//se tiver user

        // console.log("userrrr")
        global.msg = { error: "Usuário já cadastrado!" }
        return global.msg

      } else {

        const passwordHash = await hash(password, 8)

        let sql = `INSERT INTO user (name, gender, birth, cpf, phone, email, password) VALUES ('${name}', '${gender}', '${brith}', '${cpf}', '${phone}', '${email}', '${password}')`;

        let currentDate = format(new Date(), 'yyyy,MM,dd', { locale: ptBR })
        let birthDate = format(new Date(`${brith}`), 'yyyy,MM,dd', { locale: ptBR })

        let age = differenceInYears(new Date(currentDate), new Date(birthDate))

        if (age >= 18) {
          await connection.execute(sql);
          global.msg = { success: "Usuário cadastrado com sucesso!" }
          return global.msg
        }
        return global.msg = { error: "Precisa ser maior de idade para o cadastro!" }

      }
    }
          
      if (name === "" || gender === "" || brith === "" || cpf === "" || phone === "" || email === "" || password === "") {
        throw new Error("Preencha todos os campos!!!")
      }
      
      let currentDate = format(new Date(), 'yyyy,MM,dd', { locale: ptBR })
      let birthDate = format(new Date(`${brith}`), 'yyyy,MM,dd', { locale: ptBR })
      
      let age = differenceInYears(new Date(currentDate), new Date(birthDate))
      console.log("Age: " + age)
      
      if (age >= 18) {
        return global.msg;
      } else {
      throw new Error("Precisa ser maior de idade para o cadastro!")
    }
    
  }
}