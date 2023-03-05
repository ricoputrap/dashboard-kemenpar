import styled from "@emotion/styled";

interface Props {
  width: number;
}
export const BoxContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  column-gap: 22px;
  width: ${props => props.width}px;
  overflow-x: scroll;
`;

export const Label = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const IconBox = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #2c4771;
    cursor: pointer;
  }
`;