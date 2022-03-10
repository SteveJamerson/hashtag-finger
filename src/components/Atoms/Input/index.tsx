import React from 'react';
import { IInput } from './intefaces';
import { Container, InputDown, Label } from './styles'

const Input: React.FC<IInput> = (title, ...rest) => {

   return (
      <Container>
         <Label>{title}</Label>
         <InputDown
            type="text"
            {...rest}
         />
      </Container>
   )
}

export default Input