import { ContainerProps } from './interface';
import styled, { css } from 'styled-components';
import { Box } from '../Box';
import Theme from '../../tokens/theme';

export const ContainerComponent = styled(Box)<ContainerProps>`
   width: 100%;
   margin: auto;

   & > * {
      width: 100%;
   }

   @media (min-width: ${Theme.breakPoints.mobile}) {
      max-width: 580px;
   }

   @media (min-width: ${Theme.breakPoints.ipad}) {
      max-width: 740px;
   }

   @media (min-width: ${Theme.breakPoints.ipadPro}) {
      max-width: 992px;
   }

   @media (min-width: ${Theme.breakPoints.notebook}) {
      max-width: 1320px;
   }

   @media (min-width: ${Theme.breakPoints.desktop}) {
      max-width: 1440px;
   }

   ${(props) =>
      props.container === 'fluid' &&
      css`
         max-width: initial !important;
      `}
`;
