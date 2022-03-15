import styled from 'styled-components';
import imgHero from '../../assets/images/hero-bg.jpg';

export const Container = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100vh;
   font-family: 'Rubik, sans serif';
   background: transparent url(${imgHero});
   background-size: cover;
   background-position: bottom;

   align-items: center;
   justify-content: center;
`;
