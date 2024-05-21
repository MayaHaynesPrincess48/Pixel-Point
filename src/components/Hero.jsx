import React, { useRef, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

import { heroBg, heroCard } from '../assets'
import { RoundButton } from './Buttons'
import { fadeIn, } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'

const Hero = () => {


  const formRef = useRef()
  const [email, setEmail] = useState(null)
  const [bgColor, setBgColor] = useState('')

  const format = () => {
    setEmail(null)
    setBgColor('')
    console.log('sdf')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    email ? setBgColor('#243BB9') : setBgColor(''), setEmail('')
    email && emailjs
      .send(
        'service_k3cptxm',
        'template_lmic9um',
        {
          from_email: email,
          to_email: 'samanoskey4802@gmail.com',
        },
        'oGmNLCZyFKYhExZhv'
      )
      .then(
        (result) => {
          console.log('reuslt : ', result)
          setBgColor('#4DB29A')
        },
        (error) => {
          console.log(error)
          setBgColor('#BE6AA7')
        }
      )
  }

  const Circle = ({ onClick, Component }) => (
    <span onClick={onClick} className={`w-11 h-11 itemCenter rounded-[50%] text-[20px]`} style={{ backgroundColor: `${bgColor}` }} >
      {Component}
    </span >
  )


  const ActionBtns = () => (
    <>
      {!bgColor && <RoundButton style={{ padding: '15px 35px', margin: '0' }}>Free trial</RoundButton>}
      {bgColor === '#243BB9' &&
        <Circle
          Component={<CircularProgress style={{ width: '28px', height: '28px' }} />}
        />}
      {bgColor === '#4DB29A' &&
        <Circle
          onClick={format}
          Component={<FaCheck />}
        />}
      {bgColor === '#BE6AA7' &&
        <Circle
          onClick={format}
          Component={<IoClose />}
        />}
    </>
  )

  return (
    <>
      <div className='heroBgColor'></div>
      <img className='absolute' src={heroBg} />
      <div className='bg-inherit w-full pt-40'>
        <section className="section pt-20">
          <motion.div
            variants={fadeIn('down', '', 0.3, 1)}
            className="w-[716px] pt-12 font-normal z-10"
          >
            <h2 className="hero-title font-aeonik text-7xl leading-[112.5%] pb-7  bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              Revolutionize <br />
              your DevOps journey with DevOptima
            </h2>
            <p className={styles.bigText}>
              Empower groups to boost innovation with efficient development,<br />
              automated operations, and stable scaling.
            </p>
            <form
              className='formStyle h-14 w-[464px] flex justify-between'
              ref={formRef}
              onSubmit={handleSubmit}>
              <input
                className="mx-[18px] bg-transparent outline-none text-[16px] font-light"
                placeholder="Your business email..."
                type="email"
                value={email ? email : ''}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ActionBtns />
            </form>
            {(email === '' && bgColor === '') && <p className="text-[#F04242] pl-6 pt-3 font-medium leading-5 tracking-tight-4">Email is a required field</p>}
          </motion.div>
          <motion.div
            variants={fadeIn('left', '', 0.3, 1)}
            className='flex justify-end w-[650px] z-10'>
            <div className='imgCover w-[590px] h-[415px]' style={{ backgroundImage: `url(${heroCard})` }}></div>
          </motion.div>
        </section>
      </div >
    </>
  )
}

export default SectionWrapper(Hero, 'hero')
