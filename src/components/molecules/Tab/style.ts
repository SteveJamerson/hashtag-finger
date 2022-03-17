import styled from 'styled-components';

export const Component = styled.div``;

export const NavComponent = styled.div<{ active: number | undefined }>`
   ul {
      display: flex;
      align-items: center;
      justify-content: space-between;

      list-style: none;
      padding: 0;
      margin: 0 1rem;

      border: 0px solid #e9e9f040;
      border-bottom-width: 2px;

      li {
         display: flex;
         align-items: center;
         justify-content: center;
         width: 100%;
         text-align: center;
         height: 50px;

         cursor: pointer;

         * {
            margin: 0;
         }

         &:hover {
            color: #72efdb;

            * {
               color: inherit;
            }
         }

         &:nth-child(${(props) => props.active}) {
            box-shadow: 0px 2px 0 #72efdb;

            * {
               color: #72efdb;
            }
         }
      }
   }
`;

export const TabComponent = styled.div`
   display: inline-block;
   width: 100%;
   padding: 1rem;

   & > * {
      margin: 1rem 0;
   }
`;
