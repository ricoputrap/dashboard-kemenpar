import useSWR from 'swr';
import axios, { AxiosRequestConfig } from 'axios';
import { TKPIData, TMapData } from '../types/home.type';
import { pendampinganStatistik, pendampinganLaporan } from './pendampingan';
import sosialisasi from './sosialisasi';
import pelatihan from './pelatihan';
import narasumber from './narasumber';
import { localChampion } from './local-champion';
import { getCookie } from '../utils/cookie';

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
  map: TMapData[];
}

const home = () => {
  const URL: string = "https://kampanye-sadarwisata.com/api/main";
  const token = getCookie("token");

  const source: string = "data/home/home.json";
  const { data, error, isLoading } = useSWR<THomeData>(
    [URL, token],
    ([URL, token]) => fetcher(URL, token)
  );
  return { data, error, isLoading }
}

export default {
  home,
  sosialisasi,
  pelatihan,
  narasumber,
  localChampion,
  
  pendampinganStatistik,
  pendampinganLaporan,
}