import React from 'react'
import { Link } from 'react-router-dom'
import { FiDownload } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

const Section4 = () => {
    return <div className=' w-[100%] mx-auto mt-[50px] flex h-[600px] mb-[30px] md:h-[500px] ' >
        <div className=' w-[80%] mx-auto flex flex-col items-center gap-[15px] pt-[20px] md:flex-row md:gap-[100px] ' >

            <div className=' rounded-full border-1 border-gray-200 w-[300px] flex items-center justify-center h-[300px]  object-center object-cover overflow-hidden md:flex-row md:w-[400px] md:h-[400px] ' >
                <img src='https://res.cloudinary.com/dgrnogtcq/image/upload/v1747649634/avatar_c3h9oa.png' alt="" className=' w-[200px] md:w-[270px] ' />
            </div>

            <div className=' flex flex-col gap-[10px] md:text-start  ' >
                <p className='  italic text-2xl ' > - About Me</p>
                <h1 className=' text-4xl font-bold ' >Who is <span className=' text-black font-semibold ' >Poorviraj Singh?</span></h1>
                <p className=' text-[#C4C4C4] lg:w-[70%] ' >A Innovative MERN Stack Developer with expertise in building scalable web applications and integrating AI-driven solutions.</p>
                <div className=' flex items-center gap-[20px] flex-col md:flex-row ' >
                    <Link to='/about' >
                        <div className=' sm:w-[155px] text-white font-semibold bg-[#1465FF] rounded-full flex items-center justify-center pt-2 pb-2 pl-4 pr-4 gap-[10px] cursor-pointe hover:scale-105 transition duration-300 ease-in-out ' >
                            See More
                            <div className=' bg-white w-[25px] text-[#1465FF] p-1 rounded-full flex items-center justify-center ' >
                                <FaArrowRight />
                            </div>
                        </div>
                    </Link>
                    <div className='flex items-center justify-center w-[175px] bg-[#1465FF] pt-[7px] pb-[7px] pr-[12px] pl-[12px] rounded-full text-md font-semibold cursor-pointer text-white hover:scale-105 transition duration-300 ease-in-out ' >
                        <a href="/CV.pdf" download="CV.pdf" className=' flex items-center gap-[15px] ' >
                            <button className=' cursor-pointer '>Download CV</button>
                            <FiDownload size={20} />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default Section4