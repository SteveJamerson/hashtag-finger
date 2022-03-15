import styled from 'styled-components';

export const Component = styled.footer`
   display: flex;
   font-size: 25px;
   align-items: center;
   justify-content: center;
   text-align: center;
   color: white;
   background-color: #1e3e7b;
   padding: 0.5rem;
   height: 68px;

   p {
      font-size: 10px;
      margin-bottom: 0;
   }

   @media (min-width: 600px) {
      height: 200px;
      font-size: 35px;

      p {
         font-size: 25px;
      }
   }
`;
