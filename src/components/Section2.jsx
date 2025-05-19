import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { SiNextui } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";

const Section2 = () => {
    return <div className=' w-[80%] mx-auto flex flex-col ' >

        <div className=' w-[80%] mx-auto flex mt-[100px] gap-[20px] flex-col mb-[50px] md:mb-[100px] lg:flex lg:flex-row lg:justify-between lg:mb-[120px]  ' >

            <div className=' flex flex-col ' >
                <div className=' text-2xl text-black italic ' >
                    -Services
                </div>
                <div className=' text-4xl text-[#1465FF] font-bold  ' >
                    Services <span className=' text-black ' >I Provide</span>
                </div>
            </div>

            <div className=' flex items-center ' >
                <Link to='/service' >
                    <div className=' sm:w-[155px] text-white font-semibold bg-[#1465FF] rounded-full flex items-center justify-center pt-2 pb-2 pl-4 pr-4 gap-[10px] cursor-pointe hover:scale-105 transition duration-300 ease-in-out ' >
                        See More
                        <div className=' bg-white w-[25px] text-[#1465FF] p-1 rounded-full flex items-center justify-center ' >
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>
            </div>

        </div>

        <div className=' flex flex-col gap-[10px] items-center md:flex-row md:justify-between md:items-center lg:justify-around ' >
            <div className=' rounded-2xl w-[250px]  pt-[20px] p-2 flex flex-col items-center gap-[10px]  md:w-[270px]  lg:w-[300px]  ' >
                <CgWebsite size={40} color='blue' />
                <div className=' flex flex-col mt-[20px] gap-[20px] items-center ' >
                    <div className=' text-2xl font-semibold  ' >
                        Website Designer
                    </div>
                    <div className=' text-[#C4C4C4] text-center ' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam vero nostrum distinctio amet doloremque, ipsa voluptatem dicta a tenetur.
                    </div>
                </div>
            </div>
            <div className=' rounded-2xl w-[250px]  pt-[20px] p-2 flex flex-col items-center gap-[10px]  md:w-[270px]  lg:w-[300px]  ' >
                <SiNextui size={40} color='blue' />
                <div className=' flex flex-col mt-[20px] gap-[20px] items-center ' >
                    <div className=' text-2xl font-semibold  ' >
                        UI/UX Designer
                    </div>
                    <div className=' text-[#C4C4C4] text-center ' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam vero nostrum distinctio amet doloremque, ipsa voluptatem dicta a tenetur.
                    </div>
                </div>
            </div>
            <div className=' rounded-2xl w-[250px]  pt-[20px] p-2 flex flex-col items-center gap-[10px]  md:w-[270px]  lg:w-[300px]  ' >
                <MdOutlineDeveloperMode size={40} color='blue' />
                <div className=' flex flex-col mt-[20px] gap-[20px] items-center ' >
                    <div className=' text-2xl flex font-semibold text-center  ' >
                        Application Development
                    </div>
                    <div className=' text-[#C4C4C4] text-center ' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam vero nostrum distinctio amet doloremque, ipsa voluptatem dicta a tenetur.
                    </div>
                </div>
            </div>
            
        </div>

    </div>
}

export default Section2