import { ValidationError } from 'yup'

interface Errors {
   [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {

   const ValidationErrors: Errors = {}

   err.inner.forEach(error => { //err.inner onde estao as mensagens de erros
      if (error.path) {
         ValidationErrors[error.path] = error.message //nome do array(key) path = msg do erro
      }
   })

   return ValidationErrors
}