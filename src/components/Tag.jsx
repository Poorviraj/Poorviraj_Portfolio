import React from 'react'

const Tag = ({name}) => {
  return <div className=' bg-[#1465FF] h-[30px] rounded-full w-[150px] text-white flex items-center justify-center lg:h-[40px] ' >
    {name}
  </div>
}

export default Tag