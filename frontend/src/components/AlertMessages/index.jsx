import { Alert, Button, Dialog, AlertTitle, useTheme } from "@mui/material"
import { useState, useEffect } from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import useTheme from "@mui/material";


export default function AlertMessages(props) {


    const [open, setOpen] = useState(true);

    // const theme = useTheme();

    useEffect(() => {
        handleClick();
    })

    const handleClick = () => {
        setOpen(true);

        // console.log("alert abertoooo")

        setTimeout(() => {
            setOpen(false)
        }, 1000);
    };





    return (
        <>
            {/* <Button onClick={handleClick} variant="contained">
                Open Alert!
            </Button> */}
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
                    {/* testando meu alert.... */}

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