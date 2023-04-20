import { Button, Circle, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { TStatisticItem } from './index.types';
import Item from './Item';

interface Props {
  logo: string;
  title: string;
  titleSize: string;
  url: string;
  statistics: TStatisticItem[];
}

const StatisticBox: React.FC<Props> = ({ logo, title, titleSize, url, statistics }) => {
  return (
    <Flex columnGap="25px" height="267px">
      <Stack rowGap="18px" alignItems="center" width="283px">
        <Circle size="215px" bg="white">
          <Image src={ logo } width="215px" height="215px" />
        </Circle>

        <Text fontSize={ titleSize } fontWeight={600} textAlign="center">
          { title }
        </Text>
      </Stack>

      {/* Statistics */}
      <Stack width="292px" justifyContent="space-between" paddingTop="12px">
        <Stack rowGap="18px">
          {statistics.map(item => (
            <Item
              key={ item.label }
              label={ item.label }
              value={ item.value }
            />
          ))}
        </Stack>
        <Button
          width="100%"
          background="#EAC170"
          color="#112647"
          as="a"
          href={ url }
          target="_blank"
        >
          SELENGKAPNYA
        </Button>
      </Stack>
    </Flex>
  )
}

export default StatisticBox