import useDataTableStore from '../../state/store';

interface ReturnValue {
  searchValue: string;
  handleChange: (value: string) => void;
}

const useData = (): ReturnValue => {
  const searchValue = useDataTableStore(state => state.searchValue);
  const setSearchValue = useDataTableStore(state => state.setSearchValue);

  const handleChange = (value: string) => {
    setSearchValue(value);
  }

  return { searchValue, handleChange }
}

export default useData