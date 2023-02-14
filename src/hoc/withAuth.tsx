import { checkHasLoggedIn } from "../components/login/utils";
import LoginForm from "../components/login";

interface Props {
  [key: string]: any;
}

const withAuth = <P extends Props>(WrappedComponent: React.FC<P>) => {
  const WithAuth: React.FC<P> = (props) => {
    const hasLoggedIn = checkHasLoggedIn();

    return hasLoggedIn
      ? <WrappedComponent { ...props } />
      : <LoginForm />;
  }

  return WithAuth;
}

export default withAuth;