import { NavLink } from "react-router-dom";
import { useAnimalsRoutesInfo } from "../hooks/useAnimalsRoutesInfo";
import icon from '../../assets/zoology.png';


export const Navbar = () => {

   const { routes, getNavLinkClass } = useAnimalsRoutesInfo();


   return (
      <nav className="navbar navbar-expand navbar-success bg-success rounded-bottom mb-4">
         <div className="d-flex justify-content-center">

            <a className="navbar-brand d-flex align-items-center mx-4">
               <img className="me-2" src={ icon } width="30" height="30" />
               <span className="d-none d-sm-inline">Animazing</span>
            </a>
            
            <div className="collapse navbar-collapse" id="navbarNav">
               <div className="navbar-nav">
                  
                  { routes.map( route => (
                     
                     <NavLink
                        key={ route.name }
                        to={ route.path }
                        className={ getNavLinkClass }
                     >
                           { route.name }
                     </NavLink>

                  ))}

               </div>
            </div>

         </div>
      </nav>
   )
}