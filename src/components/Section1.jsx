import React, { useState } from 'react'
import main from '../assets/main.png'
import { Link } from 'react-router-dom'
import { GiCrossMark } from "react-icons/gi";

const Section1 = () => {

    const handelSubmit = (e) => {
        e.preventDefault()
        setActive(false);
        alert('Your message has been sent successfully')
    }



    const [active, setActive] = useState(false);

    return <div className='  w-full h-full relative ' >
        <div className={`absolute ${active ? 'flex' : 'hidden'} z-10  top-0 left-0 w-[100%] h-[100%] `} >
            <div className=' w-full h-[70%] flex items-center justify-center fixed  ' >
                <div className=' w-[500px] h-[600px] bg-gray-100 rounded-2xl flex gap-[50px] flex-col justify-center items-center ' >
                    <div className=' w-full flex flex-col items-center justify-center ' >
                        <div className=' w-full flex justify-end mb-[20px] p-4 ' >
                            <GiCrossMark className=' cursor-pointer hover:text-red-700 hover:scale-105 transition-all duration-300 ease-in-out ' size={30} onClick={() => {
                                setActive(false);
                            }} />
                        </div>
                        <h1 className=' text-3xl font-bold text-center ' >Contact Me</h1>
                    </div>
                    <form action="" onSubmit={handelSubmit} className={` flex flex-col items-center justify-center gap-[20px]  w-[400px] h-[400px] rounded-2xl `} >
                        <input type="text" required placeholder='Enter Your Name' className=' border-1 border-gray-300 rounded-full w-[80%] h-[50px] pl-4 ' />
                        <input type="email" required placeholder='Enter Your Email' className=' border-1 border-gray-300 rounded-full w-[80%] h-[50px] pl-4 ' />
                        <textarea cols="30" rows="10" required placeholder='Enter Your Message' className=' border-1 border-gray-300 rounded-xl w-[80%] h-[150px] pl-4 pt-1 ' ></textarea>
                        <button className=' bg-blue-500 cursor-pointer text-white font-semibold rounded-full w-[80%] h-[50px] ' >Send</button>
                    </form>
                </div>
            </div>
        </div>
        <div className=' flex flex-col w-[80%] mx-auto mt-[40px] gap-[10px] lg:flex lg:flex-row lg:justify-between lg:h-[420px] ' >
            <div className=' flex flex-col w-full text-start gap-[5px] ml-[20px] md:gap-[10px] lg:w-[45%] ' >
                <p className=' pl-5 pr-5 pt-3 pb-3 border-1 flex max-w-[max-content]  ' >Hello!!!</p>
                <h1 className=' text-2xl font-bold mt-[5px] block sm:text-4xl  ' >I'm <span className=' underline text-[#1465FF] ' >Poorviraj Singh,</span> </h1>
                <h1 className=' text-2xl font-bold block sm:text-4xl'>Web Developer &</h1>
                <h1 className=' text-2xl font-bold block sm:text-4xl'>Developer Enthusiast</h1>
                <p className=' text-[#C4C4C4] mt-[10px] max-w-[80%] lg:max-w-full ' >Innovative MERN Stack Developer with expertise in building scalable web applications and integrating AI-driven solutions</p>
                <div className=' mt-[10px] flex gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px] ' >
                    <button onClick={()=>{
                        setActive(true);
                    }} className=' bg-[#1465FF] pt-[7px] pb-[7px] pr-[16px] pl-[16px] rounded-full text-md font-semibold cursor-pointer text-white hover:scale-105 transition duration-300 ease-in-out ' >
                        Hire Me
                    </button>
                    <Link to='/' className='border-2 mr-[40px] pt-[7px] pb-[7px] pr-[12px] pl-[12px] rounded-full text-md font-semibold cursor-pointer text-black hover:scale-105 transition duration-300 ease-in-out' >
                        Whatsapp
                    </Link>
                </div>
            </div>
            <div className=' flex items-center justify-center  ' >
                <img src={main} alt="" />
            </div>
        </div>
    </div>

}

export default Section1