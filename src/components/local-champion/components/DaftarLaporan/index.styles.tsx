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

  &::-webkit-scrollbar {
    display: none;
  }

  & a:hover {
    text-decoration: none;
    color: inherit;
  }
`;

export const Label = styled.p`
  margin: 0;
  font-size: 14.65px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.05em;
`;
export const LabelSmall = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  color: #0D1D37;
  line-height: 12px;
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