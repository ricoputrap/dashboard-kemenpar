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

export type TRowData = {
  nama: string;
  institusi: string;
  domisili: string;
  materi: string[];
}

export type TState = {
  jumlahTotal: TJumlahTotal;
  komposisi: TKomposisiItem[];
  topList: TTopNarasumber[];

  searchValue: string;
  tableData: TRowData[];
}

export type TActions = {
  setJumlahTotal: (totalLaki: number, totalPerempuan: number) => void;
  setKomposisi: (komposisi: TKomposisiItem[]) => void;
  setTopList: (topList: TTopNarasumber[]) => void;
  setSearchValue: (searchValue: string) => void;
  setTableData: (tableData: TRowData[]) => void;
 }