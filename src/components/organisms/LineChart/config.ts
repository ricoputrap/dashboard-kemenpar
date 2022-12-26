export const options = {
  responsive: true,
  background: "white",
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      border: {
        display: true,
        color: "#EAC1704D"
      },
      grid: {
        display: true,
        color: "#FFFFFF80"
      },
      ticks: {
        display: true,
        color: "white",
        stepSize: 2,
        font: {
          size: 15,
          weight: "500"
        }
      }
    },
    y: {
      border: {
        display: true,
        color: "#EAC1704D"
      },
      grid: {
        display: true,
        color: "#FFFFFF80"
      },
      ticks: {
        display: true,
        color: "white",
        maxTicksLimit: 4,
        padding: 14,
        font: {
          size: 15,
          weight: "500"
        }
      }
    }
  }
}