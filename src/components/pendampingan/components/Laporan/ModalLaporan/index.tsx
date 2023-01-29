import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import ModalBodyLaporan from '../ModalBodyLaporan';
import { TLaporan } from '../../../types/laporan.types';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  data: TLaporan
}

const ModalLaporan: React.FC<Props> = ({ isOpen, closeModal, title, data }) => {
  return (
    <Modal isOpen={ isOpen } onClose={ closeModal } size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{ title }</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <ModalBodyLaporan data={ data } />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalLaporan