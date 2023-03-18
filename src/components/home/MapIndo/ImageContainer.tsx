import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

const ImageContainer = styled(Flex)`
  width: 100%;

  @media (min-width: 1280px) {
    width: 700px;
  }

  @media (min-width: 1310px) {
    width: 750px;
  }

  @media (min-width: 1440px) {
    width: 800px;
  }
`;

export default ImageContainer;