import {React, useState} from 'react'
import ReactApexChart from 'react-apexcharts'


function Userchart() {
    const [state, setState]=useState({
        series: [{
          name: 'Male',
          data: [31, 40, 58, 51, 82, 109, 100, 160]
        }, {
          name: 'Female',
          data: [11, 99, 45, 32, 34, 52, 41, 100]
        }],
        options: {
          theme:{mode:'dark'},
          title: {
            text: 'Male / Female',
            align: 'left'
          },
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
    })

    
  return (
    <div className='text-white'>     
<ReactApexChart options={state.options} series={state.series} type="area" height={250} width={600} />
    </div>
  )
}

export default Userchart

