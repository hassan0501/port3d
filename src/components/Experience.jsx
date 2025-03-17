import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-[#1d1836] text-white p-6 rounded-lg mb-6 shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-16 h-16 object-contain mr-4"
        />
        <div>
          <h3 className="text-[24px] font-bold">{experience.title}</h3>
          <p className="text-secondary text-[16px] font-semibold">{experience.company_name}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm mb-2">{experience.date}</p>
      <ul className="list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");