import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import SectionHeader from '../../../../reusables/atoms/SectionHeader'
import ButtonSelengkapnya from '../../ButtonSelengkapnya'

const URL = "https://drive.google.com/file/d/13p3RlpgaeYv_7IJjHfdGXBktAKaJqWmv/view?usp=share_link";

const Website: React.FC = () => {
  return (
    <Stack justifyContent="space-between" rowGap="20px" height="100%">
      <Stack rowGap="20px" height="100%">
        <SectionHeader title="Website" />

        <Box
          border="1px solid #EAC170"
          borderRadius="5px"
          padding="32px 18px"
          flex={1}
        >
          <Heading
            fontFamily="Montserrat"
            fontSize="20px"
            lineHeight="24px"
            fontWeight={600}
          >
            16 ARTIKEL WWW.INDONESIA.TRAVEL
          </Heading>
        </Box>
      </Stack>

      <ButtonSelengkapnya url={ URL } fullWidth />
    </Stack>
  )
}

export default Website