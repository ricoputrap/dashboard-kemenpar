export type TLoginState = {
  username: string;
  password: string;
  rememberMe: boolean;
}

export type TLoginActions = {
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  toggleRememberMe: () => void;
}