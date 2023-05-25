import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, Grid, useTheme } from '@mui/material';
import sendEmail from "../../assets/mailsend.gif"

export default function ModalForgotPassword() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("")

    const theme = useTheme()
    useEffect(()=>{
        handleClickOpen()
    },[])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Recuperação de senha</DialogTitle>
                <Divider />
                <DialogContent>

                    <Grid
                        container
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        textAlign={'center'}
                    >

                        <Grid
                            item
                            xs={12} md={7}
                        >
                            <DialogContentText
                                textAlign={'justify'}
                                p={3}
                                color={"#616161"}

                                sx={{
                                    [theme.breakpoints.only('xs')]: {
                                        display: 'none'
                                    },
                                }}
                            >
                                Trabalhamos com um sistema seguro de recuperação de senha,
                                por favor digite seu email e verifique sua caixa de entrada.
                            </DialogContentText>
                        </Grid>

                        <Grid
                            item
                            xs={12} md={5}
                        >
                            <img
                                src={sendEmail}
                                alt="gif de email"
                                width={230}
                                height={230}
                            />
                        </Grid>

                    </Grid>


                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email de Recuperação"
                        type="email"
                        fullWidth
                        variant="outlined"
                        size='medium'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='text'
                        onClick={handleClose}>
                        Recuperar Senha
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}