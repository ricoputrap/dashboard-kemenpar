import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const home = () => {
  const { data, error, isLoading } = useSWR("home/home.json", fetcher);
  return { data, error, isLoading }
}

export default {
  home
}