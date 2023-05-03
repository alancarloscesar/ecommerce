const nodemailer = require("nodemailer");

export async function mailTransporte() {

    const CLIENT_ID = "966412077609-n4udpj12rvt34dj0agea8go0st8irb36.apps.googleusercontent.com"

    const CLIENT_SECRET = "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"

    try {

        const transporter = nodemailer.createTransport({

            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "alancarloscesarcw@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                accessToken: "ya29.a0AWY7CklXe1BCOLn8Rm86Ks6ZetttTUxzVM1mWV9U64InMmxusFpQohz6TBVArsV0RLYp2EFEzvCkoG1OY4SKg6Rvq-t4_R1Y-5q8gp9YdT0DrntK6fnQ-Mx5a_cBs9Ld3M3ExcO3PBFVsITTd651TlYLwk8OIlcaCgYKAe0SAQ8SFQG1tDrpjPEni5a9LMa5WZs6WKXR3Q0166",
                pass: "carolfrota0221"
            }
        });

        const mailOptions = {
            from: "Ecommerce <alancarloscesarcw@gmail.com>",
            to: "alancarloscesar@gmail.com",
            subject: "aqui vai o titulo do email",
            text: " sou o corpo do email....",
            html: "<h1>SOu o html do email, personalize ... </h2>"
        }

        const result = await transporter.sendMail(mailOptions)

        return result;

        // https://www.youtube.com/watch?v=vjv6vkAVNYU&t=682s

    } catch (error) {
        console.log(error)
    }
}       
