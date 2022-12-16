import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

const Chart = ({ user }) => {

    const option = {
        plugins: {
            title: {
              display: false,
              text: 'Grid Line Settings'
            },
            legend: {
                display: false
            },
            
        },
        scales: {
            x:  {
                grid: {
                    display: false
                },
                display: false
            },
            y: {
                grid: {
                    display: false
                },
                display: false
            },
        }
    }

  const [data, setData]= useState({
    labels:["Jan","Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
    datasets:[
      {
        data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        backgroundColor:'yellow',
        borderColor:'green',
        tension:0.2,
        fill:false,
        pointStyle:'circle',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        pointRadius: 0,
        showLine:true
      }
    ]
  })
  return (
    <>
      <Line data={data} options={option} />
    </>
  );
}

export default Chart;