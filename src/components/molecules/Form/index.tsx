import React, { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { Form as FormUnform } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { Input } from "../../atoms";
import { IForm } from "./interface";
import { Container, Title, Button } from "./styles";
import getValidationErrors from "../../../utils/getValidationError";
import api from "../../../services/api";
import { useAuth } from '../../../hooks/useAuth';


export const Form: React.FC<IForm> = (...rest) => {

   const { signIn } = useAuth()

   interface SearchParams {
      search: string;
   }

   const formRef = useRef<FormHandles>(null)

   interface LoginFormData {
      email: string,
      password: string,
   }

   const handleCreateUser = useCallback(async (data: LoginFormData) => {

      try {

         formRef.current?.setErrors({});

         const schema = Yup.object().shape({
            email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
            password: Yup.string().min(6, 'No mínimo 6 digitos')
         })

         await schema.validate(data, {
            abortEarly: false, //mostrar todos os erros
         })

         const { email, password } = data

         console.log(data, "digited")
         signIn(email, password)

      } catch (err) {
         if (err instanceof Yup.ValidationError) { //se o erro vier do validationError (email invalido, sem senha)
            const errors = getValidationErrors(err)
            formRef.current?.setErrors(errors);
            return;
         }
      }

   }, [])



   return (
      <Container {...rest}>
         <FormUnform ref={formRef} onSubmit={handleCreateUser}  >
            <Title>Login</Title>
            <Input label="Usuário" name="email" variant="outline" id="user" type="text" />
            <Input label="Senha" name="password" variant="outline" id="password" type="password" />
            <Button type="submit">Acessar</Button>
         </FormUnform>
      </Container>
   );
};
