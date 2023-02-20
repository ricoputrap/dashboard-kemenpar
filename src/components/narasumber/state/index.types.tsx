export type TJumlahTotal = {
  totalLaki: number;
  totalPerempuan: number;
}

export type TKomposisiItem = {
  name: string;
  value: number;
}

export type TTopNarasumber = {
  name: string;
  value: number;
}

export type TState = {
  jumlahTotal: TJumlahTotal;
  komposisi: TKomposisiItem[];
  topList: TTopNarasumber[];
}

export type TActions = {
  setJumlahTotal: (totalLaki: number, totalPerempuan: number) => void;
  setKomposisi: (komposisi: TKomposisiItem[]) => void;
  setTopList: (topList: TTopNarasumber[]) => void;
}