export type TJumlahTotal = {
  totalLaki: number;
  totalPerempuan: number;
}

export type TState = {
  jumlahTotal: TJumlahTotal;
}

export type TActions = {
  setJumlahTotal: (totalLaki: number, totalPerempuan: number) => void;
}