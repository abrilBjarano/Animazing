import { useForm } from "../hooks/useForm";


export const SearchPage = () => {

   const { inputValue, onSubmit, onChange } = useForm();


   return (
      <> 
         <form onSubmit={ onSubmit }>
            <input
               value={ inputValue }
               onChange={ onChange }
               className="form-control"
               placeholder="Busca algún animal 🦜"
               type="text"
               name="searchText"
            />
         </form>

         <div className="mt-4">
            <h4 className="mb-3">Resultados</h4>

            <div className="alert alert-danger">
               No se encontró { inputValue }
            </div>
         </div>
      </>
   )
}
