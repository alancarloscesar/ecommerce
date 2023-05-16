import { Route, Routes } from "react-router-dom"
import InitialPage from "../pages/InitialPage"
import Contato from "../pages/contato"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<InitialPage />} />

        </Routes>
    )
}