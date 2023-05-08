import prismaClient from "../../prisma";


class DetailUserService {
    async execute(user_id: string) {

        const user_id_exist = await prismaClient.user.findFirst({
            where: {
                id: Number(user_id)
            }
        })

        if (!user_id_exist) {
            throw new Error("Usuário não encontrado.")
        }

        const detailuser = await prismaClient.user.findFirst({

            where: {
                id: Number(user_id)
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        })
        return detailuser;
    }
}

export { DetailUserService }