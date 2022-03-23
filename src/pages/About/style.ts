import styled from 'styled-components';

import image from '../../assets/about-hero-bg.jpg';
import { Text } from '../../components/atoms';
import Theme from './../../components/tokens/theme';

export const Container = styled.div`
   background: transparent url(${image}) 100% 100% no-repeat padding-box;
   background-size: cover;
`;
export const Containertop = styled.div`
   display: flex;
   flex-direction: row;
   /* background: transparent url(${image}) 100% 100% no-repeat padding-box; */
   background: transparent linear-gradient(180deg, #0a174400 0%, #0a1744 100%)
      0% 0% no-repeat padding-box;
   justify-content: space-around;
   background-size: cover;

   @media (max-width: ${Theme.breakPoints.ipad}) {
      flex-direction: column;
   }
`;

export const ContainerText = styled.div`
   width: 60%;
   padding: 0 5%;
   gap: 20px;
   @media (max-width: ${Theme.breakPoints.ipad}) {
      width: 96%;
      text-align: start;
      padding-left: 9%;
   }
`;
export const Title = styled.h1`
   display: flex;
   color: white;
   font-size: 50px;
   background: transparent;
   text-align: left;
   margin: 0;
   font-weight: bolder;
   margin-top: 200px;
   @media (max-width: ${Theme.breakPoints.notebook}) {
      margin-top: 80px;
   }
   @media (max-width: ${Theme.breakPoints.ipad}) {
      font-size: 40px;
      margin-top: 80px;
   }
`;
export const TextContent = styled(Text)`
   color: #d9d9d9;
   font-size: 20px;
   margin-top: 40px;
   margin-bottom: 240px;
   /* @media (max-width: ${Theme.breakPoints.mobile}) {
      font-size: 15px;
   } */
`;

export const Image = styled.div`
   width: 60%;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 11%;
   @media (max-width: ${Theme.breakPoints.notebook}) {
      margin-top: -12%;
      img {
         width: 80%;
         margin-left: 80px;
      }
   }
   @media (max-width: ${Theme.breakPoints.ipad}) {
      margin-top: -160px;
      width: 90%;
      img {
         width: 95%;
         margin-left: 10%;
      }
   }
`;
export const SubTitle = styled.h2`
   font-weight: bolder;
   font-size: 50px;
   color: white;
   padding: 5% 6%;
   @media (max-width: ${Theme.breakPoints.ipad}) {
      font-size: 40px;
      padding: 10% 10% 0;
   }
   /* @media (max-width: ${Theme.breakPoints.mobile}) {
      font-size: 27px;
      padding: 18% 11% 0;
   } */
`;

export const ContainerBottom = styled.div`
   display: flex;
   flex-direction: column;
   background: #0a1744 0% 0% no-repeat padding-box;
   height: 100%;
`;

export const ContainerCard = styled.div`
   display: flex;
   flex-direction: row;
   gap: 2.5rem;
   background: rgba(10, 23, 68, 1) 0% 0% no-repeat padding-box;
   padding: 0 5% 10% 5%;
   @media (max-width: ${Theme.breakPoints.ipadPro}) {
      flex-flow: row wrap;
      padding: 0 10% 10% 10%;
      flex-direction: column;

      & > div {
         flex-grow: 1;
         flex-basis: calc(25% - 2.5rem);
      }
   }
   /* @media (max-width: ${Theme.breakPoints.mobile}) {
      flex-direction: column;
      gap: 40px;
      padding: 33px;
   } */
`;
