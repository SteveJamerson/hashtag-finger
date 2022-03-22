import styled, { css } from 'styled-components';

import hero from '../../assets/images/hero-bg.png';
import mobile from '../../assets/images/mobile-hero-bg.png';
import { Container } from '../../components/atoms';
import { Tab, Tabs } from '../../components/molecules';
import Theme from '../../components/tokens/theme';

export const HeroContainer = styled(Container)`
   display: flex;
   flex-direction: column;
   padding: 3rem 1rem;
   background-image: url(${mobile}),
      radial-gradient(circle at left top, #1e3e7b -100%, #0a1744 55%);
   background-repeat: no-repeat;
   background-size: 80%, contain;
   background-position: bottom right;
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

   @media (min-width: ${Theme.breakPoints.mobile}) {
      background-image: url(${hero}),
         radial-gradient(circle at 0% -30%, #1e3e7b -100%, #0a1744 55%);
      min-height: 600px;
   }

   @media (min-width: ${Theme.breakPoints.ipad}) {
      padding: 5rem;
      background-size: 60%, contain;

      h2 {
         font-size: 50px;
         line-height: 1;
      }

      p {
         font-size: 20px;
      }
   }

   @media (min-width: ${Theme.breakPoints.ipadPro}) {
      background-position: center right;
      background-size: contain;
   }
`;

export const TabContainer = styled(Container)`
   padding: 2rem 0;
   background-color: #0a1744;

   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const TabImages = styled(Tab)`
   display: flex;
   flex-flow: row wrap;
   align-items: flex-start;
   gap: 1rem;
   height: max-content;

   & > * {
      flex-grow: 1;
      flex-basis: calc(50% - 1rem);
      margin: 0;
   }
`;

export const TabTweets = styled(Tab)`
   display: flex;
   flex-flow: row wrap;
   align-items: flex-start;
   gap: 1rem;
   height: max-content;

   & > * {
      flex-grow: 1;
   }
`;

export const TabsCustom = styled(Tabs)`
   align-self: center;

   @media (min-width: ${Theme.breakPoints.ipadPro}) {
      gap: 2rem;
   }

   ${(props) =>
      props.responsive &&
      css`
         display: flex;

         ${TabTweets} {
            width: 60%;
         }

         ${TabImages} {
            width: 40%;
         }
      `}
`;
