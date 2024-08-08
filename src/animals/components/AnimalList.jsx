import { getAnimalsByHabitat } from "../helpers/getAnimalsByHabitat";
import { AnimalCard } from "./AnimalCard";


export const AnimalList = ({ habitat }) => {

   const animals = getAnimalsByHabitat( habitat );


   return (
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-3 mt-2 custom-container">
         { animals.map( animal => (
            <AnimalCard key={ animal.id } { ...animal } />
         ))}
      </div>
   )
}
