import { Button, Grid, TextField, Stack, Typography, useTheme } from "@mui/material"
import { useState } from "react"
import HeaderUser from "../../components/HeaderUser"

export default function SignUp() {

    const theme = useTheme();

    const [user, setUser] = useState({
        name: "",
        gender: "",
        birth: "",
        cpf: "",
        phone: "",
        email: "",
        password: "",
        passwordRepeat: ""
    })

    return (
        <>

            <HeaderUser />

            <Stack
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"80vh"}
                width={"100vw"}
            >

                <Typography sx={{
                    maxWidth: "90%",
                    textAlign: "center",
                    color: "secondary.main",
                    fontWeight: "300",
                    fontSize: 22,
                    marginBottom: 3,
                    [theme.breakpoints.only('xs')]: {
                        fontSize: 16
                    },
                }}>
                    Crie sua conta, é so preencher os dados abaixo =)
                </Typography>

                <Grid
                    width={"50vw"}
                    border={1}
                    borderRadius={1}
                    borderColor={"#d3d3d3"}

                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}

                    sx={{
                        [theme.breakpoints.only('md')]: {
                            width: "70vw"
                        },
                        [theme.breakpoints.only('sm')]: {
                            width: "70vw",
                        },
                        [theme.breakpoints.only('xs')]: {
                            width: "90vw",
                        },
                    }}
                >
                    <Typography sx={{color:"#a3a2a2"}}>Dados Iniciais</Typography>
                    <Grid container xs={12} p={2} spacing={2}>
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <TextField
                                label="Nome: "
                                type="email"
                                variant="outlined"
                                value={user.name}
                                onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}

                                sx={{
                                    width: "100%",

                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <TextField
                                label="Gênero: "
                                type="gender"
                                variant="outlined"
                                value={user.gender}
                                onChange={(e) => setUser((prev) => ({ ...prev, gender: e.target.value }))}
                                sx={{
                                    width: "100%",

                                }}
                            />
                        </Grid>
                    </Grid>

                    <Typography sx={{color:"#a3a2a2"}}>Dados Numéricos</Typography>
                    <Grid container xs={12} p={2} spacing={2}>
                        <Grid item xs={12} sm={12} md={4} lg={5}>
                            <TextField
                                label="birth: "
                                type="text"
                                variant="outlined"
                                value={user.birth}
                                onChange={(e) => setUser((prev) => ({ ...prev, birth: e.target.value }))}
                                sx={{
                                    width: "100%",

                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <TextField
                                label="cpf: "
                                type="text"
                                variant="outlined"
                                value={user.cpf}
                                onChange={(e) => setUser((prev) => ({ ...prev, cpf: e.target.value }))}
                                sx={{
                                    width: "100%",

                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={3}>
                            <TextField
                                label="Telefone: "
                                type="tel"
                                variant="outlined"
                                value={user.phone}
                                onChange={(e) => setUser((prev) => ({ ...prev, phone: e.target.value }))}
                                sx={{
                                    width: "100%",

                                }}
                            />
                        </Grid>
                    </Grid>

                    <Typography sx={{color:"#a3a2a2"}}>Seu melhor E-mail</Typography>
                    <Grid container xs={12} p={2} spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
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
                    </Grid>

                    <Typography sx={{color:"#a3a2a2"}}>Dados Sigilosos</Typography>
                    <Grid container xs={12} p={2} spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <TextField
                                label="Senha: "
                                type="password"
                                variant="outlined"
                                value={user.password}
                                onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                                sx={{
                                    width: "100%",

                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <TextField
                                label="Repita a Senha: "
                                type="password"
                                variant="outlined"
                                value={user.passwordRepeat}
                                onChange={(e) => setUser((prev) => ({ ...prev, passwordRepeat: e.target.value }))}
                                sx={{
                                    width: "100%",

                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"end"}
                        alignItems={"flex-end"}
                        width={"100%"}

                    >
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"


                            sx={{
                                textTransform: "capitalize",
                                width: "30%",
                                margin: "2% 3%"
                            }}
                        >
                            Criar conta
                        </Button>
                    </Grid>

                </Grid>

            </Stack>

        </>
    )
}