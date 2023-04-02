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
    left: 256px;
    top: 210px;
    width: 46px;
    height: 13px;
    font-size: 10px;
  }

  @media (min-width: 1310px) {
    left: 274px;
    top: 214px;
    width: 50px;
    height: 14px;
    font-size: 12px;
  }

  @media (min-width: 1440px) {
    left: 293px;
    top: 227px;
    width: 52px;
    height: 15px;
    font-size: 12px;
  }
`;