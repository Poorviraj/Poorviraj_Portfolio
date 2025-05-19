import React from 'react'
import { PiStarFourFill } from "react-icons/pi";

const Banner = () => {
    const bannerStyle = {
        display: "inline-flex",
        alignItems: "center",
        animation: "scroll 8s alternate infinite",
        whiteSpace: "nowrap",
    };

    const containerStyle = {
        width: "100%",
        overflow: "hidden",
        position: "relative",
    };

    const textStyle = {
        marginRight: "100px", // Gap between text repetitions
    };

    const keyframes = `
        @keyframes scroll {
          0% {
            transform: translateX(60%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `;

    return (
        <div className=" bg-gray-100">
            <style>{keyframes}</style>
            <div style={containerStyle} className="bg-[#1465FF] text-white py-2 md:py-3 lg:py-4 ">
                <div style={bannerStyle} className="hover:[animation-play-state:paused]   ">
                    <span style={textStyle} className="text-lg">
                        Full Stack Web Developer 🚀
                    </span>
                    <span style={textStyle} className="text-sm md:text-base lg:text-lg">
                        <PiStarFourFill />
                    </span>
                    <span style={textStyle} className="text-sm md:text-base lg:text-lg">
                        UI/UX Designer 🎉
                    </span>
                    <span style={textStyle} className="text-sm md:text-base lg:text-lg">
                        <PiStarFourFill />
                    </span>
                    <span style={textStyle} className="text-sm md:text-base lg:text-lg">
                        MERN Stack Web Developer 🚀
                    </span>
                    <span style={textStyle} className="text-sm md:text-base lg:text-lg">
                        <PiStarFourFill />
                    </span>
                    <span style={textStyle} className="text-sm md:text-base lg:text-lg">
                        Freelancer 🎉
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Banner