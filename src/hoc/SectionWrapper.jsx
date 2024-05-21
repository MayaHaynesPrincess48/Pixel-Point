import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}>
        <span className="hash-span" id={idName}>
        </span>
        <Component />
      </motion.section>
    )
  }

  return HOC
}

export default SectionWrapper
