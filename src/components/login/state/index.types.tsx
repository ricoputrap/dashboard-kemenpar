export type TLoginState = {
  isLoading: boolean;
  username: string;
  password: string;
  rememberMe: boolean;
}

export type TLoginActions = {
  setIsLoading: (isLoading: boolean) => void;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  toggleRememberMe: () => void;
}