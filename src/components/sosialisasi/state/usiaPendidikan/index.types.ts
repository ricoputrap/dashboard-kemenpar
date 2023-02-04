export type TUsiaPendidikanState = {
  tahun: number;
  lokasi: string;
}

export type TUsiaPendidikanActions = {
  setTahun: (tahun: number) => void;
  setLokasi: (lokasi: string) => void;
}