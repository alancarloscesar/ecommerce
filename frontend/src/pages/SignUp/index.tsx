import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"

export default function SignUp() {

    const [user, setUser] = useState({
        name: "",
        gender: "",
        birth: "",
        cpf: "",
        phone: "",
        email: "",
        password: "",
    })

    return (
        <>

            <Grid
                // bgcolor={"#ff0"}
                maxWidth={"50vw"}
                border={1}
            >

                <Grid container xs={12} p={2} spacing={2}>
                    <Grid item xs={8}>
                        <TextField
                            label="Nome: "
                            type="email"
                            variant="outlined"
                            value={user.email}
                            onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}

                            sx={{
                                width: "100%",

                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Gênero: "
                            type="gender"
                            variant="outlined"
                            sx={{
                                width: "100%",

                            }}
                        />
                    </Grid>
                </Grid>

                <Grid container xs={12} p={2} spacing={2}>
                    <Grid item xs={5}>
                        <TextField
                            label="birth: "
                            type="text"
                            variant="outlined"
                            value={user.email}
                            onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
                            sx={{
                                width: "100%",

                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="cpf: "
                            type="text"
                            variant="outlined"
                            sx={{
                                width: "100%",

                            }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            label="Telefone: "
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

                <Grid container xs={12} p={2} spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Email: "
                            type="email"
                            variant="outlined"
                            sx={{
                                width: "100%",

                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container xs={12} p={2} spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            label="Senha: "
                            type="password"
                            variant="outlined"
                            value={user.email}
                            onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
                            sx={{
                                width: "100%",

                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Repita a Senha: "
                            type="text"
                            variant="outlined"
                            sx={{
                                width: "100%",

                            }}
                        />
                    </Grid>
                </Grid>

                <Button
                    variant="contained"
                    color="primary"
                >
                    Criar
                </Button>

            </Grid>
        </>
    )
}