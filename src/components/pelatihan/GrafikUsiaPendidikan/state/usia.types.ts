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