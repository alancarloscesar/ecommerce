import "./styleButton.css"
import { Grid, TextField, useTheme, Typography, Button, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment } from "@mui/material"
import * as yup from 'yup';
import { FormEvent, useState } from "react";
import AlertMessages from "../../components/AlertMessages"
import HeaderUser from "../../components/HeaderUser";
// import Teste from "../../components/teste"
import ModalForgotPassword from "../../components/ModalForgotPassword"

import { FaAccusoft, FaAddressCard } from 'react-icons/fa';
import { Visibility, VisibilityOff } from "@mui/icons-material";


export default function SignIn() {

    const theme = useTheme();

    const [showModal, setShowModal] = useState(false)

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [userValidate, setUserValidate] = useState<any | string>(user.email)

    const [showAlertStatus, setshowAlertStatus] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();



        validateInputs();


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
                .min(6, "A senha deve conter no mínimo 6 caracteres"),
        })

        await schema.validate({
            email: user?.email,
            password: user?.password
        }).then((result) => {
            // alert("Login efetuadooooo")
            // setValidate(true)
        }).catch((err) => {

            if (err.errors !== "") {
                setshowAlertStatus(true);//status true para mostrar o alert
                setUserValidate(err.errors)
                return
            }
        })

    }

    return (
        <>
            <HeaderUser />

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
                        <FormControl sx={{ width: '100%' }} variant="outlined">
                                <InputLabel>Senha:</InputLabel>
                                <OutlinedInput
                                    value={user.password}
                                    onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Password"
                                                onClick={handleClickShowPassword}
                                                // onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Senha:"
                                />
                            </FormControl>
                            


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
                            {/* <a href="/contato" target="_blank" */}
                            <a onClick={() => setShowModal(true)}
                                style={{
                                    textDecoration: "none",
                                    cursor: "pointer"
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
                            <a href="/signup" target="_blank"
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


            {showModal && <ModalForgotPassword />}
            {showAlertStatus && <AlertMessages validate={userValidate} />}

            

        </>
    )
}
