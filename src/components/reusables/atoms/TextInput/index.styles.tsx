import { Stack, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Container = styled(Stack)`
  width: 464px;
  row-gap: 4px;
  margin: 0 !important;
`;

export const Label = styled(Text)`  
  font-size: 18px;
  font-weight: 500;
`;

export const BoxInput = styled.div`
  width: 100%;
  height: 57px;
  margin: 0 !important;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 0 12px;

  & input {
    width: 100%;
    height: 100%;
    color: #000;
    font-size: 18px;
    font-weight: 500;
  }
`;