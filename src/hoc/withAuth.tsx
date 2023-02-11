import { useEffect } from "react";
import { checkHasLoggedIn } from "../components/login/utils";

interface Props {
  [key: string]: any;
}

const withAuth = <P extends Props>(WrappedComponent: React.FC<P>) => {
  const WithAuth: React.FC<P> = (props) => {
    const hasLoggedIn = checkHasLoggedIn();

    useEffect(() => {
      if (!hasLoggedIn) {
        location.replace("/login");
      } 
    }, [hasLoggedIn]);

    return hasLoggedIn ? <WrappedComponent { ...props } /> : null;
  }

  return WithAuth;
}

export default withAuth;