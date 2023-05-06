
import { Locale, format, differenceInYears, formatDistance } from "date-fns"
import { ptBR } from "date-fns/locale";
import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface userProps {
  name: string,
  gender: string,
  birth: string,
  cpf: string,
  phone: string,
  email: string,
  password: string
}

export class AddUserService {
  async execute({ name, gender, birth, cpf, phone, email, password }: userProps) {

    //evitando duplicidade de user no bd
    const userExist = await prismaClient.user.findFirst({
      where: {
        OR: [
          {
            name: {
              equals: name
            }
          },
          {
            cpf: {
              equals: cpf
            }
          },
          {
            email: {
              equals: email
            }
          },
        ]
      }
    })

    if (userExist) {
      throw new Error("Usuário já cadastrado!!!")
    }

    if (name === "" || gender === "" || birth === "" || cpf === "" || phone === "" || email === "" || password === "") {
      throw new Error("Preencha todos os campos!!!")
    }

    //calculo para distancia de datas - idade maior que 18 anos
    let currentDate = format(new Date(), 'yyyy,MM,dd', { locale: ptBR })
    let birthDate = format(new Date(`${birth}`), 'yyyy,MM,dd', { locale: ptBR })
    let age = differenceInYears(new Date(currentDate), new Date(birthDate))

    if (age >= 18) {

      const passHash = await hash(password, 8);//criptografando senha

      const userAdd = await prismaClient.user.create({
        data: {
          name,
          gender,
          birth,
          cpf,
          phone,
          email,
          password: passHash
        }
      })

      return userAdd;
      
    } else {
      throw new Error("Precisa ser maior de idade para o cadastro!")
    }

  }
}