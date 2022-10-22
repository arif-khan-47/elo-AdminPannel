import {React, 
  useEffect, 
  // useState 
} from 'react'
import Sidebar from '../Shared/Sidebar'
import { useNavigate } from 'react-router-dom'
import Userchart from './UsersChart'
import TotalUsers from './TotalUsers'
import OnlinePie from './OnlinePie'
import BarChart from './BarChart'
// import { Jwt } from 'jsonwebtoken'

function Home() {

  // const access = useNavigate()
  // useEffect(() => {
  //   if (!localStorage.getItem('token')){
  //     access('/login')
  //   }

  // //   const token = localStorage.getItem('token')
  // //   if (token) {
  // //       const user = Jwt.decode(token)
  // //       if (!user) {
  // //         localStorage.removeItem('token')
  // //         history.replace('/login')
  // //       }
  // // else{
  // //         populateAdmin()
  // //       }
  //     // } 
  //     },[])

  
  return (
    <div className='grid grid-cols-6'>
      <div className='col-span-1'>
        <Sidebar />
      </div>
      <div className='p-10 col-span-5 h-screen'>
        <div className={`flex text-4xl text-white fill-white mb-8`}>
          <div>
            <svg className="w-10 mr-2" viewBox="0 0 512 512">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
              ></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"></path></svg>
          </div>
          <div> Dashboard</div>
        </div>
        <div className='flex'>
        <TotalUsers/>
        <OnlinePie/>
      </div>
      <div className='flex'>
        <BarChart/>
        <Userchart/>
      </div>
      </div>


      
    </div>
  )
}

export default Home
