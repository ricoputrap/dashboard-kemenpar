import React, { useEffect } from 'react'
import useChampionStore from './state/store'
import API from '../../API';
import { TLaporanBulanan, TLaporanPerDesa, TResponseLaporanPerDesa } from './state/index.types';

interface ReturnValue {
  championError: any;
  isChampionLoading: boolean;
}

const useInitData = (): ReturnValue => {
  const activeDPP: string = useChampionStore(state => state.activeDPP);
  const setLaporanPerDPP = useChampionStore(state => state.setLaporanPerDPP);

  const { data, error, isLoading } = API.localChampion(activeDPP);

  useEffect(() => {
    if (!data) return;
    
    const dataMentah: TResponseLaporanPerDesa[] = data.data.data;
    const dataSetahun: TLaporanPerDesa[] = dataMentah.map((data) => {
      const { desa, kab, kec, profil } = data;

      const laporan: TLaporanBulanan[] = [];
      laporan.push({
        bulan: "Oktober 2022",
        url: data['October 2022'] || ""
      });
      laporan.push({
        bulan: "November 2022",
        url: data['November 2022'] || ""
      });
      laporan.push({
        bulan: "Desember 2022",
        url: data['December 2022'] || ""
      });
      laporan.push({
        bulan: "Januari 2023",
        url: data['January 2023'] || ""
      });
      laporan.push({
        bulan: "Februari 2023",
        url: data['February 2023'] || ""
      });
      laporan.push({
        bulan: "Maret 2023",
        url: data['March 2023'] || ""
      });
      laporan.push({
        bulan: "April 2023",
        url: data['April 2023'] || ""
      });
      laporan.push({
        bulan: "Mei 2023",
        url: data['May 2023'] || ""
      });
      laporan.push({
        bulan: "Juni 2023",
        url: data['June 2023'] || ""
      });
      laporan.push({
        bulan: "Juli 2023",
        url: data['July 2023'] || ""
      });
      laporan.push({
        bulan: "Agustus 2023",
        url: data['August 2023'] || ""
      });
      laporan.push({
        bulan: "September 2023",
        url: data['September 2023'] || ""
      });
      return {
        desa,
        kab,
        kec,
        profile: profil,
        laporan
      };
    });
    setLaporanPerDPP(activeDPP, dataSetahun);
  }, [data]);

  return {
    championError: error,
    isChampionLoading: isLoading
  }
}

export default useInitData