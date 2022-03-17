import styled from 'styled-components';

import hero from '../../assets/images/hero-bg.jpg';
import mobile from '../../assets/images/mobile-hero-bg.jpg';
import { Tab } from '../../components/molecules';

export const Hero = styled.div<any>`
   display: flex;
   flex-direction: column;
   padding: 3rem 1rem;
   background-image: url(${mobile});
   background-position: center;
   background-size: cover;
   min-height: 600px;
   align-content: start;

   h2 {
      font-size: 36px;
      max-width: 15ch;
   }

   p {
      font-size: 16px;
      max-width: 35ch;
   }

   div {
      margin-top: 4rem;
   }

   @media (min-width: 767px) {
      padding: 5rem;
      background-image: url(${hero});
      background-position: center right;
      min-height: initial;

      h2 {
         font-size: 50px;
         line-height: 1;
      }

      p {
         font-size: 20px;
      }
   }

   @media (min-width: 992px) {
      background-image: url(${hero});
   }
`;

export const TabImages = styled(Tab)`
   display: flex;
   flex-flow: row wrap;
   gap: 1rem;

   & > * {
      flex-grow: 1;
      flex-basis: calc(50% - 1rem);
      margin: 0;
   }
`;
