import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { TerrestrialPage } from "../pages/TerrestrialPage";
import { MarinePage } from "../pages/MarinePage";


export const AnimalsRoutes = () => {

   return (
      <>
         <Navbar />

         <Routes>
            <Route path="terrestrial" element={ <TerrestrialPage /> } />
            <Route path="marine" element={ <MarinePage /> } />

            <Route path="/*" element={ <Navigate to="terrestrial" /> } />
         </Routes>
      </>
   )
}