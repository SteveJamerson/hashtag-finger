import styled, { css } from 'styled-components';
import Theme from '../../tokens/theme';
import { CardProps } from './interface';

export const CardComponent = styled.div<CardProps>`
   position: relative;
   padding: 20px;
   overflow: hidden;

   * {
      margin: 0;
      z-index: 1;
   }

   ${(props) =>
      props.variant === 'horizontal' &&
      css`
         background: #0b1a49;
         border: 1px solid #ffffff24;
         border-radius: 0.5rem;
         gap: 0.5rem 1rem;

         @media (min-width: ${Theme.breakPoints.mobile}) {
            display: grid;
            grid-template-areas:
               'media title subtitle'
               'media text text'
               'media link link';
            grid-template-columns: 70px min-content auto;
         }
      `}

   ${(props) =>
      props.variant === 'image' &&
      css`
         padding: 10px;
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
         aspect-ratio: 1;
         border-radius: 1.5rem;
         background-image: url(${props.background});
         background-repeat: no-repeat;
         background-position: center;
         background-size: cover;
      `}

   ${(props) =>
      props.variant === 'vertical' &&
      css`
         padding: 30px;
         display: grid;
         gap: 1rem;
         display: inline-flex;
         align-items: center;
         flex-direction: column;

         background: #0b1a49;
         border: 1px solid #ffffff24;
         border-radius: 0.5rem;
      `}
`;
export const ImageComponent = styled.div<CardProps>`
   ${(props) =>
      props.variant === 'horizontal' &&
      css`
         grid-area: media;
         img {
            height: 70px;
            aspect-ratio: 1;
            border-radius: 10rem;
            object-fit: cover;
         }
      `}

   ${(props) =>
      props.variant === 'vertical' &&
      css`
         img {
            height: 180px;
            border-radius: 10rem;
         }
      `}
`;

export const TitleComponent = styled.div<CardProps>`
   width: auto;

   ${(props) =>
      props.variant === 'horizontal' &&
      css`
         grid-area: title;
         p {
            font-size: 1rem;
            font-weight: 600;
         }

         @media (min-width: ${Theme.breakPoints.mobile}) {
            white-space: nowrap;
         }
      `}

   ${(props) =>
      props.variant === 'vertical' &&
      css`
         p {
            font-size: 1.75rem;
            font-weight: 600;
            color: #72efdb;
         }
      `}
`;

export const SubtitleComponent = styled.div<CardProps>`
   width: auto;

   ${(props) =>
      props.variant === 'horizontal' &&
      css`
         grid-area: subtitle;
         p {
            font-size: 0.75rem;
            color: #ffffff40;
         }
      `}

   ${(props) =>
      props.variant === 'image' &&
      css`
         p {
            font-size: 1rem;
            font-weight: 600;
         }
      `}

   ${(props) =>
      props.variant === 'vertical' &&
      css`
         p {
            font-size: 0.875rem;
            color: #ffffff40;
         }
      `}
`;

export const TextComponent = styled.div<CardProps>`
   ${(props) =>
      props.variant === 'horizontal' &&
      css`
         grid-area: text;
         p {
            font-size: 1rem;
            color: #d9d9d9;
            line-height: normal;
         }
      `}
   ${(props) =>
      props.variant === 'vertical' &&
      css`
         p {
            text-align: center;
            font-size: 1rem;
            color: #d9d9d9;
            line-height: normal;
         }
      `}
`;

export const LinksComponent = styled.div<CardProps>`
   * {
      color: #72efdb;
   }

   a {
      text-decoration: none;
   }

   ${(props) =>
      props.variant === 'horizontal' &&
      css`
         grid-area: link;
      `}
   ${(props) =>
      props.variant === 'vertical' &&
      css`
         display: flex;
         gap: 1rem;
      `}
`;

export const BackgroundComponent = styled.div<CardProps>`
   position: absolute;
   inset: 0;
   z-index: 0;

   * {
      height: 100%;
      width: 100%;
   }

   img {
      object-fit: cover;
      object-position: center;
      z-index: 0;
   }
`;
