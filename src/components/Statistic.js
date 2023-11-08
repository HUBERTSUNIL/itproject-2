import React, { useState } from 'react'
import Navbar from './Navbar'
import Chart from "react-apexcharts";
import Form from './Form';


const Statistic = () => {
  const [options] = useState({
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ['Fever', 'Headache', 'Cough', 'Runny Nose', 'Cold', 'Diarrhea', 'Asthma', 'Pneumonia', 'Acidity', 'Conjunctivitis']
    }
  });

  const [series] = useState([
    {
      name: "Patients",
      data: [10, 7, 15, 12, 13, 4, 2, 1, 5, 3]
    }
  ]);
  const [time] = useState({
    chart: {
      id: "Graph"
    },
    xaxis: {
      categories: ['9:00','9:30','10:00','10:30','11:00','11:30','12:00','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30']
    }
  });
  const [rush] = useState([
    {
      name: "Patients",
      data: [10, 7, 15, 12, 13, 4, 2, 1, 5, 3]
    }
  ]);

  return (
    <div className="app">
      <Navbar />
      <div className="d-flex justify-content-evenly my-3 p-3">
        <div className="mixed-chart my-3 p-3" id='chart1'>
          <Chart options={options} series={series} type="bar" width={500} />
        </div>
        <div className='my-3 p-3' id="chart2">
          <Chart
            options={time}
            series={rush}
            type="line"
            width="500"
          />
        </div>

      </div>
      <Form/>
    </div>
  )
};
export default Statistic
