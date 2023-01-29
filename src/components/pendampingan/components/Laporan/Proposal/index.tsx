import React from 'react'
import { Container, Icon, Label } from './index.styles';
import { Flex, LinkOverlay } from '@chakra-ui/react';
import AttachmentIcon from "../../../../../assets/icons/attachment.svg";

interface Props {
  url: string;
}

const Proposal: React.FC<Props> = ({ url }) => {
  return (
    <Container as="div">
      <LinkOverlay href={ url } target="_blank">
        <Flex columnGap="10px" alignItems="center">
          <Label>PROPOSAL</Label>
          <Icon alt="attachment" src={ AttachmentIcon } />
        </Flex>
      </LinkOverlay>
    </Container>
  )
}

export default Proposal