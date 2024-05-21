import React from 'react'
import { logo } from '../assets'
import { footerlinks } from '../constants'

import { FaTwitter } from "react-icons/fa"
import { IoLogoLinkedin } from "react-icons/io5"
import { IoLogoGithub } from "react-icons/io"
import { LiaDiscourse } from "react-icons/lia"

const Footer = () => {

  const icon = [<FaTwitter />, <IoLogoLinkedin />, <IoLogoGithub />, <LiaDiscourse />]

  const LeftSection = () => (
    <div className='flexCol h-[100%]'>
      <div onClick={() => { window.scrollTo(0, 0) }} className='w-36 h-10 imgCover' style={{ backgroundImage: `url(${logo})` }}></div>
      <p className='text-[14px] font-light' style={{ lineHeight: '21px' }}>Devoptima 2023 © All rights reserved</p>
    </div>
  )

  const RightSection = () => (
    <div className='flex gap-44 lg:gap-20 md:gap-10 sm:gap-5 '>
      {footerlinks.map((item, index) => (
        <div key={index} className='text-[16px] font-light text-grey-200'>
          <p className='text-white font-medium pb-4'>{item.title}</p>
          {item.content.map((name, idx) => (
            <p key={idx} className='hover:text-[#EFF1F6] pb-2 cursor-pointer flex items-center'>
              {index === 1 && <span>{icon[idx]}</span>}
              {name}
            </p>
          ))}
        </div>
      ))}
    </div>
  )

  return (
    <section className='bg-[#0A0812]  py-12 h-min-[296px] h-[296px]' style={{ borderTop: '1px solid #172136' }}>
      <div className='section h-full'>
        <LeftSection />
        <RightSection />
      </div >
    </section >
  )
}

export default Footer