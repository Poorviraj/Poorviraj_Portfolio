import React from 'react'
import Navbar from '../components/Navbar'
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { SiNextui } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { SiBackendless } from "react-icons/si";
import { LuAppWindow } from "react-icons/lu";

import w3elites from '../assets/certificates/W3elites.jpg'
import genai from '../assets/certificates/GenAi.png'
import abdualbarisir from '../assets/certificates/abdulbarisir.png'
import js from '../assets/certificates/js.png'
import backend from '../assets/certificates/backend.png'

const Service = () => {

    return <div className='  w-[100%] h-[100%] '>

        <div className=' bg-blue-500 pt-[20px] h-[500px] flex  flex-col md:h-[300px]   ' >
            <div className=' w-full ' >
                <Navbar />
            </div>
            <div>
                <h1 className=' text-white text-4xl font-semibold text-center mt-[30px] ' >Services</h1>
            </div>
            <div className=' text-white text-2xl  flex flex-row items-center justify-center gap-[10px] md:mt-[15px] ' >
                Home
                <TbArrowBigRightLinesFilled color='white' size={25} />
                Services
            </div>
        </div>

        <div className=' w-[80%] mx-auto mt-[50px] gap-[40px] flex flex-col ' >

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

            <div className=' flex flex-col gap-[10px] items-center md:flex-row md:justify-between md:items-center lg:justify-around ' >
                <div className=' rounded-2xl w-[250px]  pt-[20px] p-2 flex flex-col items-center gap-[10px]  md:w-[270px]  lg:w-[300px]  ' >
                    <PiFigmaLogoDuotone size={40} color='blue' />
                    <div className=' flex flex-col mt-[20px] gap-[20px] items-center ' >
                        <div className=' text-2xl font-semibold  ' >
                            Figma Designer
                        </div>
                        <div className=' text-[#C4C4C4] text-center ' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam vero nostrum distinctio amet doloremque, ipsa voluptatem dicta a tenetur.
                        </div>
                    </div>
                </div>
                <div className=' rounded-2xl w-[250px]  pt-[20px] p-2 flex flex-col items-center gap-[10px]  md:w-[270px]  lg:w-[300px]  ' >
                    <SiBackendless size={40} color='blue' />
                    <div className=' flex flex-col mt-[20px] gap-[20px] items-center ' >
                        <div className=' text-2xl font-semibold text-center ' >
                            Backend Development
                        </div>
                        <div className=' text-[#C4C4C4] text-center ' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam vero nostrum distinctio amet doloremque, ipsa voluptatem dicta a tenetur.
                        </div>
                    </div>
                </div>
                <div className=' rounded-2xl w-[250px]  pt-[20px] p-2 flex flex-col items-center gap-[10px]  md:w-[270px]  lg:w-[300px]  ' >
                    <LuAppWindow size={40} color='blue' />
                    <div className=' flex flex-col mt-[20px] gap-[20px] items-center ' >
                        <div className=' text-2xl flex font-semibold text-center  ' >
                            Full Stack Developer
                        </div>
                        <div className=' text-[#C4C4C4] text-center ' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam vero nostrum distinctio amet doloremque, ipsa voluptatem dicta a tenetur.
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className=' w-[70%] mx-auto flex mt-[100px] gap-[20px] flex-col mb-[50px] md:mb-[70px] lg:flex lg:flex-row lg:justify-between lg:mb-[100px]  ' >

            <div className=' flex flex-col ' >
                <div className=' text-2xl text-black italic ' >
                    ~Certificate
                </div>
                <div className=' text-4xl text-[#1465FF] font-bold  ' >
                    Certificate <span className=' text-black ' >That I Have</span>
                </div>
            </div>

        </div>

        <div className=' flex flex-col gap-[50px] mb-[50px] items-center lg:mb-[80px] ' >

            <div className=' w-full flex flex-col gap-[30px] md:flex-row md:justify-center md:gap-[50px] lg:gap-[100px] ' >

                <div className=' flex flex-col gap-[10px] items-center ' >

                    <div className=' bg-blue-400 w-[300px] rounded-2xl object-cover object-center overflow-hidden md:w-[350px] lg:w-[370px] hover:scale-125 duration-500 transition-all ease-in-out ' >
                        <img src={w3elites} alt="" className=' w-full h-full ' />
                    </div>

                    <h1 className=' font-semibold text-xl ' >MERN Stack + GenAI</h1>

                </div>

                <div className=' flex flex-col gap-[10px] items-center ' >

                    <div className=' bg-blue-400 w-[300px] rounded-2xl object-cover object-center overflow-hidden md:w-[350px] lg:w-[350px] hover:scale-125 duration-500 transition-all ease-in-out ' >
                        <img src={genai} alt="" className=' w-full h-full ' />
                    </div>

                    <h1 className=' font-semibold text-xl ' >Introduction to GenAI</h1>

                </div>

            </div>

            <div className=' grid sm:grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 place-items-center lg:grid-cols-3 lg:gap-8 ' >

                <div className=' flex flex-col gap-[10px] items-center drop-shadow-md ' >

                    <div className=' bg-blue-400 w-[300px] rounded-2xl object-cover object-center overflow-hidden md:w-[350px] lg:w-[370px] hover:scale-125 duration-500 transition-all ease-in-out ' >
                        <img src={abdualbarisir} alt="" className=' w-full h-full ' />
                    </div>

                    <h1 className=' font-semibold text-xl ' >DSA with C/C++</h1>

                </div>

                <div className=' flex flex-col gap-[10px] items-center drop-shadow-md z-5 ' >

                    <div className=' bg-blue-400 w-[300px] rounded-2xl object-cover object-center overflow-hidden md:w-[350px] lg:w-[370px]  hover:scale-125 duration-500 transition-all ease-in-out' >
                        <img src={backend} alt="" className=' w-full h-full ' />
                    </div>

                    <h1 className=' font-semibold text-xl ' >Understanding of Node.js</h1>

                </div>

                <div className=' flex flex-col gap-[10px] items-center drop-shadow-md z-3 ' >

                    <div className=' bg-blue-400 w-[300px] rounded-2xl object-cover object-center overflow-hidden md:w-[350px] lg:w-[370px] hover:scale-125 duration-500 transition-all ease-in-out ' >
                        <img src={js} alt="" className=' w-full h-full ' />
                    </div>

                    <h1 className=' font-semibold text-xl ' >Complete JavaScript</h1>

                </div>

            </div>

        </div>

    </div>

}

export default Service