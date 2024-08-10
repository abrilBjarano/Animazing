import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getAnimalById } from "../helpers/getAnimalById";
import { useMemo } from "react";


export const AnimalPage = () => {

   const { id } = useParams();
   const navigate = useNavigate();

   const animal = useMemo( () => getAnimalById( id ), [ id ]);

   const animalImgUrl = `/assets/animals/${ id }.jpg`;


   if (!animal) {
      return <Navigate to="/" />;
   }


   const onGoBack = () => {
      navigate(-1);
   };


   return (
      <div className="container mt-5">
         <div className="row">
            {/* Imagen en pantallas pequeñas y la información debajo */}
            <div className="col-12 mb-3 d-md-none">
               <img
                  src={ animalImgUrl }
                  alt={ animal.name }
                  className="img-fluid w-100 rounded"
               />
            </div>
            {/* Información en pantallas pequeñas */}
            <div className="col-12 d-md-none">
               <h2 className="mb-4 d-flex justify-content-center">{ animal.name }</h2>
               <p>{ animal.description }</p>
               <p><strong>Species:</strong> { animal.species }.</p>
               <p><strong>Hábitat:</strong> { animal.habitat }.</p>
               <p><strong>Años de vida:</strong> { animal.lifespan }.</p>
               <p><strong>Domesticable:</strong> { animal.domesticable }.</p>
               <p><strong>Dieta:</strong> { animal.diet }.</p>
               <p><strong>Dato curioso:</strong> { animal.interestingFact }</p>
            </div>

            {/* Imagen en pantallas grandes y la información al lado */}
            <div className="col-md-4 col-12 mb-3 d-none d-md-block">
               <img
                  src={ animalImgUrl }
                  alt={ animal.name }
                  className="img-fluid rounded"
               />
            </div>
            <div className="col-md-8 col-12 d-none d-md-block">
               <h2>{ animal.name }</h2>
               <p>{ animal.description }</p>
               <p><strong>Species:</strong> { animal.species }.</p>
               <p><strong>Hábitat:</strong> { animal.habitat }.</p>
               <p><strong>Años de vida:</strong> { animal.lifespan }.</p>
               <p><strong>Domesticable:</strong> { animal.domesticable }.</p>
               <p><strong>Dieta:</strong> { animal.diet }.</p>
               <p><strong>Dato curioso:</strong> { animal.interestingFact }</p>
            </div>
         </div>
         <div className="d-flex justify-content-end">
            <button
               onClick={ onGoBack }
               className="btn btn-info my-2">
                  Regresar
            </button>
         </div>
      </div>
   );
};
