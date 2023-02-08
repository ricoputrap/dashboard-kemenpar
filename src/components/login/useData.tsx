import useLoginStore from './state/store';

interface ReturnValue {
  username: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  handleSubmit: () => void;
}

const useData = (): ReturnValue => {
  const {
    username,
    password,
    setUsername,
    setPassword,
    handleSubmit
  } = useLoginStore();

  return {
    username,
    password,
    setUsername,
    setPassword,
    handleSubmit
  }
}

export default useData