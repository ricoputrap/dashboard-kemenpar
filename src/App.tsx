import { Box } from "@chakra-ui/react"
import Header from "./components/organisms/Header"

const App: React.FC = () => {

  return (
    <Box
      backgroundColor="background"
      height="100vh"
      color="white"
      fontFamily="Montserrat"
      fontStyle="normal"
      fontWeight="800"
      fontSize="20px"
      lineHeight="24px"
    >
      <Header />
    </Box>
  )
}

export default App
