import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { useState } from 'react'

function OnlinePie() {
    const [state, setState]=useState({
        series: [44, 55,],
            options: {
          theme:{mode:'dark'},

              chart: {
                width: 380,
                type: 'donut',
              },
              plotOptions: {
                pie: {
                  startAngle: 0,
                  endAngle: -360
                }
              },
              dataLabels: {
                enabled:false
              },
              fill: {
                type: 'gradient',
                colors: ['#808080', '#00FF00']
              },
              legend: {
                formatter: function(val, opts) {
                  return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
              },
              title: {
                text: 'Online User'
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'top'
                  }
                }
              }]
            },
          
    })

    
  return (
    <div className='text-white ml-5'>     
<ReactApexChart options={state.options} series={state.series} type="donut" width={355} />
    </div>
  )
}

export default OnlinePie
