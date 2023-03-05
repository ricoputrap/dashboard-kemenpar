import styled from "@emotion/styled";

interface Props {
  size: string;
  width: string;
}
export const Label = styled.div<Props>`
  width: ${props => props.width};
  margin-right: 12px;
  font-size: ${props => props.size};
  font-weight: 600;
  line-height: 12px;
`;

export const CircleContainer = styled.div`
  display: flex;
  column-gap: 16px;
  margin-right: 32px;
`;

export const Value = styled.div`
  width: 32px;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
`;