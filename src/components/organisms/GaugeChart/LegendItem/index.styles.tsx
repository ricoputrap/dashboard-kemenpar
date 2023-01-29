import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
`;

export const ValueContainer = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

interface ValueBoxProps {
  backgroundColor: string;
  borderColor: string;
}
export const ValueBox = styled.div<ValueBoxProps>`
  width: 12px;
  height: 12px;
  background: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor};
`;

interface ValueTextProps {
  color: string;
}
export const ValueText = styled.p<ValueTextProps>`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 13px;
  color: ${props => props.color};
`;

interface LabelProps {
  color: string;
}
export const Label = styled.p<LabelProps>`
  margin: 0;
  font-size: 11px;
  font-weight: 500;
  line-height: 13px;
  color: ${props => props.color};
`;