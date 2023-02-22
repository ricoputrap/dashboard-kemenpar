import { create } from "zustand";
import { TLoginActions, TLoginState } from "./index.types";

const useLoginStore = create<TLoginState & TLoginActions>((set, get) => ({
  isLoading: false,
  username: "",
  password: "",
  rememberMe: false,

  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setUsername: (username: string) => set({ username }),
  setPassword: (password: string) => set({ password }),
  toggleRememberMe: () => set({
    rememberMe: !get().rememberMe
  })
}));

export default useLoginStore;