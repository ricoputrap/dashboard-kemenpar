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
  usiaPertahun: TUsiaPertahun;
}

export type TUsiaActions = {
  getUsiaSetahun: (tahun: number, lokasi: string) => TUsia[];
  setUsiaPertahun: (data: TUsia[], tahun: number, lokasi: string) => void;
}