import useSWR from 'swr';
import axios, { AxiosRequestConfig } from 'axios';
import { TKPIData } from '../types/home.type';
import { pendampinganStatistik, pendampinganLaporan } from './pendampingan';
import sosialisasi from './sosialisasi';
import pelatihan from './pelatihan';
import narasumber from './narasumber';

export const fetcher = (url: string, token: string = "") => {
  const config: AxiosRequestConfig<any> = { responseType: "json" }
  
  if (!!token) {
    config.headers = {
      Authorization: "Token " + token
    }
  }

  return axios.get(url, config).then(res => res.data);
}

type THomeData = {
  pendampingan: TKPIData;
  pelatihan: TKPIData;
  sosialisasi: TKPIData;
}

const home = () => {
  const source: string = "data/home/home.json";
  const { data, error, isLoading } = useSWR<THomeData>(source, fetcher);
  return { data, error, isLoading }
}

export default {
  home,
  sosialisasi,
  pelatihan,
  narasumber,
  
  pendampinganStatistik,
  pendampinganLaporan
}