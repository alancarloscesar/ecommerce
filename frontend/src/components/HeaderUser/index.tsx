import { Container, ImgTitle } from "./style"
import imgLogo from "../../assets/logo.jpeg"

export default function HeaderUser() {


    return (
        <>
            <Container>
                <ImgTitle alt="img logo..." src={imgLogo} />
            </Container>
        </>
    )
}