import React, { useMemo } from 'react'
import BasePage from '../templates/BasePage'
import { Box, Flex, Text } from '@chakra-ui/react'
import Filter from './components/Filter'
import useInitData from './useInitData'
import useChampionStore from './state/store'
import { TLaporanPerDesa } from './state/index.types'

const LocalChampionView: React.FC = () => {
  const { championError, isChampionLoading } = useInitData();
  const activeDPP = useChampionStore(state => state.activeDPP);
  const laporanPerDPP = useChampionStore(state => state.laporanPerDPP);
  const getLaporanByDPP = useChampionStore(state => state.getLaporanByDPP);

  const daftarLaporan: TLaporanPerDesa[] = useMemo(() => {
    const laporanPerDesa = getLaporanByDPP(activeDPP);
    return laporanPerDesa;
  }, [activeDPP, laporanPerDPP]);

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
            paddingX="16px"
            paddingY="32px"
            borderTop="1px solid #EAC170"
            maxHeight="500px"
            overflowY="scroll"
          >
            {daftarLaporan.map((data, index) => (
              <Flex key={data.desa} columnGap="24px">
                {/* Area */}
                <Flex
                  columnGap="12px"
                  alignItems="center"
                  width="284px"
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
                <Flex
                  columnGap="22px"
                  width="1052px" // todo compute
                  alignItems="center"
                  overflowX="scroll"
                >
                  {data.laporanSetahun.map(laporan => (
                    <Flex
                      key={ laporan.bulan }
                      minWidth="134px"
                      height="34.44px"
                      border="1.57px solid #FFFFFF"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text
                        fontSize="16px"
                        fontWeight={600}
                        textTransform="uppercase"
                      >
                        { laporan.bulan }
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Box>
    </BasePage>
  )
}

export default LocalChampionView