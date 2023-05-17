export type TLaporanBulanan = {
  bulan: string;
  url: string;
}

export type TResponseLaporanPerDesa = {
  desa: string;
  kec: string;
  kab: string;
  profil: string;
  "October 2022": string;
  "November 2022": string;
  "December 2022": string;
  "January 2023": string;
  "February 2023": string;
  "March 2023": string;
  "April 2023": string;
  "May 2023": string;
  "June 2023": string;
  "July 2023": string;
  "August 2023": string;
  "September 2023": string;
}

export type TLaporanPerDesa = {
  desa: string;
  kec: string;
  kab: string;
  profile: string;
  laporan: TLaporanBulanan[];
}

export type TLaporanPerDPP = {
  [dpp: string]: TLaporanPerDesa[];
}

export type TChampionState = {
  activeDPP: string;
  laporanPerDPP: TLaporanPerDPP;
}

export type TChampionActions = {
  setActiveDPP: (activeDPP: string) => void;
  setLaporanPerDPP: (dpp: string, daftarLaporan: TLaporanPerDesa[]) => void;
  getLaporanByDPP: (dpp: string) => TLaporanPerDesa[];
}