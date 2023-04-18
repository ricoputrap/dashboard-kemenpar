const computeOptions = (labels: string[], showGrid: boolean = false) => {
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
            size: 9,
            weight: 700,
            family: "Montserrat"
          },
          callback: (value: any, index: number) => {
            return labels[index]?.split(" ")
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

  // show grid
  if (showGrid) {
    options.scales.x.grid = {
      display: true,
      color: "#FFFFFF80"
    }

    options.scales.y.grid = {
      display: true,
      color: "#FFFFFF80"
    }
  }

  return options;
}

export default computeOptions;