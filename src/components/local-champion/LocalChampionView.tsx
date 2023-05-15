import React, { useMemo } from 'react'
import BasePage from '../templates/BasePage'
import { Box, Flex, Text } from '@chakra-ui/react'
import Filter from './components/Filter'
import useInitData from './useInitData'
import useChampionStore from './state/store'
import { TLaporanPerDesa } from './state/index.types'
import DaftarLaporan from './components/DaftarLaporan'

const LocalChampionView: React.FC = () => {
  const { championError, isChampionLoading } = useInitData();
  const activeDPP = useChampionStore(state => state.activeDPP);
  const laporanPerDPP = useChampionStore(state => state.laporanPerDPP);
  const getLaporanByDPP = useChampionStore(state => state.getLaporanByDPP);

  const daftarLaporan: TLaporanPerDesa[] = useMemo(() => {
    const laporanPerDesa = getLaporanByDPP(activeDPP);
    return laporanPerDesa;
  }, [activeDPP, laporanPerDPP]);

  if (isChampionLoading) {
    return (
      <BasePage id="local-champion">
        <Text textAlign="center">LOADING...</Text>
      </BasePage>
    )
  }

  return (
    <BasePage id="local-champion">
      <Box
        border="1px solid #EAC170"
        borderRadius="10px"
        background="rgba(17, 38, 71, 0.85);"
        padding="28px 28px 0 28px"
      >
        <Flex direction="column" rowGap="16px">
          <Filter />

          {/* Data Bulanan per Desa */}
          <Flex
            direction="column"
            rowGap="16px"
            paddingLeft="16px"
            paddingY="32px"
            borderTop="1px solid #EAC170"
            maxHeight="500px"
            overflowY="scroll"
          >
            {daftarLaporan.map((data, index) => (
              <Flex key={data.desa} columnGap={0} justifyContent="space-between">
                {/* Area */}
                <Flex
                  columnGap="12px"
                  alignItems="center"
                  width="288px"
                >
                  {/* No */}
                  <Text fontSize="20px" fontWeight={700} lineHeight="24px" width="32px">
                    { index + 1 }.
                  </Text>

                  {/* Detail Desa */}
                  <Box>
                    <Text fontSize="16px" fontWeight={700} lineHeight="20px">
                      { data.desa.toUpperCase() }
                    </Text>
                    <Text fontSize="16px" fontWeight={400} lineHeight="20px">
                      { data.kec.toUpperCase() }, { data.kab.toUpperCase() }
                    </Text>
                  </Box>
                </Flex>

                {/* Laporan per Bulan */}
                <DaftarLaporan
                  profile={ data.profile }
                  data={ data.laporan }
                />
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Box>
    </BasePage>
  )
}

export default LocalChampionView