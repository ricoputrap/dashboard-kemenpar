import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Container = styled(Box)`
  border: 1px solid #EAC170;
  border-radius: 20px;
  width: calc((100% - 75px) / 6);
  min-width: 146px;
  height: 173px;
  box-sizing: content-box;
`;

export const LocationBox = styled(Box)`
  padding-top: 16px;
  padding-bottom: 13px;
  border-bottom: 1px solid #EAC170;

  p {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-transform: uppercase;
    text-align: center;
    color: #FFFFFF;
  }
`;

export const PercentageBox = styled(Box)`
  padding-top: 8px;
  padding-bottom: 8px;

  & .percentage__value {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    color: #EAC170;
  }

  & .percentage__label {
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    color: #EAC170;
  }

  & .percentage__name {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
  }
  }
`;

export const JumlahBox = styled(Box)`
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: center;
  width: 50%;

  & .jumlah__value {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    color: #EAC170;
  }

  & .jumlah__label {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: #FFFFFF;
  }
`;