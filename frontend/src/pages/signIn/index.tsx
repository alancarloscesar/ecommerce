import "./styleButton.css"
import imgLogo from "../../assets/logo.jpeg"
import { Grid, TextField, useTheme, Typography, Box, Alert, Button, Dialog, AlertTitle } from "@mui/material"
import * as yup from 'yup';
import { FormEvent, useEffect, useState } from "react";
import AlertMessages from "../../components/AlertMessages"


export default function SignIn() {

    const theme = useTheme();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [userValidate, setUserValidate] = useState<any | string>(user.email)
    const [validate, setValidate] = useState(false)


    // useEffect(() => {
    //     validateInputs();
    // })

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();

        validateInputs();

        return <AlertMessages validate={userValidate}/>
        

        // console.log(userValidate)


    }

    async function validateInputs() {
        const schema = yup.object().shape({
            email: yup
                .string()
                .required("Campo email obrigatório")
                .email("Email inválido"),

            password: yup
                .string()
                .required("Campo senha obrigatório")
                .min(6, "A senha deve conter no mínimo 6 caracteres")
        })

        const resultValidate = await schema.validate({
            email: user.email,
            password: user.password
        }).then((result) => {
            // alert("Login efetuadooooo")
            setValidate(true)
        }).catch((err) => {
            setUserValidate(err.errors);
            
            setValidate(false)
        })


        // setUserValidate("okkkk")

        if(resultValidate !== null){
            alert("okkkk")
        }else{
            alert("asdfasdf")
            return <AlertMessages validate={userValidate}/>
        }
    }

    return (
        <>
            <Grid container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    minHeight: "20vh",
                    width: "100vw",
                    backgroundColor: "rgb(51,26,92)",
                    background: "linear-gradient(90deg, rgba(51,26,92,1) 0%, rgba(74,43,126,1) 65%, rgba(96,59,158,1) 100%)"
                }}

                xl={12}
            >

                <Box sx={{
                    [theme.breakpoints.only('xs')]: {
                        display: "none"
                    },
                }}>
                    <img src={imgLogo}
                        id="img"
                        alt="img logo"
                        width={150}
                        height={150}
                        style={{ paddingLeft: 20 }}
                    />
                </Box>
            </Grid >

            <form>
                <Grid container sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "76vh"
                }}>
                    <p>{userValidate}</p>

                    <Typography sx={{
                        maxWidth: "90%",
                        textAlign: "center",
                        color: "secondary.main",
                        fontWeight: "300",
                        fontSize: 22,
                        [theme.breakpoints.only('xs')]: {
                            fontSize: 16
                        },
                    }}>
                        Olá, Bem-vindo à nossa plataforma =)
                    </Typography>

                    <Grid container gap={4} p={3}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "35vw",

                            [theme.breakpoints.only('xs')]: {
                                width: "100vw",
                            },
                            [theme.breakpoints.only('md')]: {
                                width: "50vw"
                            },
                            [theme.breakpoints.only('sm')]: {
                                width: "70vw"
                            },

                        }}
                    >
                        <Grid item xs={12}>
                            <TextField
                                id="standard-search"
                                label="Email: "
                                type="email"
                                variant="outlined"
                                value={user.email}
                                onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}

                                sx={{
                                    width: "100%",

                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="standard-search"
                                label="Senha: "
                                type="password"
                                variant="outlined"
                                value={user.password}
                                onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                                sx={{
                                    width: "100%"
                                }}
                            />
                        </Grid>


                        <Grid item xs={12}>

                            <button onClick={handleLogin}>
                                <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                                <span>Entrar</span>
                            </button>

                        </Grid>

                        <Typography color={"primary.main"}
                            sx={{
                                '&:hover': {
                                    textDecoration: "underline"
                                }
                            }}>
                            <a href="/contato" target="_blank"
                                style={{
                                    textDecoration: "none",
                                }}>
                                Esqueceu a senha?
                            </a>
                        </Typography>

                        <Typography color={"secondary"}
                            sx={{
                                fontWeight: 500,
                                fontSize: 18,
                                '&:hover': {
                                    textDecoration: "underline"
                                }
                            }}>
                            <a href="/contato" target="_blank"
                                style={{
                                    textDecoration: "none",
                                    color: "secondary"
                                }}>
                                Criar conta
                            </a>
                        </Typography>

                    </Grid>

                </Grid>

            </form>

        </>
    )
}
