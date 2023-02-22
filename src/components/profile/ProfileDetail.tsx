import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import EditProfile from './EditProfile'

const ProfileDetail: React.FC = () => {
  return (
    <Stack
      paddingLeft="72px"
      paddingTop="56px"
      rowGap="28px"
    >
      <Heading
        fontFamily="Montserrat"
        fontSize="30px"
        fontWeight={500}
      >
        Profile
      </Heading>

      <EditProfile />
    </Stack>
  )
}

export default ProfileDetail