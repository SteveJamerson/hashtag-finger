import { ButtonProps } from './interface';
import styled, { css } from 'styled-components';

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

   ${(props) =>
      props.color === 'primary' &&
      css`
         background-color: #72efdb;
         color: #0b1741;
      `}
   ${(props) =>
      props.color === 'secondary' &&
      css`
         background-color: #1e3e7b;
         color: white;
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
`;
