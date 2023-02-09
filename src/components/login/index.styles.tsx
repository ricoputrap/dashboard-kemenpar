import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const BaseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 23px;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

export const LoginButton = styled(Button)`
  background: #EAC170;
  color: #000;
  height: 63px;
  margin: 0 !important;
`;