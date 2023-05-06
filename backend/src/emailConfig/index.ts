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
            from: "Ecommerce - Recuperação de Senha <alancarloscesarob@gmail.com>",
            to: "alancarloscesar@gmail.com",
            subject: "Solicitação de Recuperação de Senha",
            text: " sou o corpo do email....",
            html: `
            <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body style="
background-color: #212121;
color: #9989b7; font-family: monospace;
text-align: center;
">

    <br>
    <br>
    <br>

    <img src="" alt="aqui vai a logo pegando os 100%">

    <div style="
    color: #bdb4cd;
    width: 100vw;
    height: 20vh;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    ">

        <h1 style=" 
        position: absolute;
        top: 8%;
        text-align: center;
        right: 28%;
        ">Solicitação de Redefinição de Senha.
        </h1>

    </div>

    <div style="width: 100vw; height: 1px; background-color: #bdb4cd;"></div>

    <div class="content">
        <h3>Olá, <strong>Alan</strong>!</h3>
        <h3>Vimos que você está redefinindo sua senha na nossa plataforma.</h3>
        <h3>Clique no botão abaixo para confirmar sua nova senha.</h3>
    </div>

    <br>
    <br>

    <a href="#" style="
    background-color: #321a5d; 
    text-decoration: none; 
    padding: 15px 30px;
    margin: 5% 0;
    border-radius: 30px;
    color: #bdb4cd;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 40px;

    ">Redefinir Senha</a>

    <br>
    <br>
    <br>
    <br>

    <div>
        <strong>Abraços,</strong>
        <strong>Equipe Ecommerce.</strong>
    </div>

    <br>
    <br>
    <br>
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
