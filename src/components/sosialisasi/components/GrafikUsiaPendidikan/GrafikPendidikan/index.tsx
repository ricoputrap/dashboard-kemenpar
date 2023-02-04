import BarChart from "../../../../reusables/organisms/BarChart";
import useData from "./useData";

interface Props {
  width: number;
}

const GrafikPendidikan: React.FC<Props> = ({ width }) => {
  const { title, labels, dataset } = useData();

  return (
    <BarChart
      title={ title }
      width={`${width}px`}
      height="150px"
      labels={ labels }
      dataset={ dataset }
    />
  )
}

export default GrafikPendidikan;