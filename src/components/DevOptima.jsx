import React from 'react'
import { SectionWrapper } from '../hoc'
import { devOptimaBg } from '../assets'
import { DevOptimaCard } from './Cards'
import { devOptimaCards } from '../constants'


const DevOptima = () => {


  return (
    <section className='itemCenter py-40 p-3 w-full'>
      {/* <img src={devOptimaBg} className='absolute' style={{ scale: '1.1' }} /> */}
      <div className='itemCenter imgCover w-full' style={{ backgroundImage: `url(${devOptimaBg})` }}>
        {devOptimaCards.map((item, index) => (
          <DevOptimaCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(DevOptima, 'devOptima')