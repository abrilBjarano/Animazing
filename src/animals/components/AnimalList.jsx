import { getAnimalsByHabitat } from "../helpers/getAnimalsByHabitat";


export const AnimalList = ({ habitat }) => {

   const animals = getAnimalsByHabitat( habitat );


   return (
      <ul>
         { animals.map( animal => (
            <li key={ animal.id }>{ animal.name }</li>
         ))}
      </ul>
   )
}
