import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const myRenderer = (chartInstance: any) => {
  console.log("===== chartInstance:", chartInstance);
  const xScale = chartInstance.scales["x-axis-0"];
  const yScale = chartInstance.scales["y-axis-0"];
  const ctx = chartInstance.chart.ctx;

  xScale.ticks.forEach((value: any, index: any) => {
    const xPos = xScale.getPixelForTick(index);
    const yPos = yScale.top;

    const lines = value.split(" ");
    lines.forEach((line: any, idx: any) => {
      ctx.fillText(line, xPos, yPos + (idx + 1) * 20);
    });
  });
};


let labels = ['pemandu wisata', 'home stay', 'cendra mata', 'kuliner', 'pengelola wisata', 'jasa transportasi', 'pelaku budaya'];
labels = labels.map(item => item.toUpperCase());

export const options: any = {
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

const data: ChartData<"bar", number[], string> = {
  labels,
  datasets: [
    {
      label: "Jumlah Usaha",
      data: [1500, 1900, 2500, 1000, 800, 1300, 2000],
      backgroundColor: "#FF3D00",
      barPercentage: 0.5
    }
  ]
}

interface Props {
  width: string;
  height: string;
}

const BarChart: React.FC<Props> = ({ width, height }) => {
  return (
    <Bar
      options={options}
      data={ data }
      width={ width }
      height={ height }
    />
  )
}

export default BarChart