import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { AnimalsRoutes } from "../animals/routes/AnimalsRoutes";


export const AppRouter = () => {
   return (
      <>
         <Routes>
            <Route path="login" element={ <LoginPage /> } />

            <Route path="/*" element={ <AnimalsRoutes /> } />
         </Routes>
      </>
   )
}
