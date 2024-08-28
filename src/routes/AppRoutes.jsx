import {Route, Routes} from "react-router-dom"

import HomePage from "../pages/HomePage"
import Burgers from "../pages/Burgers"

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>} exact/>
            <Route path="/burgers" element={<Burgers/>}></Route>
        </Routes>
    )
}