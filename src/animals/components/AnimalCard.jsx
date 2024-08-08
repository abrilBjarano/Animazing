import { Link } from "react-router-dom";


export const AnimalCard = ({ id, name, habitat, species, description }) => {

   const animalImgUrl = `/assets/animals/${ id }.jpg`;


   return (
      <div className="col mb-2">
         <div className="card h-100">
            <div className="row no-gutters h-100">

               <div className="col-2">
                  <img src={ animalImgUrl } alt={ name } className="card-img h-100" />
               </div>

               <div className="col-10 d-flex flex-column justify-content-center align-items-center text-center p-3">
                  <Link
                     to={`/animal/${ id }`} 
                     className="mb-3 h4">
                        { name }
                  </Link>
                  <p className="text-wrap text-muted">{ species }</p>
               </div>

               
        </div>
      </div>
    </div>
   )
}
