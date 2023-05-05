const nodemailer = require("nodemailer");

export async function mailTransporte() {

    try {

        const transporter = nodemailer.createTransport({

            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'alancarloscesarob@gmail.com',
                pass: 'zqmccavkbjufujjv',
            },
        });

        const mailOptions = {
            from: "Ecommerce - Recuperação de Senha <alancarloscesarcw@gmail.com>",
            to: "carolfrotah@gmail.com",
            subject: "Solicitação de Recuperação de Senha",
            text: " sou o corpo do email....",
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <!-- <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title> -->
            </head>
            <body>
                <h1 class="teste" style="background-color: #ff0;">Testando html do email</h1>
                
            </body>
            </html>
            `
        }

        const result = await transporter.sendMail(mailOptions)
        console.log(result)

        return result;

        // configemail
        // https://stackoverflow.com/questions/59188483/error-invalid-login-535-5-7-8-username-and-password-not-accepted

    } catch (error) {
        console.log(error)
    }
}       
