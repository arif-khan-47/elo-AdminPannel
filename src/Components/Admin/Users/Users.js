import React from 'react'
import Sidebar from '../Shared/Sidebar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import List from './List'


function Users() {
  // const access = useNavigate()
  // useEffect(() => {
  //   if (!localStorage.getItem('token')) {
  //     access('/login')
  //   }
  // }, [])

  return (
    <div className=''>
    <div className='grid grid-cols-6 h-screen'>
      <div className='col-span-1'>
        <Sidebar />
      </div>

      <div className='p-10 col-span-5 h-screen container'>
        <div className='grid grid-cols-5'>
          <div className={`col-span-3 text-4xl text-white fill-white mb-8`}>
            <div className='flex'>
              <svg className="w-10 mr-2" viewBox="0 0 512 512"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"></path><path stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"></path><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"></path></svg>
              <span> Users</span>
            </div>
          </div>
        </div>

        <div>
          <List />
        </div>
      </div>

    </div>

    </div>
  )
}

export default Users
