export type TMateri = {
  label: string;
  url?: string;
}

export type TMateriPerJenis = {
  [jenis: string]: TMateri[];
}

export type TMateriPertahun = {
  [tahun: number]: TMateriPerJenis;
}

export type TMateriState = {
  jenisMateri: string;
  materiPertahun: TMateriPertahun;
}

export type TMateriActions = {
  setJenisMateri: (jenisMateri: string) => void;
  setMateriPertahun: (data: TMateri[], tahun: number, jenisMateri: string) => void;
}