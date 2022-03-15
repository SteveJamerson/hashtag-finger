import React, { useState } from 'react';
import { IInput } from './interfaces';
import { Container, InputElement, Label } from './styles'

export const Input: React.FC<IInput> = ({ title, variations, ...rest }) => {

   const [active, setActive] = useState(false)

   const [value, setValue] = useState('')

   const handleTextChange = (text: string) => {
      setValue(text)

      if (text !== '') {
         setActive(true)
      } else {
         setActive(false)
      }
   }

   console.log(title)

   return (
      <>
         <Container variations={variations}>
            <InputElement
               type="text"
               variations={variations}
               value={value}
               onChange={(e) => handleTextChange(e.target.value)}
               {...rest} />

            {title && <Label isFilled={active} htmlFor="teststds">
               {title}
            </Label>}
         </Container>
      </>
   )
}