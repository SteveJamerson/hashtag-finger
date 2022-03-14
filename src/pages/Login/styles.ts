import styled from 'styled-components';
import img from './hero-bg.jpg';


export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justfy-content: center;
   width: 100%;
   height: 100vh;
   font-family: 'Rubik, sans serif';
   background: transparent url(${img}) 0% 0% no-repeat padding-box;

   align-items: center;
   justify-content: center;

`;

export const Header = styled.header`
   width: 100%;
   height: 40px;
   background: black;
`;