import React from 'react';
import { IForm } from './interfaces';
import * as Atoms from '../../Atoms'
import { Container, Title, Button } from './styles'



const Form: React.FC<IForm> = (...rest) => {
   return (
      <Container {...rest} >
         <Title>Login</Title>
         <Atoms.Input title="Usuário" variations="primary" />
         <Atoms.Input title="Senha" variations="primary" />
         <Button>Acessar</Button>
      </Container>
   )
}

export default Form