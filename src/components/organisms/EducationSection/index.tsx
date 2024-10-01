import { TextSecondary, TitleSecondary } from '@/components/atoms/Titles'
import EducationCard from '@/components/molecules/EducationCard'
import React from 'react'

/**
 * The education data.
 * @type {Object[]}
 */
const education = [
  {
    university: 'Maria Josefa Marulanda',
    role: 'Graduated',
    date: 'Dec. 2018',
    title: 'Secondary Education',
    description: 'I graduated from the Maria Josefa Marulanda school in 2018. I developed skills in mathematics, physics, and chemistry. I also developed skills in teamwork and leadership.',
  },
  {
    university: 'University of Antioquia',
    role: 'Student',
    date: 'current',
    title: 'Systems Engineering',
    description: 'I am currently studying Systems Engineering at the University of Antioquia. I am developing skills in programming, databases, and web development.',
  },

]

/**
 * A section component to display education information.
 * 
 * @returns {JSX.Element} The rendered education section component.
 */
export default function EducationSection() {
  return (
    <div className='flex flex-col gap-6 items-center'>
        <div className='flex flex-col w-3/4 gap-5 justify-center items-center'>
            <TitleSecondary title='My Education'/>
            <TextSecondary text='This section highlights my academic journey, I have cultivated important skills in both technical and interpersonal areas, which complement my professional profile and prepare me for future challenges in the tech industry.'/>
        </div>
        <div className='flex flex-col items-center'>
          {/* education cards */}
          {education.map((item, index) => (
            <EducationCard key={index} university={item.university} role={item.role} date={item.date} title={item.title} description={item.description}/>
          ))}
        </div>
        
    </div>
  )
}
