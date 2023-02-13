import { Flex } from '@chakra-ui/react'
import React from 'react'
import MateriItem from '../MateriItem';
import { TMateri } from '../../state/index.types';
import useData from './useData';

const DaftarMateri: React.FC = () => {
  const daftarMateri: TMateri[] = useData();

  return (
    <Flex gap="10px" alignItems="center" flexWrap="wrap">
      {daftarMateri.map(materi => (
        <MateriItem
          key={ materi.label }
          label={ materi.label }
          url={ materi.url }
        />
      ))}
    </Flex>
  )
}

export default DaftarMateri