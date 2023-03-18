import styled from "@emotion/styled";
import { Image } from "@chakra-ui/react";

const ImageContent = styled(Image)`
  width: 800px;

  @media (min-width: 1110px) {
    width: 900px;
  }

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

export default ImageContent;