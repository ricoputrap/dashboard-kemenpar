export const options = {
  responsive: true,
  background: "white",
  legend: {
    display: false
  },
  scales: {
    x: {
      border: {
        display: true,
        color: "#EAC1704D"
      },
      grid: {
        display: true,
        color: "#EAC1704D"
      },
      ticks: {
        display: true,
        color: "white",
        stepSize: 2
      }
    },
    y: {
      border: {
        display: true,
        color: "#EAC1704D"
      },
      grid: {
        display: true,
        color: "#EAC1704D"
      },
      ticks: {
        display: true,
        color: "white",
        maxTicksLimit: 4
      }
    }
  }
}

export const labels: string[] = [
  "TOBA",
  "BYP",
  "BTS",
  "LOMBOK",
  "LABUAN BAJO",
  "WAKATOBI"
];