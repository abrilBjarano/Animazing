import { animals } from '../data/animals';


export const getAnimalById = ( id ) => {

   return animals.find( animal => animal.id === id );

}
