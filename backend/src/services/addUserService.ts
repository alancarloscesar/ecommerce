
import { config } from "dotenv";
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