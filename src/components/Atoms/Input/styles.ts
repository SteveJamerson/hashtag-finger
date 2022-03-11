import styled, { css } from 'styled-components'
import { ILabel, IInput } from './interfaces'

export const Container = styled.div<IInput>`
   display: flex;
   flex-direction: column;
   min-width: 350px;
   position: relative;
   &:focus-within label {
      transform: translate(0, 12px) scale(0.75);
    }
`;

export const InputElement = styled.input<IInput>`
  border-top: none;
  border-right: none;
  border-left: none;
  height: 40px;
  padding: 24px 16px 0 10px;
  outline: 0;
  border-bottom: 2px solid #E9E9F0;
  background: transparent;
  font-size: 16px;
  opacity: 0.8;
  color: #fff;

    ${props => props.variations === 'secundary' && css`
      height: 120px;  
      width: 1000px;
      border: 1px solid #ccc;
      opacity: 1;
      border-radius: 72px;
      background: #1E3E7B 0% 0% no-repeat padding-box;
      padding: 14px 0 14px 10%;

      font: normal normal normal 50px/55px Rubik;
      letter-spacing: 0px;

      @media (max-width: 620px) {
         height: 50px;  
         border-radius: 28px;
         font: normal normal normal 17px/19px Rubik;
      }

    `}

    @media (max-width: 620px) {
      width: 351px;
    }

}
`;

export const Label = styled.label<ILabel>`

   text-align: left;
   letter-spacing: 0px;
   
   opacity: 1;

   font-size: 16px;
   padding: 0 12px;
   color: #999;
   //color: #fff;
   pointer-events: none;

   position: absolute;

    transform: ${props => props.isFilled ? 'translate(0, 12px) scale(0.75)' : 'translate(0, 26px) scale(1)'};
`;