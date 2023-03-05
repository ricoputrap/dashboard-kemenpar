import React from 'react'
import Ring from '../Ring'
import { Stack, Text } from '@chakra-ui/react'

interface Props {
  media: string;
}

const RingMedia: React.FC<Props> = ({ media }) => {
  return (
    <Ring>
      <Stack>
        <Text
          fontSize="20px"
          fontWeight={600}
          textAlign="center"
        >
          MEDIA
        </Text>
        <Text
          fontSize="15px"
          fontWeight={600}
          textAlign="center"
          color="#EAC170"
          marginTop="0 !important"
          textTransform="uppercase"
        >
          { media }
        </Text>
      </Stack>
    </Ring>
  )
}

export default RingMedia