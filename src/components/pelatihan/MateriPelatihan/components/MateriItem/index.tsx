import React from 'react'
import { Image, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { TMateri } from '../../state/index.types'
import { BoxIcon, BoxLabel, Container, Label } from './index.styles'
import PdfIcon from "../../../../../assets/icons/pdf-icon.svg"

const MateriItem: React.FC<TMateri> = ({ label, url }) => {
  return (
    <Container>
      <BoxLabel>
        <Label>{ label }</Label>
      </BoxLabel>

      <BoxIcon>
        <Image
          src={ PdfIcon }
          width="25.5px"
          height="30px"
        />
      </BoxIcon>
    </Container>
  )
}

export default MateriItem