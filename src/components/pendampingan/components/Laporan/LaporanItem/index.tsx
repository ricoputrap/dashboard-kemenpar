import React, { useCallback, useMemo } from 'react'
import AttachmentIcon from "../../../../../assets/icons/attachment.svg";
import { Card, Icon, Label } from './index.styles';
import { TLaporan } from '../../../types/laporan.types';
import { useDisclosure } from '@chakra-ui/react';
import ModalLaporan from '../ModalLaporan';

interface Props {
  nomor: number;
  data?: TLaporan;
}

const LaporanItem: React.FC<Props> = ({ nomor, data = undefined }) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  
  const isDefined: boolean = useMemo(() => data !== undefined, [data]);
  const title: string = useMemo(() => `LAPORAN ${nomor}`, [nomor]);

  const handleClick = useCallback(() => {
    if (isDefined) onToggle();
  }, [isDefined]);

  return (
    <>
      <Card isDefined={ isDefined } onClick={ handleClick }>
        <Label>
          { title }
        </Label>

        { isDefined && (
          <Icon
            alt="attachment"
            src={ AttachmentIcon }
          />
        )}
      </Card>

      <ModalLaporan
        isOpen={ isOpen }
        closeModal={ onClose }
        title={ title }
      />
    </>
  )
}

export default LaporanItem