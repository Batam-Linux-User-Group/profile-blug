import React, { useState } from 'react'
import { pengurusDetail } from '../../data'

const TeamSectionMobile = () => {
  const [dataDivisi, setDataDivisi] = useState("inti");

  return (
    <>
      <div className='flex flex-col items-center py-5 bg-[#2a2a2a] max-w-screen-lg mx-auto px-4'>
        {/* Top Section */}
        <div className='flex justify-evenly items-center w-full'>
          <button
            onClick={{}}
            disabled={{}}
            className="cursor-pointer text-primary p-2 sm:p-3 rounded-full z-20 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img src={pengurusDetail[dataDivisi].logoDivisi} alt={dataDivisi} className='w-15'/>

          <button
            onClick={{}}
            disabled={{}}
            className="cursor-pointer text-primary p-2 sm:p-3 rounded-full z-20 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <p className='text-gray-200 text-center text-sm my-4'>{pengurusDetail[dataDivisi].deskripsi}</p>


      </div>
    </>
  )
}

export default TeamSectionMobile