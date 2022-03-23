import styled from 'styled-components';
import Theme from '../../tokens/theme';

export const Container = styled.div`
   width: 530px;
   height: 610px;
   border-radius: 14px;
   padding: 0 48px;

   background: rgba(23, 31, 107, 0.4);
   backdrop-filter: blur(30px);
   -webkit-backdrop-filter: blur(30px);

   div {
      margin-bottom: 44px;

      & + div {
         margin-bottom: 65px;
      }
   }

   @media (max-width: ${Theme.breakPoints.ipad}) {
      width: 410px;
   }

   @media (max-width: 411px) {
      width: 340px;
      height: 450px;
   }
`;

export const Title = styled.h3`
   font: normal normal bold 35px/21px Rubik;
   letter-spacing: 0px;
   color: #72efdb;
   align-items: center;
   text-align: center;
   margin: 130px 0 75px 0;

   @media (max-width: 411px) {
      margin: 62px 0 44px 0;
   }
`;