import { animals } from '../data/animals';


export const getAnimalsByHabitat = ( habitat ) => {
   
   const validHabitats = ['Marino', 'Terrestre'];

   if( !validHabitats.includes( habitat ) ){
      throw new Error (`${ habitat } is not a valid habitat`);
   }

   return animals.filter( animal => animal.habitat === habitat );

};