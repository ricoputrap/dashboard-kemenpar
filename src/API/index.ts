import useSWR from 'swr';
import axios from 'axios';
import { TKPIData } from '../types/home.type';
import pelatihan from './pelatihan';
import { pendampinganStatistik, pendampinganLaporan } from './pendampingan';
import sosialisasi from './sosialisasi';

export const fetcher = (url: string) => axios.get(url, { responseType: "json" }).then(res => res.data);

type THomeData = {
  pendampingan: TKPIData;
  pelatihan: TKPIData;
  sosialisasi: TKPIData;
}

const home = () => {
  const { data, error, isLoading } = useSWR<THomeData>("home/home.json", fetcher);
  return { data, error, isLoading }
}

export default {
  home,
  sosialisasi,
  pelatihan,
  
  pendampinganStatistik,
  pendampinganLaporan
}