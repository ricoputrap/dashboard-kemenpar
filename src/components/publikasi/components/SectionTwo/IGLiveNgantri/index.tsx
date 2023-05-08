import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import StatisticBox from '../../StatisticBox'
import LogoKemenpar from "../../../../../assets/logo/7-publikasi-kemenpar.svg"
import { TStatisticData } from '../../../state/index.types'

interface Props {
  panji: TStatisticData;
  grithe: TStatisticData;
}

const IGLiveNgantri: React.FC<Props> = ({ panji, grithe }) => {
  return (
    <Stack rowGap="27px">
      <Text
        color="#EAC170"
        fontSize="25px"
        fontWeight={600}
        marginBottom="12px"
      >
        IG LIVE NGANTRI
      </Text>

      <StatisticBox
        logo={ LogoKemenpar }
        title={ panji.id }
        titleSize="20px"
        url={ panji.url }
        follower={ panji.follower }
        jumlahKonten={ panji.jumlah_konten }
        reach={ panji.reach }
        engagement={ panji.engagement }
      />

      <StatisticBox
        logo={ LogoKemenpar }
        title={ grithe.id }
        titleSize="20px"
        url={ grithe.url }
        follower={ grithe.follower }
        jumlahKonten={ grithe.jumlah_konten }
        reach={ grithe.reach }
        engagement={ grithe.engagement }
      />
    </Stack>
  )
}

export default IGLiveNgantri