import { useState } from "react";


export const useForm = () => {

   const [ inputValue, setInputValue ] = useState('');

   const onSubmit = ( event ) => {
      event.preventDefault();
      setInputValue('');
   };

   const onChange = ({ target }) => {
      setInputValue( target.value );
   };

   return {
      inputValue,
      onSubmit,
      onChange,
   }
}
