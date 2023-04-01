import { Flex, Stack } from "@chakra-ui/react";
import DropdownJenisPelatihan from "./components/DropdownJenisPelatihan";
import StatistikBoxes from "./components/StatistikBoxes";
import StatistikChart from "./components/StatistikChart";

const StatistikJumlahPeserta: React.FC = () => {
  return (
    <Flex
      direction="column"
      width="390px"
      rowGap="24px"
      marginTop="20px"
    >
      <StatistikChart />
      
      <Stack>
        <DropdownJenisPelatihan />
        <StatistikBoxes />
      </Stack>
    </Flex>
  )
}

export default StatistikJumlahPeserta;