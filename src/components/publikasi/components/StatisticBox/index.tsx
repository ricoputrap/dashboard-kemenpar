import { Button, Circle, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import Item from './Item';

interface Props {
  logo: string;
  title: string;
  titleSize: string;
  url: string;
  follower: string;
  jumlahKonten: string;
  reach?: string;
  engagement: string;
}

const getShowReach = (reach: string) => {
  let value: number = 0;
  if (reach.includes("K")) {
    const strTotal = reach.slice(0, reach.length - 1);
    const KILO = 1_000;
    value = parseFloat(strTotal) * KILO;
  }
  else if (reach.includes("M")) {
    const strTotal = reach.slice(0, reach.length - 1);
    const MEGA = 1_000_000;
    value = parseFloat(strTotal) * MEGA;
  }

  return value;
}

const StatisticBox: React.FC<Props> = ({
  logo, title, titleSize, url, 
  follower = "0",
  jumlahKonten = "0",
  reach = "0",
  engagement = "0"
}) => {
  const showReach = getShowReach(reach);

  return (
    <Flex columnGap="20px" height="240px">
      <Stack rowGap="18px" alignItems="center" width="210px">
        <Circle size="184px" bg="white">
          <Image src={ logo } width="184px" height="215px" />
        </Circle>

        <Text fontSize={ titleSize } fontWeight={600} textAlign="center">
          { title }
        </Text>
      </Stack>

      {/* Statistics */}
      <Stack width="244px" justifyContent="space-between" paddingTop="12px">
        <Stack rowGap="20px">
          <Item
            label="follower"
            value={ follower }
          />
          <Item
            label="jumlah konten"
            value={ jumlahKonten }
          />
          {showReach && (
            <Item
              label="reach"
              value={ reach }
            />
          )}
          <Item
            label="engagement"
            value={ engagement }
          />
        </Stack>
        <Button
          width="100%"
          background="#EAC170"
          color="#112647"
          as="a"
          href={ url }
          target="_blank"
          fontSize="16px"
        >
          SELENGKAPNYA
        </Button>
      </Stack>
    </Flex>
  )
}

export default StatisticBox