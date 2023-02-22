import { Flex, Modal, ModalContent, ModalOverlay, Spinner } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
}

const LoadingOverlay: React.FC<Props> = ({ isOpen }) => (
  <Flex
    position="absolute"
    height="100vh"
    justifyContent="center"
    alignItems="center"
  >
    <Modal isOpen={isOpen} onClose={() => {}} isCentered>
      <ModalOverlay bg="rgba(0, 0, 0, 0.5)" />
      <ModalContent bg="transparent">
        <Flex justifyContent="center">
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </Flex>
      </ModalContent>
    </Modal>
  </Flex>
)

export default LoadingOverlay;