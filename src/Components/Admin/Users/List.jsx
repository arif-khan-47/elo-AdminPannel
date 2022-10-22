import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';


function List() {  
  // useEffect(() => {
  //   axios.get("mongodb://localhost:27017/Users")
  //   // axios.get("http://localhost:3001/user-data")
  //     .then(res => {
  //       console.log(res.data)
  //       // setData(res.data)
  //     }).catch(error => console.log(error))
  // }, []);

  const data = [
    { name: "Anom", username: "username_1", active: true, status: true },
    { name: "Megha", username: "username_7", active: false, status: true },
    { name: "Subham", username: "username_2", active: true, status: false },
    { name: "Shivam", username: "username_1", active: true, status: true },
    { name: "Megha", username: "username_7", active: false, status: true },
    { name: "Subham", username: "username_2", active: true, status: false },
    { name: "Megha", username: "username_7", active: false, status: false },
    { name: "Megha", username: "username_7", active: false, status: true },
    { name: "Anom", username: "username_1", active: true, status: false },
    { name: "Anom", username: "username_1", active: true, status: false },
    { name: "Megha", username: "username_7", active: false, status: true },
    { name: "Subham", username: "username_2", active: true, status: false },
    { name: "Shivam", username: "username_1", active: true, status: false },
    { name: "Megha", username: "username_7", active: false, status: true },
    { name: "Subham", username: "username_2", active: true, status: true },
    { name: "Megha", username: "username_7", active: false, status: true },
    { name: "Megha", username: "username_7", active: false, status: true },
    { name: "Anom", username: "username_1", active: true, status: false },
  ]

  const [search, setSearch] = useState("")

  function Deactivation() {
    window.confirm("Are your sure to change status of the user?")

  }

  return (
    <>
      <div className='text-white fill-white mb-10 -mt-20 flex justify-end'>
        <input type={"text"} className='bg-transparent border-gray-400 text-lg focus:outline-none border-b-[1px] p-[7px] w-[30%]' placeholder='Search Name or Username' onChange={(e) => { setSearch(e.target.value) }} />
        <div className='pt-[7px] pr-[10px] pl-[7px] border-b-[1px] border-gray-400'>
          <svg className="w-8 opacity-[50%]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448"></path></svg>
        </div>
      </div>



      <div className='text-white'>
        <table className='border-collapse border border-slate-500'>
          <thead><tr>
            <th className='border border-slate-500 text-xl w-[40rem] p-3'>Name</th>
            <th className='border border-slate-500 text-xl w-[40rem] p-3'>Username</th>
            <th className='border border-slate-500 text-xl w-[40rem] p-3'>Active Status</th>
            <th className='border border-slate-500 text-xl w-[40rem] p-3'>Deactivate</th>

          </tr>
          </thead>
          <tbody>
            {data.filter((val) => {
              if (search === " ") {
                return val
              } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                return val
              } else if (val.username.toLowerCase().includes(search.toLowerCase())) {
                return val
              }
              return false

            }).map((val, key) => {
              return (
                <tr key={key}>
                  <td className='border border-slate-600 text-xl text-center font-thin p-2'>{val.name}</td>
                  <td className='border border-slate-600 text-xl text-center font-thin p-2'>{val.username}</td>
                  <td className='border border-slate-600 text-xl justify-center font-thin p-3 flex'><div className={`p-[5px] my-auto ${val.active === true ? "bg-green-700" : "bg-red-600"} mr-1 rounded-full`}></div>{val.active === true ? "Online" : "Offline"}</td>
                  <td className='border border-slate-600 text-xl text-center font-thin p-2'><button className='bg-gray-600 w-[60%] p-1 rounded-full' onClick={Deactivation}>{val.status === true ? "Activated" : "Deactivated"}</button></td>
                </tr>
              )
            })}
          </tbody>

        </table>
      </div>

    </>
  )
}

export default List
