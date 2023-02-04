import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 16px;
`;

interface Props {
  active?: boolean;
}

export const Item = styled.div<Props>`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
  color: ${props => props.active ? "#112647" : "#EAC170"};
  background: ${props => props.active ? "#00FFFF" : "transparent"};

  &:hover {
    cursor: pointer;
  }
`;