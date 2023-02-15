export type TNilai = {
  lokasi: string;
  nilai: number;
}

export type TNilaiPerJenis = {
  preTest: TNilai[];
  postTest: TNilai[];
}

export type TNilaiPerPelatihan = {
  [pelatihan: string]: TNilaiPerJenis;
}

export type TJenisPelatihan = "pelatihan_a_b" | "pelatihan_c";

export type TNilaiPertahun = {
  [tahun: number]: TNilaiPerPelatihan;
}

export type TNilaiState = {
  jenisPelatihan: TJenisPelatihan;
  nilaiPertahun: TNilaiPertahun;
}

export type TNilaiActions = {
  setJenisPelatihan: (jenisPelatihan: TJenisPelatihan) => void;
  setNilaiPertahun: (
    nilaiPreTest: TNilai[],
    nilaiPostTest: TNilai[],
    tahun: number,
    jenisPelatihan: TJenisPelatihan
  ) => void;
}