import { ButtonProps } from './interface';
import styled, { css } from 'styled-components';
import { shade } from 'polished'

export const ButtonComponent = styled.button<ButtonProps>`
   font-family: inherit;
   display: inline-flex;
   place-content: center;
   align-items: center;
   width: fit-content;
   gap: 0.75rem;
   font-weight: 700;
   padding: 0.5rem 1.5rem;
   border: 0;
   border-radius: 3rem;
   color: inherit;
   background-color: transparent;
   cursor: pointer;

   ${(props) =>
      props.color === 'primary' &&
      css`
         background-color: #72efdb;
         color: #0b1741;
         transition: background 0.2s;

         &:hover {
            background-color: ${shade(0.2, '#72efdb')};
         }

      `}
   ${(props) =>
      props.color === 'secondary' &&
      css`
         background-color: #1e3e7b;
         color: white;

         &:hover {
            background-color: ${shade(0.2, '#1e3e7b')};
         }

      `}
    ${(props) =>
      props.variant === 'link' &&
      css`
         text-decoration: underline;
         display: inline-flex;
         padding: 0;
         background-color: transparent;
         color: #72efdb;
         min-width: auto !important;
         margin: 0 0.25rem;
      `}
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
   }

   & + & {
      margin-left: 0.5rem;
   }

   ${(props) =>
      props.variant === 'secundary' &&
      css`
      width: 205px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
   
      background: rgba(114, 239, 219, 1);
      border-radius: 34px;
   
      font-size: 19px;
      font-family: 'Rubik';
      font-weight: 500;
      letter-spacing: 0.57px;
      color: #0b1741;
      text-transform: uppercase;
      margin: 0 auto;
`};

`;
