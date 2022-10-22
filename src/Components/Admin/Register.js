import React from 'react'
import { useState } from 'react';


function Register() {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

	// const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // async function registerAdmin(event) {
    //     event.preventDefault()

	// 	const response = await fetch('http://localhost:3001/api/adminregister', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			email,
	// 			password,
	// 		}),
	// 	})
    //     const data = await response.json() 
    //     if (data.status === 'ok') {
    //         alert("User is registered.")
    //         // navigate('/login');
    //         // window.location.href = '/login'
    //     window.location.reload(false);

    //         // console.log(data.status)
	// 	}else{
    //         alert('User is already registered')

    //     }
    // }

    

    return (
        <div className='grid place-items-center h-screen'>
            <div className='h-[50%] bg-gray-900 w-[35%] rounded-3xl'>
                <div className='w-[26%] mx-auto -mt-[13%]'>
                    <img src='/img/sss.png' className='rounded-full' alt='logo' />
                </div>
                <form action="/" 
                // onSubmit={registerAdmin}
                >
                <div className='my-8'>

                    <div className='justify-center mt-[8%] flex'><svg className="w-10 mr-2 fill-gray-600" viewBox="0 0 512 512">
                        <path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z"></path></svg>
                        <input className='focus:outline-none bg-gray-600 rounded-full p-[2.5%] w-[70%] text-white placeholder:text-left' placeholder='Set Email' name='email' type="email" value={email} onChange = {(e)=> setEmail(e.target.value)} required/></div>

                    <div className='justify-center mt-[5%] flex'><svg className="w-10 mr-2 rounded-l-full fill-gray-600" viewBox="0 0 512 512">
                        <path d="M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 00-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 11-32-32 32 32 0 0132 32z"></path></svg>
                        <input className='focus:outline-none bg-gray-600 rounded-l-full p-[2.5%] w-[63%] text-white placeholder:text-left' placeholder='Set Password' name='password' value={password} onChange = {(e)=> setPassword(e.target.value)} type={passwordShown ? 'text' : 'password'} required/>
                        <div className='bg-gray-600 rounded-r-full pr-[2.5%]' onClick={togglePassword}>{passwordShown ?
                            <svg className="w-6 rounded-l-full my-3 fill-gray-400" viewBox="0 0 512 512"><path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zm-176.34-64c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zm235.18-145.4c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z"></path><path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zm-90.22 73.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z"></path></svg>
                            :
                            <svg className="w-6 rounded-l-full my-[50%] fill-gray-600 stroke-gray-400" viewBox="0 0 512 512"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"></path>
                                <circle cx="256" cy="256" r="80" fill="none" strokeMiterlimit="10" strokeWidth="32"></circle></svg>}</div>

                    </div>
                    <div className='w-fit mx-auto my-[5%]'>
                        <button type='submit' 
                        value="Register"className='p-[12%] bg-blue-800 w-28 rounded-full text-white hover:bg-blue-600 font-semibold'>Register</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Register
