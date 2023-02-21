import { Td, Th } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const ColumnHeader = styled(Th)`
  background: #EAC170;
  border: none;
  font-size: 16px;
  font-weight: 700;
  color: #112647;

  &:first-of-type {
    border-radius: 5px 0 0 5px;
  }

  &:last-of-type {
    border-radius: 0 5px 5px 0;
  }
`;

export const ColumnData = styled(Td)`
  color: #EAC170;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  vertical-align: top;
  text-transform: uppercase;
`;