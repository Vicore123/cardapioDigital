import Header from "../components/Header";
import AppRoutes from "../routes/AppRoutes";
import { BrowserRouter } from "react-router-dom"

export default function Layout() {
    return(
        <BrowserRouter>
            <Header/>
            <AppRoutes/>
            
        </BrowserRouter>
    )
}