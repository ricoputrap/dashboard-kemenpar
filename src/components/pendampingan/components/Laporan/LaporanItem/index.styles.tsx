import { Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface Props {
  isDefined?: boolean;
}

export const Card = styled.div<Props>`
  display: flex;
  justify-content: center;
  column-gap: 5px;
  wrap: nowrap;
  padding: 8px;
  min-width: 138px;
  height: 38px;
  border: 1px solid #EAC170;
  background: ${props => props.isDefined ? "#EAC170" : "transparent"};
  color: ${props => props.isDefined ? "#0D1D37" : "#FFFFFF"};

  &:hover {
    cursor: ${props => props.isDefined ? "pointer" : "default"};
    background: ${props => props.isDefined ? "#FFA900" : "transparent"};
  }
`;

export const Label = styled.p`
  font-size: 15px;
  font-weight: 600;
  line-height: 19px;
  margin: 0;
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;