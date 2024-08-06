import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { TerrestrialPage } from "../pages/TerrestrialPage";
import { MarinePage } from "../pages/MarinePage";
import { SearchPage } from "../pages/SearchPage";
import { AnimalPage } from "../pages/AnimalPage";


export const AnimalsRoutes = () => {

   return (
      <>
         <Navbar />

         <Routes>
            <Route path="terrestrial" element={ <TerrestrialPage /> } />
            <Route path="marine" element={ <MarinePage /> } />

            <Route path="search" element={ <SearchPage /> } />
            <Route path="animal" element={ <AnimalPage /> } />

            <Route path="/*" element={ <Navigate to="terrestrial" /> } />
         </Routes>
      </>
   )
}