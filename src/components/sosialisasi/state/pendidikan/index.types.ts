export type TPendidikan = {
  pendidikan: string;
  jumlah: number;
}

export type TPendidikanPerlokasi = {
  [lokasi: string]: TPendidikan[];
}

export type TPendidikanPertahun = {
  [tahun: number]: TPendidikanPerlokasi;
}

export type TPendidikanState = {
  pendidikanPertahun: TPendidikanPertahun;
}

export type TPendidikanActions = {
  getPendidikanSetahun: (tahun: number, lokasi: string) => TPendidikan[];
  setPendidikan: (data: TPendidikan[], tahun: number, lokasi: string) => void;
}