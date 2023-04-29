import React, { useMemo } from 'react'

const useData = () => {
  const labels = useMemo<string[]>(() => {
    const LABELS: string[] = ["toba", "byp", "bts", "lombok", "labuan bajo", "wakatobi"];
    return LABELS.map(label => label.toUpperCase());
  }, []);

  const datasets = useMemo(() => [
    {
      label: "Follower",
      data: [383400, 305100, 313700, 701700, 316300, 226400],
      backgroundColor: "#00FFFF"
    },
    {
      label: "Reach",
      data: [64089, 29659, 22550, 29886, 177972, 38521],
      backgroundColor: "#0085FF"
    },
    {
      label: "Engagement",
      data: [6929, 7658, 7087, 4032, 10974, 3446],
      backgroundColor: "#7A4DFC"
    }
  ], []);

  return { labels, datasets }
}

export default useData