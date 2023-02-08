import { create } from "zustand";
import { TLoginActions, TLoginState } from "./index.types";

const useLoginStore = create<TLoginState & TLoginActions>((set, get) => ({
  username: "",
  password: "",
  rememberMe: false,

  setUsername: (username: string) => set({ username }),
  setPassword: (password: string) => set({ password }),
  toggleRememberMe: () => set({
    rememberMe: !get().rememberMe
  }),
  handleSubmit: () => {
    console.log("===== username:", get().username);
    console.log("===== password:", get().password);
    console.log("===== rememberMe:", get().rememberMe);
  }
}));

export default useLoginStore;