import useNarasumberStore from "../../state/store";

const useData = () => {
  const topList = useNarasumberStore(state => state.topList);

  return topList;
}

export default useData;