import { Progress } from '@/components/atoms/ProgressBar'
import { TextSecondary, TitleTertiary } from '@/components/atoms/Titles'
import { Lenguage } from '@/types'
import React from 'react'

/**
 * Props for the SkillBar component.
 * @typedef {Object} SkillBarProps
 * @property {string} title - The title of the skill bar.
 * @property {Lenguage[]} lengauges - The list of lenguages to display.
 */
type SkillBarProps = {
    title: string,
    lengauges: Lenguage[],
}

/**
 * A bar component to display skill information.
 * 
 * @param {SkillBarProps} props - The props for the component.
 * @returns {JSX.Element} The rendered skill bar component.
 */
export default function SkillBar({ title, lengauges }: SkillBarProps) {
  return (
    <div className='flex flex-col gap-3 w-56 mb-4 justify-center items-center lg:items-start'>
      <TitleTertiary title={title}/>
      {
        lengauges.map((lenguage) => (
          <div key={lenguage.id} className='flex flex-col w-4/5 lg:w-full'>
            <div className='flex justify-between'>
              <TextSecondary text={lenguage.name}/>
              <TextSecondary text={`${lenguage.progress}%`}/>
            </div>
            <Progress value={lenguage.progress}/>
          </div>
        ))
      }
    </div>
  )
}
