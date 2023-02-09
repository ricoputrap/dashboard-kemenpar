import React from 'react'
import BasePage from '../components/templates/BasePage'
import useDataPelatihan from '../hooks/useDataPelatihan'
import { Box } from '@chakra-ui/react';
import GroupedKPIPeserta from '../components/reusables/organisms/GroupedKPIPeserta';
import useAuth from '../hooks/useAuth';
import LoginForm from '../components/login';

const Pelatihan: React.FC = () => {
  const isLoggedIn = useAuth();
  const { kpi } = useDataPelatihan();

  if (!isLoggedIn) return (
    <LoginForm />
  )

  return (
    <BasePage id="page-pelatihan">
      <Box width="390px">
        <GroupedKPIPeserta
          title="Jumlah Peserta Pelatihan DPP"
          data={ kpi }
        />
      </Box>
    </BasePage>
  )
}

export default Pelatihan;