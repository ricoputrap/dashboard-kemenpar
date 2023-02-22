export interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export const initialValues: FormValues = {
  name: "",
  email: "",
  phoneNumber: "",
  address: ""
}