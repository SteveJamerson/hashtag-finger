import styled from 'styled-components';

export const Component = styled.header`
   position: sticky;
   top: 0;
   z-index: 1200;
   display: flex;
   font-size: 16px;
   align-items: center;
   justify-content: space-between;
   color: white;
   background: linear-gradient(#0a1744a0, #0a1744a0);
   background-size: cover, cover;
   backdrop-filter: blur(30px);
   padding: 1rem;
   height: 82px;

   h2 {
      font-size: inherit;
   }

   @media (min-width: 600px) {
      font-size: 35px;
      padding: 2rem;
   }
`;
