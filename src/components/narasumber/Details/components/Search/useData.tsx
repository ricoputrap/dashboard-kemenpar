import useNarasumberStore from '../../../state/store';

interface ReturnValue {
  searchValue: string;
  handleChange: (value: string) => void;
}

const useData = (): ReturnValue => {
  const searchValue = useNarasumberStore(state => state.searchValue);
  const setSearchValue = useNarasumberStore(state => state.setSearchValue);

  const handleChange = (value: string) => {
    setSearchValue(value);
  }

  return { searchValue, handleChange }
}

export default useData