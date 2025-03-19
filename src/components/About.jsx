import React from 'react'
//import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shodow-card'
    >
      <div 
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img className='w-16 h-16 object-contain' src={icon} alt={title} />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        variants={fadeIn('', '', 0.1, 1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos, aspernatur deleniti ratione nesciunt temporibus totam quisquam voluptates voluptas tempore, ea odio veritatis minus corrupti soluta facere iste voluptatibus reiciendis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem doloremque quod, alias iusto possimus quasi optio ex. Maiores maxime eum inventore minus ea velit perspiciatis, dicta et vero aliquid ad.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
