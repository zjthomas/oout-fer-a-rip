import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './styles/Graph.css';

const Graph = ({ graphData }) => (
  <div className={styles.wrapper}>
    <Bar data={{
      labels: graphData.TMAX.map((val, i) => val.t.toLocaleDateString()),
      datasets: [{
        label: 'Max Temperature (F)',
        type: 'line',
        backgroundColor: 'rgba(255, 98, 93, 100)',
        fill: false,
        borderColor: 'rgba(255, 98, 93, 100)',
        borderWidth: 2,
        pointRadius: 0,
        data: graphData.TMAX,
      },
      {
        label: 'Avg Temperature (F)',
        type: 'line',
        backgroundColor: 'rgba(235, 186, 61, 92)',
        fill: false,
        borderColor: 'rgba(235, 186, 61, 92)',
        borderWidth: 2,
        pointRadius: 0,
        data: graphData.TAVG,
      },
      {
        label: 'Min Temperature (F)',
        type: 'line',
        backgroundColor: 'rgba(79, 255, 224, 100)',
        fill: false,
        borderColor: 'rgba(79, 255, 224, 100)',
        borderWidth: 2,
        pointRadius: 0,
        data: graphData.TMIN,
      },
      {
        label: 'Snow Depth (in)',
        type: 'line',
        // backgroundColor: 'rgb(255, 99, 132)',
        fill: false,
        pointRadius: 0,
        borderColor: 'black',
        data: graphData.SNWD,
      },
      {
        label: 'Snow fall (in)',
        backgroundColor: 'black',
        borderColor: 'black',
        data: graphData.SNOW,
        type: 'bar',
      },
      ],
    }}
    />
  </div>
);

export default Graph;
