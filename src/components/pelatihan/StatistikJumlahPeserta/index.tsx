import { Flex } from "@chakra-ui/react";
import StatistikBoxes from "./components/StatistikBoxes";
import { useEffect } from "react";

const StatistikJumlahPeserta: React.FC = () => {
  return (
    <Flex
      direction="column"
      width="390px"
      rowGap="24px"
      marginTop="20px"
    >
      <StatistikBoxes />
    </Flex>
  )
}

export default StatistikJumlahPeserta;