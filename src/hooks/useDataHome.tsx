import { useEffect, useState } from 'react'
import API from '../API';

const useDataHome = () => {
  const [description, setDescription] = useState<string>("");
  const { data, error, isLoading } = API.home();

  useEffect(() => {
    if (!!data)
      setDescription(data.data.description);
  }, [data]);

  return { description, error, isLoading }
}

export default useDataHome