import useSWR from 'swr';
import { KPIPesertaType } from '../components/KPIPeserta/index.types';
import { fetcher } from '.';

type TPelatihanData = {
  kpi: KPIPesertaType[];
}

type TPelatihanRespose = {
  data: TPelatihanData
}

const pelatihan = () => {
  const { data, error, isLoading } = useSWR<TPelatihanRespose>("pelatihan/index.json", fetcher);
  return { data, error, isLoading }
}

export default pelatihan;