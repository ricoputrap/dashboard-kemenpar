import React, { useMemo } from 'react'
import AttachmentIcon from "../../../../../assets/icons/attachment.svg";
import { Card, Icon, Label } from './index.styles';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';

interface Props {
  nomor: number;
  url?: string;
}

const LaporanItem: React.FC<Props> = ({ nomor, url = "" }) => {
    const isDefined: boolean = useMemo(() => !!url, [url]);
    const title: string = useMemo(() => `LAPORAN ${nomor}`, [nomor]);
    const target: React.HTMLAttributeAnchorTarget = useMemo(() => {
      if (url !== "#")
        return "_blank";
      return "_self";
    }, [url]);

  return (
    <LinkBox>
      <LinkOverlay href={ url } target={ target }>
        <Card isDefined={ isDefined }>
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
      </LinkOverlay>
    </LinkBox>
  )
}

export default LaporanItem