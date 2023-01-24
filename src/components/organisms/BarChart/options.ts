const computeOptions = (labels: string[]) => {
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        border: {
          display: true,
          color: "#EAC170"
        },
        grid: {
          display: false
        },
        ticks: {
          display: true,
          color: "white",
          font: {
            size: 11,
            weight: 700,
            family: "Montserrat"
          },
          callback: (value: any, index: number) => {
            return labels[index].split(" ")
          },
        },
        offset: true
      },
      y: {
        border: {
          display: true,
          color: "#EAC170"
        },
        grid: {
          display: false
        },
        ticks: {
          display: true,
          color: "white",
          maxTicksLimit: 4,
          padding: 10,
          font: {
            size: 11,
            weight: 700,
            family: "Montserrat"
          },        
        }
      }
    }
  };

  return options;
}

export default computeOptions;