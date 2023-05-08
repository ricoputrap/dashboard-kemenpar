import { Td, Th, Tr } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 26px 20px 10px 20px;
  border: 1px solid #EAC170;
  border-radius: 5px;
  min-height: 620px;

  & table {
    border-spacing: 0 10px;
    border-collapse: unset;
  }
`;

export const ColumnHeader = styled(Th)`
  background: #FFFFFF;
  color: #112647;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  padding: 10px;

  &:first-of-type {
    border-radius: 5px 0 0 5px;
  }

  &:last-of-type {
    border-radius: 0 5px 5px 0;
    width: 170px;
  }
`;

export const ColumnData = styled(Td)`
  font-size: 18px;
  font-weight: 500;
  color: #FFFFFF;
  text-align: center;
  margin-top: 10px;
  border-top: 1px solid #EAC170;
  border-bottom: 1px solid #EAC170;
  padding: 10px;

  &:first-of-type {
    border-radius: 5px 0 0 5px;
    border-left: 1px solid #EAC170;
  }

  &:last-of-type {
    border-radius: 0 5px 5px 0;
    border-right: 1px solid #EAC170;
  }
`;

export const RowData = styled(Tr)`
  border: 1px solid #EAC170;
  border-radius: 5px;
`;