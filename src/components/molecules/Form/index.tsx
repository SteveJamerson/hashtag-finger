import React from 'react';
import { IForm } from './interfaces';
import { Input } from '../../../components/atoms'
import { Container, Title, Button } from './styles'



export const Form: React.FC<IForm> = (...rest) => {
   return (
      <Container {...rest} >
         <Title>Login</Title>
         <Input title="Usuário" variations="primary" />
         <Input title="Senha" variations="primary" />
         <Button>Acessar</Button>
      </Container>
   )
}