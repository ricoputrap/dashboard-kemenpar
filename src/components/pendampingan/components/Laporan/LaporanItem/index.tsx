import React, { useMemo } from 'react'
import AttachmentIcon from "../../../../../assets/icons/attachment.svg";
import { Card, Icon, Label } from './index.styles';
import { TLaporan } from '../../../types/laporan.types';

interface Props {
  nomor: number;
  data?: TLaporan;
}

const LaporanItem: React.FC<Props> = ({ nomor, data = undefined }) => {
  const isDefined: boolean = useMemo(() => data !== undefined, [data]);

  return (
    <Card isDefined={ isDefined }>
      <Label>
        LAPORAN { nomor }
      </Label>

      { isDefined && (
        <Icon
          alt="attachment"
          src={ AttachmentIcon }
        />
      )}
    </Card>
  )
}

export default LaporanItem