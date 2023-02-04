export type TUsia = {
  usia: string;
  jumlah: number;
}

export type TUsiaPerlokasi = {
  [lokasi: string]: TUsia[];
}

export type TUsiaPertahun = {
  [tahun: number]: TUsiaPerlokasi;
}

export type TUsiaState = {
  tahun: number;
  lokasi: string;
  usiaPertahun: TUsiaPertahun;
}

export type TUsiaActions = {
  getUsiaSetahun: (tahun: number, lokasi: string) => TUsia[];
  setTahun: (tahun: number) => void;
  setLokasi: (lokasi: string) => void;
  setUsiaPertahun: (data: TUsia[], tahun: number, lokasi: string) => void;
}