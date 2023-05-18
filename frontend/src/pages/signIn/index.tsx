import "./style.css"
import imgLogo from "../../assets/logo.jpeg"
import { Grid, TextField, useTheme, Typography, Box, Alert, Button } from "@mui/material"
import ButtonEntry from "./button"
import * as yup from 'yup';
import { FormEvent, useState } from "react";
import WarningIcon from '@mui/icons-material/Warning';

export default function SignIn() {

    const theme = useTheme();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [userValidate, setUserValidate] = useState<any | string>(user.email)

    async function handleLogin(e: FormEvent) {
        e.preventDefault();

        validateInputs();

        console.log(user.email)
        console.log(user.password)
        //aqui vai logar
    }

    async function validateInputs() {
        const schema = yup.object().shape({
            email: yup
                .string()
                .required("Campo email obrigatório")
                .email("Email inválido"),

            password: yup
                .string()
                .required("campo senha obrigatório")
                .min(6, "Mínimo 6 caracteres")
        })

        await schema.validate({
            email: user.email,
            password: user.password
        }).then((result) => {
            setUserValidate(result)
            // console.log(userValidate)
        }).catch((err) => {
            setUserValidate(err.errors);
            // console.log(userValidate)
        })
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
                            // backgroundColor: "#ff0",

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
                            <ButtonEntry validate={userValidate} />
                            <button onClick={handleLogin}>teste</button>
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

                    <Alert
                        color={"error"}
                        variant="filled"
                    >
                        <Typography color="danger" fontWeight="200">
                            This file was successfully deleted
                        </Typography>
                    </Alert>

                    
                </Grid>

            </form >



        </>
    )
}
