import { Flex, Text } from "@chakra-ui/react";

interface Props {
  value: string | number;
  label?: string;
  white?: boolean;
  hasBorder?: boolean;
  small?: boolean;
}

const StatItem: React.FC<Props> = ({ value, label = "", white = false, hasBorder = false, small = false}) => (
  <Flex
    direction="column"
    justifyContent="center"
    width={ small ? "50px" : "110px" }
    borderLeft={ hasBorder ? "1px solid #FFFFFF" : "none" }
    paddingLeft={ hasBorder ? "10px" : 0 }
  >
    <Text
      fontFamily="Montserrat"
      fontSize="20px"
      fontWeight={700}
      lineHeight="20px"
      color={ white ? "#FFFFFF" : "#EAC170" }
    >
      { value }
    </Text>
    { !label ? <></> : (
      <Text
        fontFamily="Montserrat"
        fontSize="18px"
        fontWeight={400}
        lineHeight="18px"
      >
        { label }
      </Text>
    )}
  </Flex>
)

export default StatItem;