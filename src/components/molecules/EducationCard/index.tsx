import { TextPrincipal, TextPrincipalFill, TextSecondary, TitleTertiary } from '@/components/atoms/Titles'
import React from 'react'

/**
 * Props for the EducationCard component.
 * @typedef {Object} educationProps
 * @property {string} university - The name of the university.
 * @property {string} role - The role or position held.
 * @property {string} date - The date or duration of the role.
 * @property {string} title - The title of the education card.
 * @property {string} description - The description of the role or education.
*/
type educationProps = {
  university: string;
  role: string;
  date: string;
  title: string;
  description: string;
};

/**
 * A card component to display education information.
 * 
 * @param {educationProps} props - The props for the component.
 * @returns {JSX.Element} The rendered education card component.
 */
export default function EducationCard({ university, role, date, title, description }: educationProps) {
  return (
    <div className='lg:grid lg:grid-cols-2 xl:grid-cols-[1fr_2fr] lg:gap-20 bg-white h-auto lg:h-72 xl:h-auto md:h-72 border-b border-solid justify-center items-center w-4/5 lg:w-full pb-2'>
        <div className='flex flex-col justify-center items-center gap-8 mx-10 mt-3 lg:mt-0'>
            <TitleTertiary title={university}/>
            <div className='flex items-center w-full justify-between'>
                <TextSecondary text={role}/>
                <TextPrincipalFill text={date}/>
            </div>
        </div>
        <div className='flex flex-col gap-4 lg:gap-8 lg:mt-0 lg:mb-0 lg:items-start p-2'>
            <TitleTertiary title={title}/>
            <TextPrincipal text={description}/>
        </div>
    </div>
  )
}
