import useSWR from 'swr';
import axios from 'axios';
import { TKPIData } from '../types/home.type';

const fetcher = (url: string) => axios.get(url, { responseType: "json" }).then(res => res.data);

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
  home
}