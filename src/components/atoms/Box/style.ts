import styled, { css } from 'styled-components';
import { BoxProps } from './interface';

export const BoxComponent = styled.div<BoxProps>`
   margin: ${(props) => props.margin};
`;
