import { TextFieldProps } from './interface';
import styled, { css } from 'styled-components';

export const Component = styled.div<{ variant?: string }>`
   position: relative;
   margin-bottom: 1rem;
   color: #72efdb;

   @media (min-width: 767px) {
      ${(props) =>
         props.variant === 'fill' &&
         css`
            max-width: 1000px;
            width: 100%;
            margin: auto;
            margin-bottom: 1rem;
         `}
   }

   svg {
      position: absolute;
      z-index: 1;
      left: 1.5rem;
      top: 0;
      bottom: 0;
      margin: auto;

      & + input {
         padding-left: 3.5rem;
      }

      @media (min-width: 767px) {
         left: 2rem;
         width: 24px;
         height: 24px;

         & + input {
            padding-left: 5rem;
            font-size: 24px;

            &::placeholder {
               font-size: 24px;
            }
         }
      }
   }
`;

export const InputComponent = styled.input<TextFieldProps>`
   display: block;
   width: 100%;
   font-weight: 400;
   color: white;
   background-color: transparent;
   padding: 1rem 0.5rem;
   transition: 0.3s;
   border-color: ${(props) => props.error && 'red'};
   outline: 0;

   ${(props) =>
      props.variant === 'outline' &&
      css`
         border: 0px solid #e9e9f0;
         border-bottom-width: 1px;
      `}
   ${(props) =>
      props.variant === 'fill' &&
      css`
         border: 0px;
         border-radius: 10rem;
         height: 50px;
         color: #72efdb;
         padding: 0.5rem 1.5rem;
         background: #1e3e7b60;
         backdrop-filter: blur(30px);
         max-width: 1000px;

         &::placeholder {
            color: #8d9da2;
            font-size: 16px;
            font-weight: 500;
         }

         @media (min-width: 767px) {
            height: 75px;
         }
      `}
`;
export const LabelComponent = styled.label<
   HTMLLabelElement | { focused: boolean }
>`
   position: absolute;
   top: 0;
   left: 0;
   color: white;
   transition: 0.3s;
   pointer-events: none;
   transform: ${(props) =>
      props.focused
         ? 'translate(0, -.75rem) scale(0.75)'
         : 'translate(0, .5rem) scale(1)'};
`;
