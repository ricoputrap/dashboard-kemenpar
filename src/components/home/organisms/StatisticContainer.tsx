import styled from "@emotion/styled";

const StatisticContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 1365px) {
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`;

export default StatisticContainer;