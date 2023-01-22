import useSWR from 'swr';
import axios from 'axios';
import { TKPIData } from '../types/home.type';
import { KPIPesertaType } from '../types/sosialisasi.type';
import pelatihan from './pelatihan';

export const fetcher = (url: string) => axios.get(url, { responseType: "json" }).then(res => res.data);

type THomeData = {
  pendampingan: TKPIData;
  pelatihan: TKPIData;
  sosialisasi: TKPIData;
}

type TSosialisasiData = {
  kpi: KPIPesertaType[]
}

type TSosialisasiResponse = {
  data: TSosialisasiData
}

const home = () => {
  const { data, error, isLoading } = useSWR<THomeData>("home/home.json", fetcher);
  return { data, error, isLoading }
}

const sosialisasi = () => {
  const { data, error, isLoading } = useSWR<TSosialisasiResponse>("sosialisasi/index.json", fetcher);
  return { data, error, isLoading }
}

export default {
  home,
  sosialisasi,
  pelatihan
}