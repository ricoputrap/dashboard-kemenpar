export type TLaporanBulanan = {
  bulan: string;
  url: string;
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