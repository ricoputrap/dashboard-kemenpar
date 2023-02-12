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