import styled from 'styled-components';
import { BoxProps } from './interface';

export const BoxComponent = styled.div<BoxProps>`
   background: ${(props) => props.background};
   border: ${(props) => props.border};
   border-radius: ${(props) => props.radius};
   margin: ${(props) => props.margin};
   padding: ${(props) => props.padding};
`;
