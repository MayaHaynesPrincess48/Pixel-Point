import React from 'react'
import { motion } from 'framer-motion'

import SectionTitle from './SectionTitle'
import { styles } from '../styles'
import { RoundButton, RoundOutlineButton } from './Buttons'
import { fadeIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ContactUs = () => {

  return (
    <section className='w-[865px] h-[222px] m-auto text-center'>
      <SectionTitle title='Ready to elevate your DevOps strategy?' />
      <motion.p
        initial={{ x: 350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={styles.bigText}>
        Join the multitude of companies benefiting from optimized DevOps practices.<br />
        Contact us to discover how DevOptima can help your business.
      </motion.p>
      <motion.div
        variants={fadeIn('up', '', 0.3, 1)}>
        <RoundButton className='mx-[9px]'>Contact us</RoundButton>
        <RoundOutlineButton>Try for free</RoundOutlineButton>
      </motion.div>
    </section>
  )
}

export default SectionWrapper(ContactUs, 'contactus')