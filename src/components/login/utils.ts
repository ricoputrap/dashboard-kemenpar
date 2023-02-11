import { getCookie } from "../../utils/cookie"

export const checkHasLoggedIn = () => {
  const token = getCookie("token");
  const hasLoggedIn = token != "";
  return hasLoggedIn;
}