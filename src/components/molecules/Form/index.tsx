import React, { useRef, useState } from "react";
import { Form as FormUnform } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { Button } from "../../atoms";
import { Input } from './InputForm'
import { IForm } from "./interface";
import { Container, Title } from "./styles";
import getValidationErrors from "../../../utils/getValidationError";
import { useAuth } from '../../../hooks/useAuth';
import { useToast } from '../../../hooks/useToast'


export const Form: React.FC<IForm> = (...rest) => {

   const { signIn } = useAuth()
   const { addToast } = useToast()
   const [isError, setIsError] = useState(false);

   const formRef = useRef<FormHandles>(null)

   interface LoginFormData {
      email: string,
      password: string,
   }

   const checkError = () => {
      if (isError) {
         setIsError(false)
      }
      console.log("entrou")
   }

   const handleCreateUser = async (data: LoginFormData) => {

      try {

         formRef.current?.setErrors({});

         const schema = Yup.object().shape({
            email: Yup.string().required('e-mail obrigatório').email('digite um e-mail válido'),
            password: Yup.string().min(6, 'senha deve ter mínimo 6 digitos')
         })

         await schema.validate(data, {
            abortEarly: false,
         })

         const { email, password } = data

         const userFound = signIn(email, password)

         if (!userFound) {
            setIsError(true)
            addToast({
               title: 'Erro na autenticação',
               type: 'error',
               description: 'Ocorreu um erro ao tentar fazer login, verifique se os dados estão corretos'
            })
         } else {
            addToast({
               title: 'Autenticação realizada',
               type: 'success',
               description: 'Autenticação feita com sucesso'
            })
         }
      } catch (err) {
         if (err instanceof Yup.ValidationError) {
            const errors = getValidationErrors(err)
            formRef.current?.setErrors(errors);

            addToast({
               title: 'Erro na autenticação',
               type: 'error',
               description: `Ocorreu um erro ao tentar fazer login, ${err.errors[0]}`
            })

            setIsError(true)

            return;
         }
      }
   }

   return (
      <Container {...rest}>
         <FormUnform ref={formRef} onSubmit={handleCreateUser}  >
            <Title>Login</Title>
            <Input label="Usuário" name="email" variant="outline" id="user" type="text" onChange={checkError} />
            <Input label="Senha" name="password" variant="outline" id="password" type="password" onChange={checkError} />
            <Button variant="secundary" disabled={isError} type="submit">Acessar</Button>
         </FormUnform>
      </Container>
   );
};
