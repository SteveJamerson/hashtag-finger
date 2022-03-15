import styled from 'styled-components';

export const Component = styled.header`
   display: flex;
   font-size: 16px;
   align-items: center;
   justify-content: space-between;
   color: white;
   background-color: #0a1744;
   padding: 0.5rem;
   height: 82px;

   h2 {
      font-size: inherit;
   }

   @media (min-width: 600px) {
      font-size: 35px;
   }
`;
