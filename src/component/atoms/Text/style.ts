import styled, { css } from 'styled-components'

export const TextComponent = styled.p`
    color: ${props => props.color === 'primary' ? 'black' : 'white'};
    font-weight: 400;
`
