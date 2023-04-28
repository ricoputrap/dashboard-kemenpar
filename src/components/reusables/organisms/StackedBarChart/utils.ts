export const computeOptions = (
  labels: string[],
  fontSize: number = 12,
  fontWeight: number = 600,
  borderColor: string = "#D9D9D9",
  showGrid: boolean = false
): any => {
  return {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        stacked: true,
        border: {
          display: true,
          color: borderColor
        },
        grid: {
          display: showGrid
        },
        ticks: {
          display: true,
          color: "white",
          font: {
            size: fontSize,
            weight: fontWeight,
            family: "Montserrat"
          },
          callback: (value: any, index: number) => {
            return labels[index]?.split(" ")
          },
        },
      },
      y: {
        stacked: true,
        border: {
          display: true,
          color: borderColor
        },
        grid: {
          display: showGrid
        },
        ticks: {
          display: true,
          color: "white",
          font: {
            size: fontSize,
            weight: fontWeight,
            family: "Montserrat"
          },
        },
      }
    }
  }
}