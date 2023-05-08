import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import SectionHeader from '../../../../reusables/atoms/SectionHeader'
import ButtonSelengkapnya from '../../ButtonSelengkapnya'
import useData from '../useData';
import ListArticle from './ListArticle';

const Website: React.FC = () => {
  const { website } = useData();

  return (
    <Stack justifyContent="space-between" rowGap="20px" height="100%">
      <Stack rowGap="20px" height="100%">
        <SectionHeader title="Website" />

        <Box
          border="1px solid #EAC170"
          borderRadius="5px"
          padding="32px 10px 32px 18px"
          flex={1}
        >
          <Stack rowGap="20px">
            <Heading
              fontFamily="Montserrat"
              fontSize="20px"
              lineHeight="24px"
              fontWeight={600}
            >
              16 ARTIKEL WWW.INDONESIA.TRAVEL
            </Heading>

            <ListArticle data={ website.data } />
          </Stack>
        </Box>
      </Stack>

      <ButtonSelengkapnya url={ website.url } fullWidth />
    </Stack>
  )
}

export default Website