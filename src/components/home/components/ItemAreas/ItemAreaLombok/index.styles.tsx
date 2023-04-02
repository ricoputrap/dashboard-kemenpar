import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  background: #E9C270;
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
    left: 338px;
    top: 226px;
    width: 65px;
    height: 14px;
    font-size: 10px;
  }

  @media (min-width: 1310px) {
    left: 362px;
    top: 232px;
    width: 70px;
    height: 14px;
    font-size: 12px;
  }

  @media (min-width: 1440px) {
    left: 386px;
    top: 245px;
    width: 74px;
    height: 16px;
    font-size: 12px;
  }
`;