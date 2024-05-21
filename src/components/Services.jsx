import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import SectionTitle from './SectionTitle'
import { styles } from '../styles'
import { ServiceCard } from './Cards'
import { serviceCards } from '../constants'


const Services = () => {

  return (
    <section className='w-[1220px] m-auto py-12'>
      <div className='itemCenter'>
        <div className='w-[550px] h-[190px] text-center'>
          <SectionTitle title='&nbsp; Innovative solutions &nbsp;&nbsp; for operational excellence' />
          <motion.p
            initial={{ x: 350 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className={`${styles.bigText} text-grey-200`}>
            Tailored DevOps expertise driving your business momentum. <br />
            Personalized solutions for growth and evolution.
          </motion.p>
        </div>
      </div>
      <div className='w-full flex justify-between py-14'>
        {serviceCards.map((item, index) => (
          <ServiceCard key={index} index={index} {...item} />
        ))}
      </div>
    </section >
  )
}

export default SectionWrapper(Services, 'services')