export interface IDataPointInput {
  label: string;
  value: number;
}

export interface IDataInput {
  name: string;
  data: IDataPointInput[];
}

export interface IDataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}