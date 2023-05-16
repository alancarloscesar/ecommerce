import { Route, Routes } from "react-router-dom"
import InitialPage from "../pages/InitialPage"
import Contato from "../pages/contato"
import SignIn from "../pages/signIn"


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="*" element={<InitialPage />} />

        </Routes>
    )
}