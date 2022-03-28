import { SkeletonProps } from './interface';
import styled from 'styled-components';
import { Box } from '../Box';

export const SkeletonComponent = styled(Box)<SkeletonProps>`
   position: relative;
   border-radius: 1rem;
   background: #ccc;
   overflow: hidden;

   &::before {
      content: 'loading...';
      color: #333;
      display: block;
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
   }

   &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      background: linear-gradient(90deg, transparent, #fff, transparent);
      opacity: 0.5;
      animation: animation 1s infinite;
   }

   @keyframes animation {
      100% {
         transform: translateX(100%);
      }
   }
`;
