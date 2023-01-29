import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
}

const ModalLaporan: React.FC<Props> = ({ isOpen, closeModal, title }) => {
  return (
    <Modal isOpen={ isOpen } onClose={ closeModal }>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{ title }</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod suscipit blanditiis eaque nisi saepe non quasi beatae, ab magni atque consequatur error quibusdam quisquam voluptatem commodi quia, quis, ratione asperiores?
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalLaporan