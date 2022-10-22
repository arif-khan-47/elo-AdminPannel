import {React, useState} from 'react'
import ReactApexChart from 'react-apexcharts'

function TotalUsers() {
    const [state, setState]=useState({
        series: [{
            data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
          }],
          options: {
          theme:{mode:'dark'},

            chart: {
              type: 'line',
              height: 450
            },
            stroke: {
              curve: 'smooth',
            },
            dataLabels: {
              enabled: false
            },
            title: {
              text: 'Total Users',
              align: 'left'
            },
            markers: {
              hover: {
                sizeOffset: 4
              }
            }
          },     
        
    
    })

    
  return (
    <div className='text-white'>     
<ReactApexChart options={state.options} series={state.series} type="line" height={220} width={600} />
    </div>
  )
}

export default TotalUsers
