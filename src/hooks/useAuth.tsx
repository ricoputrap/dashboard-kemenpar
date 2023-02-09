import React, { useEffect, useState } from 'react'
import useCookie from "../hooks/useCookie";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { cookie } = useCookie("token", "");

  useEffect(() => {
    const hasLoggedIn = cookie != "";
    setIsLoggedIn(hasLoggedIn);
  }, [cookie]);

  return isLoggedIn;
}

export default useAuth