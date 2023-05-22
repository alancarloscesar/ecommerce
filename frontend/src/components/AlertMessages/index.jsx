import { Alert, Button, Dialog, AlertTitle, useTheme } from "@mui/material"
import { useState } from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import useTheme from "@mui/material";


export default function AlertMessages(props) {


    const [open, setOpen] = useState(false);

    const theme = useTheme();


    const handleClick = () => {
        setOpen(true);

        setTimeout(() => {
            setOpen(false)
        }, 3000);
    };





    return (
        <>
            <Button onClick={handleClick} variant="contained">
                Open Alert!
            </Button>
            <Dialog open={open} onClose={handleClick}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    top: "-80%"

                }}
            >
                <Alert
                    open={open}
                    variant="standard"
                    severity="error"
                >
                    <AlertTitle>Erro:</AlertTitle>

                    {props?.validate}

                    <CloseRoundedIcon fontSize="small"
                        sx={{
                            cursor: "pointer",
                            position: "absolute",
                            top: "10%",
                            right: "2%",
                        }}
                        onClick={() => {
                            setOpen(false)
                        }} />
                </Alert>
            </Dialog>
        </>
    )
}