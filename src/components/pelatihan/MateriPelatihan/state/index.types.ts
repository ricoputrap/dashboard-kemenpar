export type TMateri = {
  label: string;
  url?: string;
}

export type TMateriPertahun = {
  [tahun: number]: TMateri[];
}

export type TMateriState = {
  materiPertahun: TMateriPertahun;
  activeMateri: string;
}

export type TMateriActions = {
  setMateriPertahun: (data: TMateri[], tahun: number) => void;
  setActiveMateri: (activeMateri: string) => void;
}