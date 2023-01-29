import { Image, LinkBox } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Container = styled(LinkBox)`
  padding: 8px 9px;
  background: #00FFFF;
  height: 38px;
  min-width: 134px;
  
  &:hover {
    cursor: pointer;
    background: #07DCDC;
  }
`;

export const Label = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 19px;
  color: #0D1D37;
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;