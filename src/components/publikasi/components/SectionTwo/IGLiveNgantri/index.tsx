import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import StatisticBox from '../../StatisticBox'
import LogoKemenpar from "../../../../../assets/logo/7-publikasi-kemenpar.svg"
import { TStatisticData } from '../../../state/index.types'

interface Props {
  data: TStatisticData[];
}

const IGLiveNgantri: React.FC<Props> = ({ data }) => {
  return (
    <Stack rowGap="22px" minWidth="474px">
      <Text
        color="#EAC170"
        fontSize="22px"
        fontWeight={600}
        marginBottom="12px"
      >
        IG LIVE NGANTRI
      </Text>

      <Stack rowGap="18px">
        {data.map(item => (
          <StatisticBox
            key={ item.id }
            logo={ LogoKemenpar }
            title={ item.id }
            titleSize="17px"
            url={ item.url }
            follower={ item.follower }
            jumlahKonten={ item.jumlah_konten }
            reach={ item.reach }
            engagement={ item.engagement }
          />
        ))}
      </Stack>
    </Stack>
  )
}

export default IGLiveNgantri