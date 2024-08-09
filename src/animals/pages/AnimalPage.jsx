import { Navigate, useParams } from "react-router-dom";
import { getAnimalById } from "../helpers/getAnimalById";


export const AnimalPage = () => {

   const { id } = useParams();
   const animal = getAnimalById( id );

   if( !animal ){
      return <Navigate to={ "/" }/>
   }

   return (
      <div>AnimalPage</div>
   )
}
