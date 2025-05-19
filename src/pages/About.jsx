import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";


const About = () => {
    return <div className=' w-[100%] h-[100%] ' >
        <div className=' w-full ' >
            <div className=' bg-blue-500 pt-[20px] h-[500px] flex  flex-col md:h-[300px]   ' >
                <div className=' w-full ' >
                    <Navbar />
                </div>
                <div>
                    <h1 className=' text-white text-4xl font-semibold text-center mt-[30px] ' >About Me</h1>
                </div>
                <div className=' text-white text-2xl  flex flex-row items-center justify-center gap-[10px] md:mt-[15px] ' >
                    Home
                    <TbArrowBigRightLinesFilled color='white' size={25} />
                    About Me
                </div>
            </div>
            <div className=' w-[100%] mx-auto mt-[50px] flex h-[600px] mb-[30px] md:h-[450px] ' >
                <div className=' w-[80%] mx-auto flex flex-col items-center gap-[15px] pt-[20px] md:flex-row md:gap-[100px] ' >

                    <div className=' rounded-full border-1 border-gray-200 w-[300px] flex items-center justify-center h-[300px]  object-center object-cover overflow-hidden md:flex-row md:w-[400px] md:h-[400px] ' >
                        <img src='https://res.cloudinary.com/dgrnogtcq/image/upload/v1747649634/avatar_c3h9oa.png' alt="" className=' w-[200px] md:w-[270px] ' />
                    </div>

                    <div className=' flex flex-col gap-[10px] md:text-start  ' >
                        <p className='  italic text-2xl ' > ~ About Me</p>
                        <h1 className=' text-4xl font-bold ' >Who is <span className=' text-black font-semibold ' >Poorviraj Singh?</span></h1>
                        <p className=' text-[#C4C4C4] lg:w-[70%] ' >A Innovative MERN Stack Developer with expertise in building scalable web applications and integrating AI-driven solutions.</p>
                        <div className=' flex items-center gap-[20px] flex-col md:flex-row ' >
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
            <div className=' w-[100%] mx-auto flex flex-col justify-center mb-[50px]  ' >
                <div className=' flex flex-col mt-[5px] gap-[10px] text-center ' >
                    <p className=' text-xl italic ' > ~Education and Experience</p>
                    <p className=' text-3xl font-bold ' >My Academic and Professional <span className=' text-blue-500 ' >Journey</span> </p>
                </div>
                <div className='w-[90%] mx-auto gap-[10px] mt-[50px] flex flex-col md:w-[80%] md:justify-between md:flex-row lg:w-[70%] ' >
                    <div className=' bg-gray-100 rounded-[5px] p-1 flex flex-col gap-[15px] items-center md:items-start lg:w-[45%] lg:pl-[20px] lg:pr-[20px] ' >
                        <div className=' flex gap-[10px] mt-[15px] ' >
                            <div className=' bg-[#1465FF] w-[40px] text-white p-1 rounded-full flex items-center justify-center ' >
                                <FaGraduationCap size={30} />
                            </div>
                            <p className=' text-2xl font-bold ' >Education</p>
                        </div>
                        <div className=' pl-1 w-[100%] rounded-[10px] flex flex-col bg-white ' >
                            <div className=' flex gap-[10px] text-xl font-semibold ' >
                                <p>June-2022</p>
                                <p>-</p>
                                <p>May-2026</p>
                            </div>
                            <p className=' text-xl font-bold ' >Lovely Professional University <span className=' font-light italic ' >(B-Tech)</span></p>
                            <p className=' text-[#C4C4C4] ' >Phagwara, Punjab</p>
                        </div>
                        <div className=' pl-1 w-[100%] rounded-[10px] flex flex-col bg-white ' >
                            <div className=' flex gap-[10px] text-xl font-semibold ' >
                                <p>March-2020</p>
                                <p>-</p>
                                <p>May-2021</p>
                            </div>
                            <p className=' text-xl font-bold ' >Lamba Convent School <span className=' font-light italic ' >(Intermediate)</span></p>
                            <p className=' text-[#C4C4C4] ' >Bijnor, U.P</p>
                        </div>
                        <div className=' pl-1 mb-[10px] rounded-[10px] w-[100%] flex flex-col bg-white ' >
                            <div className=' flex gap-[10px] text-xl font-semibold ' >
                                <p>March-2018</p>
                                <p>-</p>
                                <p>May-2019</p>
                            </div>
                            <p className=' text-xl font-bold ' >Lamba Convent School <span className=' font-light italic ' >(Matriculation)</span> </p>
                            <p className=' text-[#C4C4C4] ' >Bijnor, U.P</p>
                        </div>
                    </div>
                    <div className=' bg-gray-100 rounded-[5px] p-1 flex flex-col gap-[15px] items-center justify-center md:items-start lg:w-[45%] lg:pl-[20px] lg:pr-[20px] ' >
                        <div className=' flex gap-[10px] mt-[15px] ' >
                            <div className=' bg-[#1465FF] w-[40px] text-white p-1 rounded-full flex items-center justify-center ' >
                                <MdWorkHistory size={30} />
                            </div>
                            <p className=' text-2xl font-bold ' >Experience</p>
                        </div>
                        <div className=' pl-1 w-[100%] rounded-[10px] flex flex-col bg-white ' >
                            <div className=' flex gap-[10px] text-xl font-semibold ' >
                                <p>Jan-2025</p>
                                <p>-</p>
                                <p>Mar-2025</p>
                            </div>
                            <p className=' text-xl font-bold ' >Teachnook Internship Program <span className=' font-light italic ' >(Frontend Developer)</span></p>
                            <p className=' text-[#C4C4C4] ' >Online</p>
                        </div>
                        <div className=' pl-1 w-[100%] mb-[10px] rounded-[10px] flex flex-col bg-white ' >
                            <div className=' flex gap-[10px] text-xl font-semibold ' >
                                <p>June-2024</p>
                                <p>-</p>
                                <p>Aug-2024</p>
                            </div>
                            <p className=' text-xl font-bold ' >Summer Training Program <span className=' font-light italic' >(MERN Stack)</span></p>
                            <p className=' text-[#C4C4C4] ' >Online</p>
                        </div>
                        {/* <div className=' pl-1 rounded-[10px] w-[100%] flex flex-col bg-white ' >
                            <div  className=' flex gap-[10px] text-xl font-semibold ' >
                                <p>March-2018</p>
                                <p>-</p>
                                <p>May-2019</p>
                            </div>
                            <p className=' text-xl font-bold ' >Lamba Convent School <span className=' font-light italic ' >(Intermediate)</span> </p>
                            <p className=' text-[#C4C4C4] ' >Bijnor, U.P</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default About