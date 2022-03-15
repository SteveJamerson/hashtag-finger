import styled from 'styled-components';

import hero from '../../assets/images/hero-bg.jpg';
import mobile from '../../assets/images/mobile-hero-bg.jpg';
import tablet from '../../assets/images/tablet-hero-bg.jpg';

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
      background-image: url(${tablet});
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
