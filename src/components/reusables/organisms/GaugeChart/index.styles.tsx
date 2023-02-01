import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  width: 100%;
`;

export const BoxChart = styled.div`
  width: 100%;
  position: relative;
`;

export const ChartPercent = styled.p`
  margin: 0;
  position: absolute;
  top: 65px;
  width: 100%;
  text-align: center;
  font-size: 34px;
  font-weight: 400;
  line-height: 42px;
`;

export const ChartTitle = styled.p`
  margin: 0;
  position: absolute;
  bottom: -24px;
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
`;