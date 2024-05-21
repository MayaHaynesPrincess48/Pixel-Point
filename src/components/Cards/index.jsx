import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { fadeIn, zoomIn } from '../../utils/motion'

const ServiceCard = (props) => {

  const { index, url, title, text } = props

  return (
    <Tilt options={{ max: 40, scale: 1, speed: 450, }}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="card-border-gradient w-[380px] h-[460px] rounded-[16px] shadow-card cursor-pointer">
        {/* <div className='w-full h-[278px] card-content-gradient ml-[14px] mt-4'>
          </div> */}
        <img src={url} className='h-[277px] w-full' alt='src' />
        <div className='px-8'>
          <p className='text-[20px] font-medium pt-[14px] pb-2' style={{ lineHeight: '25ps' }}>{title}</p>
          <p className='text-grey-200 font-light' style={{ lineHeight: '22px' }} >{text}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}

const DevOptimaCard = (props) => {

  const { icon, text, avatar } = props

  return (
    <motion.div
      variants={zoomIn(0.5, 0.3)}
    >
      <div className='w-[495px] h-[305px] m-11'>
        <div className='itemCenter w-16 h-16 rounded-[16px] cursor-pointer border border-[#172136] bg-[#153984] bg-opacity-30 ' style={{ boxShadow: '20px #153984' }}>
          <img src={icon} alt='icon' />
        </div>
        <p className='text-[24px] text-grey-200 font-light pt-5 pb-8' style={{ lineHeight: '36px' }}>
          {text.split('&').map((part, index) => (
            <span key={index} className={index % 2 === 1 ? 'font-medium text-white' : ''}>{part}</span>
          ))}
        </p>
        <div className='w-[250px] h-11 flex'>
          <img className='w-11 h-11 rounded-[50%] cursor-pointer' src={avatar} />
          <div className='font-light ml-3'>
            <div className='text-[18px]' style={{ lineHeight: '22.5px' }}>John Smith</div>
            <div className='text-[15px] text-grey-200'>IT Director at Reflex</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export { ServiceCard, DevOptimaCard }