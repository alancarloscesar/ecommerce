import "./style.css"
import imgLogo from "../../assets/logo.jpeg"
import { Grid, TextField, useTheme, Typography } from "@mui/material"
import { Padding } from "@mui/icons-material"
import ButtonEntry from "./button"

export default function SignIn() {

    const theme = useTheme();


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

                <img src={imgLogo}
                    alt="img logo"
                    width={150}
                    height={150}
                    style={{ paddingLeft: 20 }}
                />
            </Grid >

            <form>
                <Grid container sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "76vh"
                }}>

                    <Typography>
                        Olá, Bem vindo a nossa plataforma =)
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
                                width: "80vw"
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

                                sx={{
                                    width: "100%"
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}  >
                            <TextField
                                id="standard-search"
                                label="Senha: "
                                type="password"
                                variant="outlined"
                                sx={{
                                    width: "100%"
                                }}
                            />
                        </Grid>

                        <Typography>
                           Esqueceu a senha?
                        </Typography>
                        <Typography>
                            Criar conta
                        </Typography>

                        <Grid item xs={12} sx={{
                            backgroundColor: "#ff0"
                        }}>
                            <ButtonEntry />
                        </Grid>
                    </Grid>
                </Grid>

            </form >


        </>
    )
}
