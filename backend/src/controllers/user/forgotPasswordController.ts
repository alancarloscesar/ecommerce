import { ForgotPassword } from "../../services/user/forgotPasswordService";
import { Request, Response } from "express";

export class ForgotPasswordController {
    async handle(req: Request, res: Response) {
        const forgotPassService = new ForgotPassword();

        const email = req.query.email as string;
        const newPass = req.query.newPass as string;

        await forgotPassService.execute({
            email,
            newPass
        })

        res.json({
            "Message": `Senha do user ${email} alterada com sucess!`
        })
    }
}