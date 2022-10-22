import React from 'react'
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'
// const Bartool= [
//     {
//         icon:` <path
//         fill="none"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="32"
//         d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
//       ></path>
//       <path
//         fill="none"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="32"
//         d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
//       ></path>` ,option:"Dashboard", link:"/"
//     },
//     {
//         icon:`` ,option:"Settings", link:"/setting"
//     }
// ]
// function logOut() {
    // if (window.confirm("You want to logout from this admin pannel?")) {
    //     window.location.reload(false);
    //     localStorage.removeItem('token')
    // }
// }



function Sidebar() {
    const dispatch = useDispatch();



    return (
        <div className='h-full w-[17%] bg-gray-800 rounded-tr-3xl container m-auto fixed'>
            <div className='text-white text-4xl text-center py-10'>
                ELO <span className='text-lg'>Admin Pannel</span>
            </div>

            <div className='ml-8'>
                {/* {Bartool.map((item, index) => (
            <Link to={item.link}>
            <li className='text-center text-gray-400 text-xl hover:text-white mb-8'>
                <svg  className="w-10" viewBox="0 0 512 512">{item.icon}</svg>
                {item.option}
            </li>
            </Link>
            ))} */}

                {/* Dashboard */}
                <NavLink to='/dashboard' >
                    <div className={`flex text-gray-400 text-xl hover:text-white fill-transparent hover:fill-white mb-8`}>

                        <div>
                            <svg className="w-6 mr-2" viewBox="0 0 512 512">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                                ></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"></path></svg>
                        </div>
                        <div> Dashboard</div>
                    </div>
                </NavLink>


                {/* Users */}
                <NavLink to='/users'>
                    <div className={`flex text-gray-400 text-xl hover:text-white fill-transparent hover:fill-white mb-8`}>
                        <div>
                            <svg className="w-7 mr-2" viewBox="0 0 512 512"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"></path><path stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"></path><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"></path></svg>
                        </div>
                        <div> Users</div>
                    </div>
                </NavLink>


                {/* Notifications */}
                <NavLink to='/notification'>
                    <div className={`flex text-gray-400 text-xl hover:text-white fill-transparent hover:fill-white mb-8`}>
                        <div>
                        <span className="absolute ml-4 inline-flex h-[8px] w-[8px] rounded-full bg-sky-400"></span>
                            <svg className="w-7 mr-2" viewBox="0 0 512 512"> <path
                                 stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"></path></svg>
                        </div>
                        <div> Notifications</div>
                    </div>
                </NavLink>


                {/* Setting  */}
                <NavLink to='/setting'>
                    <div className='flex text-gray-400 text-xl hover:text-white fill-transparent hover:fill-white mb-8'>
                        <div>
                            <svg className="w-6 mr-2" viewBox="0 0 512 512"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="30" d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"></path></svg>
                        </div>
                        <div> Setting</div>
                    </div>
                </NavLink>







                {/* Logout  */}
                <div className='flex text-gray-400 text-xl hover:text-white fill-transparent absolute bottom-0 mb-8'>
                    <div>
                        <svg className="w-6 mr-2" viewBox="0 0 512 512"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="32" d="M320 176v-40a40 40 0 00-40-40H88a40 40 0 00-40 40v240a40 40 0 0040 40h192a40 40 0 0040-40v-40m64-160l80 80-80 80m-193-80h273"></path></svg>
                    </div>
                    <button 
                    // onClick={logOut}
                    onClick={()=>dispatch({type:'logout'})}
                    >Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
