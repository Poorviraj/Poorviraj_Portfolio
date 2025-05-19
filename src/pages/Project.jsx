import React from 'react'
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import Navbar from '../components/Navbar';
import hospital from '../assets/hospital.png'
import url1 from '../assets/shortner.png'
import wheather from '../assets/wheather.png'
import Tag from '../components/Tag';


const Project = () => {
    return <div className=' w-[100%] h-[100%] ' >
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
                Projects
            </div>
        </div>
        <div className=' w-[100%] bg-[radial-gradient(circle,_rgba(141,157,166,1)_0%,_rgba(242,242,242,0.82)_58%,_rgba(182,192,212,1)_100%)] ' >
            <div className=' w-[80%] mx-auto pt-[50px] pb-[50px]  ' >
                <div className='grid sm:grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6 place-items-center  ' >

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

                    <div className='group rounded-2xl w-[250px]  h-[400px] border-1 flex flex-col items-center gap-[10px]  md:w-[370px] md:h-[550px]  lg:w-[400px] bg-white hover:scale-105 transition duration-500 ease-in-out ' >
                        <div className=' blur-[2px] object-center object-cover w-full  h-[50%] md:h-[70%] lg:h-[70%] group-hover:blur-none transition duration-500 ease-in-out ' >
                            <img src={wheather} alt="" className='rounded-2xl w-[100%] h-[100%] rounded-b-none' />
                        </div>
                        <div className=' flex flex-col gap-[10px] pl-1 pr-1 w-full ' >
                            <div className=' flex flex-col items-center gap-[5px] md:flex-row md:justify-around  ' >
                                <Tag name={'UI/UX Design'} />
                                <Tag name={'UI/UX Design'} />
                            </div>
                        </div>
                        <div className=' text-3xl font-bold text-black pl-1 text-center ' >
                            Weather Display Application
                        </div>
                    </div>

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

                </div>
            </div>
        </div>
    </div>
}

export default Project