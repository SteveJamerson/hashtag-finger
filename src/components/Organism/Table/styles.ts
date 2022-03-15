import styled, { css } from 'styled-components';
import Theme from '../../../styles/Theme';

interface THProps {
  align?: 'center' | 'left' | 'right';
  size?: 'S' | 'M' | 'L' | 'XL';
  color?: 'white' | 'blue';
}

interface TDProps {
  size?: 'S' | 'M' | 'L' | 'XL';
  color?: 'white' | 'blue';
}

const sizePropsVariations = {
  deafult: css`
    min-width: 75px;
    max-width: 150px;
  `,

  S: css`
    min-width: 75px;
    max-width: 150px;
  `,

  M: css`
    min-width: 85px;
    max-width: 150px;
  `,

  L: css`
    min-width: 95px;
    max-width: 150px;
  `,

  XL: css`
    min-width: 110px;
    max-width: 150px;
  `,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 1553px;

  align-self: center;

  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;

  table {
    border-spacing: 0px;
    width: 100%;

    thead tr {
      height: 106px;
      background-color: ${Theme.colors.darkBlueHeader};

      border-radius: 14px;

      th:first-child {
        padding-left: 20px;
      }

      /* th:last-child {
        padding-right: 20px;
      } */
    }

    tbody tr {
      height: 48px;

      background-color: transparent;

      td:first-child {
        padding-left: 20px;
      }

      /* td:last-child {
        padding-right: 20px;
      } */
    }
  }

  /* overflow-x: auto; */
`;

export const SubTitle = styled.h1`
   color: ${Theme.colors.textLightBlue};
   font-family: 'Rubik', sans-serif;
   font-weight: bold;
   font-size: 40px;
   line-height: 47px;
   align-self: flex-start;
`;

export const HeaderDivider = styled.div`
  height: 4.6px;
  border-radius: 8px 8px 0px 0px;
`;

export const TH = styled.th<THProps>`
  ${props => sizePropsVariations[props.size || 'deafult']}

  height: 28px;
  padding: 0px 8px;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  text-align: ${({ align }) => align || 'left'};
  word-break: break-word;

  backdrop-filter: blur(30px);

  p {

   ${props => props.color == 'white' ? css`
      color: #FFFFFF;
   ` : css`
      color: ${Theme.colors.textLightBlue};
   `}
   font-family: 'Rubik', sans-serif;
  }

  > div {
    display: flex;
    align-items: center;

    ${({ align }) =>
      align === 'center' &&
      css`
        justify-content: center;
      `}

    ${({ align }) =>
      align === 'right' &&
      css`
        justify-content: flex-end;
      `}

    > img {
      margin-left: 5px;
    }
  }
`;

export const TD = styled.td<TDProps>`
  ${props => sizePropsVariations[props.size || 'deafult']}

  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;

  padding: 0px 8px;

  background-color: transparent;
  backdrop-filter: blur(30px);

  word-break: break-word;

  ${props => props.color == 'white' ? css`
      color: #FFFFFF;
   ` : css`
      color: ${Theme.colors.textLightBlue};
   `}

  p {
   font-family: 'Montserrat', sans-serif;
   color: #FFFFFF;
  }

  text-align-last: ${({ align }) => align || 'left'};
`;

export const WrapperTable = styled.div`
  overflow-x: auto;

  border-radius: 14px;

  &::-webkit-scrollbar {
    width: 3px;
    height: 8px;
    border: 1px solid #d5d5d5;
    background: #dad7d7;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #bac0c4;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

export const Gap = styled.div`
  width: 100%;
  height: 80px;
`;

export const ErroDiv = styled.div`
  display: flex;
  background: transparent;
  justify-content: center;
  align-items: center;



  color: ${Theme.colors.textLightBlue}
`;