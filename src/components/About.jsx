import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { aboutBg, aboutCard, avatar3, bar1, bar2, bar3, stick } from '../assets'
import SectionTitle from './SectionTitle'
import { styles } from '../styles'
import { IconButton } from './Buttons'
import { aboutSmallCards, devOpsCards } from '../constants'

const About = () => {

  const AboutCards = () => (
    <div className='flex flex-wrap'>
      {devOpsCards.map((item, index) => (
        <div key={index} className='w-[242px] h-[127px] mr-20 my-4'>
          <IconButton className='itemCenter'>
            <img className='bg-transparent' src={item.icon} />
          </IconButton>
          <p className='text-[20px] font-medium pt-[14px] pb-2' style={{ lineHeight: '25ps' }}>{item.title}</p>
          <p className='text-grey-200 font-light' style={{ lineHeight: '22px' }} >{item.text}</p>
        </div>
      ))}
    </div>
  )

  const SelectSquare = () => (
    <div className='w-full pt-[18px] pb-[14px] flex justify-end '>
      <select className={`${styles.defaultBorder} w-[588px] h-[38px] mr-[18px] bg-inherit outline-none px-2 text-[15px] text-right text-darkWhite cursor-pointer`}>
        <option style={{ backgroundColor: '#234690' }}>info@devoptima.io</option>
        <option style={{ backgroundColor: '#234690' }}>mayaHaynes@gmail.com</option>
        <option style={{ backgroundColor: '#234690' }}>smamnoskeyAkechi@gmail.com</option>
      </select>
      <button className={`rounded-[4px] w-[111px] h-[38px] bg-[#4D7CB2] bg-opacity-20 text-[#749FF6] font-medium hover:text-grey-200 `}>New branch</button>
    </div>
  )

  const LeftSquare = () => (
    <div className={`${styles.defaultBorder} w-[476px] h-[509px] overflow-hidden border-b-0 border-l-0 mr-8`}>

    </div>
  )

  const RightSquare = () => (
    <div className={`${styles.defaultBorder} w-[406px] h-[304px] rounded-[6px] `}>
      <AboutTable />
      <Users />
    </div>
  )

  const SmallCards = () => (
    <div className='flex justify-between p-8'>
      {aboutSmallCards.map((item, index) => (
        <div key={index} className='w-[84px] h-[162px] text-center flexCol'>
          <img className='w-[84px] h-[84px]' src={item.img} alt={item.img} />
          <p className='text-[15px] text-greyWhite leading-15'>{item.title}</p>
          <p className='text-[14px] text-greyWhite leading-14'>{item.used}</p>
          <p className='text-[14px] text-darkWhite leading-14'>{item.all}</p>
        </div>
      ))}
    </div >
  )

  const AboutTable = () => (
    <>
      <SmallCards />
      <hr className={styles.defaultBorder} />
      <div className='px-8 py-4 text-[14px] text-darkWhite'>
        <span className='text-greyWhite'>Usage as of 1 hour ago </span> (updated hourly) <br /> Monthly usage resets in 5 days. <span className='text-[#3F57DA]'>Manage plan</span>
      </div>
    </>
  )

  const Users = () => (
    <div className='pt-6 pb-2'>
      <p className='text-[15px] text-greyWhite leading-15'>Recent activity</p>
      <div className='flex h-9 text-[14px] mt-6 ml-4'>
        <img className='cursor-pointer' src={avatar3} alt='avtar' />
        <div className='ml-2'>
          <div className='text-greyWhite' >k8isdead opened #121</div>
          <div className=' text-darkWhite' >IT Director at Reflex</div>
        </div>
      </div>
      <div className='flex text-[14px] mt-[5px] ml-4'>
        <div>
          <img className='ml-[16px]' src={stick} alt='stick' />
          <div className='bg-[#202854] w-9 h-9 rounded-[50%] my-1'></div>
          <img className='ml-[16px]' src={stick} alt='stick' />
        </div>
        <div className='ml-2 mt-7'>
          <img src={bar1} alt='bar1' />
          <img className='py-[10px]' src={bar2} alt='bar2' />
          <img src={bar3} alt='bar3' />
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex">
      <motion.div
        variants={fadeIn('right', '', 0.3, 1)}
        className='py-20 mr-[86px]'
      >
        <div className='absolute w-[1000px] h-[620px] bg-gradient-to-r from-[#0A0812] to-#0F1425'></div>
        <div className='imgCover w-[854px] h-[620px] pt-10 pr-8' style={{ backgroundImage: `url(${aboutBg})` }}>
          <hr className='border-border' />
          <SelectSquare />
          <div className='flex justify-end'>
            <LeftSquare />
            <RightSquare />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('up', '', 0.3, 1)}
        className="itemCenter py-20">
        <div className='flexCol'>
          <SectionTitle title='What is DevOptima?' />
          <p className={styles.bigText}>
            At DevOptima, we are a team of passionate DevOps experts <br />
            committed to transforming the way businesses approach software <br />
            development and operations.
          </p>
          <AboutCards />
        </div>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(About, 'about')
