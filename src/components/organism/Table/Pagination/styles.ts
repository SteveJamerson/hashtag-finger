import styled, { css } from 'styled-components';
import Theme from '../../../tokens/theme';

interface ArrowsProps {
  display: boolean;
}

interface DivProps {
  visibility?: boolean;
  smallScreen?: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;

  @media (max-width: ${Theme.breakPoints.mobile}) {
    flex-direction: column;
    height: 100px;
    align-items: flex-start;
  }

  p {
    font-family: SantanderMicroTextRegular;
    color: ${Theme.colors.textLightBlue};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Dropbox = styled.div`
  display: flex;
  position: relative;
  height: 27px;
  min-width: 65px;
  max-width: 80px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px 15px 8px 15px;
  background: #fff;

  border: 0.5px solid #9bc3d3;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 1.5px solid #257fa4;

  img {
    width: 9px;
    height: 7px;
  }

  div {
    span {
      font-family: SantanderMicroTextRegular;
      font-weight: normal;
      margin-right: 10px;
      font-size: 14px;
      line-height: 21px;
      color: ${Theme.colors.textLightBlue};
    }
  }
`;

export const DropboxContent = styled.div`
  position: absolute;
  bottom: 100%;
  width: 65px;
  display: flex;
  flex-direction: column-reverse;
  max-height: 120px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #8d99ae;
  }
`;

export const ListOption = styled.div`
  background: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Option = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;

  padding: 0 18px;

  font-size: 14px;
  font-family: SantanderMicroTextRegular;
  color: #222;
  border: none;
  background: transparent;

  transition: all 0.25s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const LinesDiv = styled.div<DivProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px 15px 8px;
  column-gap: 12px;
  visibility: ${props => (props.visibility ? '' : 'hidden')};

  @media (max-width: ${Theme.breakPoints.mobile}) {
    padding: 0px;
  }

  > div {
    flex-direction: column;
    position: relative;
  }

  p {
    font-family: SantanderMicroTextRegular;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const PagesDiv = styled.div<DivProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 8px 15px 8px;
  column-gap: 12px;
  visibility: ${props => (props.visibility ? '' : 'hidden')};

  p {
    font-family: SantanderMicroTextRegular;
    font-size: 12px;
    color: ${Theme.colors.textLightBlue};

    b {
      color: ${Theme.colors.textLightBlue};
    }
  }

  img {
    cursor: pointer;
  }

  > div {
    position: relative;
  }
`;

export const ArrowsDiv = styled.div<ArrowsProps>`
  visibility: ${props => (props.display ? '' : 'hidden')};
  display: ${props => (props.display ? 'block' : '')};
`;
