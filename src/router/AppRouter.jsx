import { Navigate, Route, Routes } from "react-router-dom";
import { MarinePage } from "../animals/pages/MarinePage";
import { TerrestrialPage } from "../animals/pages/TerrestrialPage";
import { LoginPage } from "../auth/pages/LoginPage";


export const AppRouter = () => {
   return (
      <>
         <Routes>
            <Route path="terrestrial" element={ <TerrestrialPage /> } />
            <Route path="marine" element={ <MarinePage /> } />

            <Route path="login" element={ <LoginPage /> } />

            <Route path="/*" element={ <Navigate to="terrestrial" /> } />
         </Routes>
      </>
   )
}
