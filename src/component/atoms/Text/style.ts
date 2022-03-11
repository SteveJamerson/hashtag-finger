import styled, { css } from 'styled-components';
import { TextProps } from './interface';

const weight = {
   light: 300,
   regular: 400,
   medium: 500,
   'semi-bold': 600,
   bold: 700,
   'extra-bold': 800,
   bolder: 900,
};

export const TextComponent = styled.p<TextProps>`
   color: ${(props) => (props.color === 'primary' ? '#FFFFFF' : '#D9D9D9')};
   font-weight: ${(props) => props.weight && weight[props.weight]};
   font-size: ${(props) => props.size};
   text-align: ${(props) => props.align};
   white-space: ${(props) => props.wrap};
   margin: ${(props) => props.margin};

   ${(props) =>
      props.variant === 'heading' &&
      css`
         font-weight: ${weight.bold};
      `};
`;
