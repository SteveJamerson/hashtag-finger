import styled from 'styled-components';
import Theme from '../../../styles/Theme';
import BackGround from '../../../assets/table-bg.jpg'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 100vw;
   height: 100vh;
   background: url(${BackGround}) no-repeat;
   background-size: cover;
   align-self: center;
`;

export const SubTitle = styled.h1`
   color: ${Theme.colors.textLightBlue};
   font-family: 'Rubik', sans-serif;
   font-weight: bold;
   font-size: 40px;
   line-height: 47px;
   align-self: center;
`;
