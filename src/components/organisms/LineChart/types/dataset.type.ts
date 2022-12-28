export interface IDataPointInput {
  label: string;
  value: number;
  category?: string;
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

export interface ILabelColor {
  label: string;
  color: string;
}