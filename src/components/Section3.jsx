import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import hospital from '../assets/hospital.png'
import url1 from '../assets/shortner.png'
import Tag from './Tag';

const Section3 = () => {
    return <div className=' w-[100%] mx-auto mt-[50px] flex bg-[#1465FF] ' >

        <div className=' w-[80%] mx-auto flex flex-col items-center gap-[15px] pt-[20px] ' >

            <div className=' flex flex-col gap-[10px]  ' >
                <div className=' text-2xl text-black italic ' >
                    -Projects
                </div>
                <div className=' text-4xl text-white font-bold ' >
                    Projects <span className=' text-black ' >That I Have Made</span>
                </div>
            </div>

            <div className=' mt-[50px] flex flex-col gap-[50px] items-center md:flex-row md:justify-between md:items-center lg:justify-between  ' >

                <div className='group rounded-2xl w-[250px]  h-[400px] border-1 flex flex-col items-center gap-[10px]  md:w-[370px] md:h-[550px]  lg:w-[400px] bg-white hover:scale-105 transition duration-500 ease-in-out ' >
                    <div className=' blur-[2px] object-center object-cover w-full  h-[50%] md:h-[70%] lg:h-[70%] group-hover:blur-none transition duration-500 ease-in-out ' >
                        <img src={hospital} alt="" className=' rounded-2xl rounded-b-none lg:h-[100%]' />
                    </div>
                    <div className=' flex flex-col gap-[10px] pl-1 pr-1 w-full ' >
                        <div className=' flex flex-col items-center gap-[5px] md:flex-row md:justify-around  ' >
                            <Tag name={'UI/UX Design'} />
                            <Tag name={'UI/UX Design'} />
                        </div>
                    </div>
                    <div className=' text-3xl font-bold text-black pl-1 text-center ' >
                        Hospital Management System
                    </div>
                </div>

                <div className='group rounded-2xl w-[250px]  h-[400px] border-1 flex flex-col items-center gap-[10px]  md:w-[370px] md:h-[550px]  lg:w-[400px] bg-white hover:scale-105 transition duration-500 ease-in-out ' >
                    <div className=' blur-[2px] object-center object-cover w-full  h-[50%] md:h-[70%] lg:h-[70%] group-hover:blur-none transition duration-500 ease-in-out ' >
                        <img src={url1} alt="" className='  rounded-2xl rounded-b-none lg:h-[100%] ' />
                    </div>
                    <div className=' flex flex-col gap-[10px] pl-1 pr-1 w-full ' >
                        <div className=' flex flex-col items-center gap-[5px] md:flex-row md:justify-around ' >
                            <Tag name={'UI/UX Design'} />
                            <Tag name={'UI/UX Design'} />
                        </div>
                    </div>
                    <div className=' text-3xl font-bold text-black pl-1 text-center ' >
                        URL's - Shortner Application
                    </div>
                </div>

            </div>

            <div className=' flex items-center mb-[30px] mt-[20px] ' >
                <Link to='/project' >
                    <div className=' sm:w-[155px] text-white font-semibold bg-black rounded-full flex items-center justify-center pt-2 pb-2 pl-4 pr-4 gap-[10px] cursor-pointe hover:scale-105 transition duration-300 ease-in-out ' >
                        See More
                        <div className=' bg-white w-[25px] text-[#1465FF] p-1 rounded-full flex items-center justify-center ' >
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>
            </div>

        </div>

    </div>
}

export default Section3