import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
    return <div>
        <div className=' w-[100%] h-[70px] bg-[#78a5f8] flex flex-col gap-[10px] items-center justify-center ' >
            <div className=' w-[100%] mt-[15px] flex flex-col items-center mx-auto  md:w-[70%] md:flex-row md:justify-around  ' >
                <div className=' flex items-center gap-[5px] text-white text-xl ' >
                    <HiOutlineMailOpen size={20} />
                    poorvirajsinghnirwan@gmail.com
                </div>
                <div className=' flex items-center gap-[5px] text-white text-xl ' >
                    <IoLogoLinkedin size={20} />
                    <a className=' text-white underline ' href="https://www.linkedin.com/in/poorviraj-singh/">Poorviraj Singh</a>
                </div>
            </div>
            <div className=' w-[100%] flex items-center justify-center bg-white h-[35px] ' >
                <p className=' text-black text-md font-semibold ' >© 2025 Poorviraj Singh. All rights reserved.</p>
            </div>
        </div>
    </div>
}

export default Footer