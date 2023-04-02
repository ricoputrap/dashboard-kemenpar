import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  // background: #E9C270;
  background: red;
  border-radius: 10px;
  cursor: pointer;

  @media (min-width: 1110px) {
    left: 380px;
    top: 241px;
    width: 59px;
    height: 17px;
    font-size: 14px;
  }

  @media (max-width: 1279px) {
    display: none;
  }

  @media (min-width: 1280px) {
    left: 418px;
    top: 156px;
    width: 76px;
    height: 14px;
    font-size: 11px;
  }

  @media (min-width: 1310px) {
    left: 448px;
    top: 155px;
    width: 78px;
    height: 16px;
    font-size: 12px;
  }

  @media (min-width: 1440px) {
    left: 478px;
    top: 165px;
    width: 84px;
    height: 16px;
    font-size: 12px;
  }
`;