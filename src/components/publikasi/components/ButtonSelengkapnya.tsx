import { Button } from '@chakra-ui/react';
import React, { useMemo } from 'react'

interface Props {
  url: string;
  fullWidth?: boolean;
}

const ButtonSelengkapnya: React.FC<Props> = ({ url, fullWidth = false }) => {
  const width = useMemo(() => fullWidth ? "100%" : "auto", [fullWidth])
  return (
    <Button
      background="#EAC170"
      color="#112647"
      as="a"
      href={ url }
      target="_blank"
      width={ width }
    >
      SELENGKAPNYA
    </Button>
  )
}

export default ButtonSelengkapnya