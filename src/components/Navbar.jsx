import React from 'react'
import img2 from '../assets/ab.png'
import { Link } from 'react-router-dom'
import Links from './Links'
const Navbar = () => {
    return (
        <div className='flex justify-center h-[300px] rounded-lg  sm:flex flex-row md:justify-between items-center max-w-[80%] sm:h-[80px] sm:rounded-full bg-gray-100 mx-auto ' >
            <div className='hidden md:flex' >
                <Link to='/' >
                    <img src={img2} alt="" width={100} />
                </Link>
            </div>
            <Links />
            <div className='hidden md:flex bg-[#1465FF] mr-[40px] pt-[7px] pb-[7px] pr-[12px] pl-[12px] rounded-full text-md font-semibold cursor-pointer text-white hover:scale-105 transition duration-300 ease-in-out ' >
                <a href="/CV.pdf" download="CV.pdf">
                    <button className=' cursor-pointer '>Download CV</button>
                </a>
            </div>
        </div>
    )
}

export default Navbar