import { TextSecondary, TitleTertiary } from '@/components/atoms/Titles';
import React from 'react'

/**
 * Props for the KnowledgeCard component.
 * @typedef {Object} KnowledgeCardCardProps
 * @property {JSX.Element} icon - The icon to display in the card.
 * @property {string} title - The title of the knowledge card.
 * @property {string} description - The description of the knowledge card.
 */
type KnowledgeCardCardProps = {
    icon: JSX.Element;
    title: string;
    description: string;
}

/**
 * A card component to display knowledge information.
 * 
 * @param {KnowledgeCardCardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered knowledge card component.
 */
export default function KnowledgeCard({icon, title, description}: KnowledgeCardCardProps) {
  return (
    <div className='flex flex-col bg-white items-center justify-evenly h-80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary/10 duration-300 text-center pt-3'>
        <div className='text-primary w-16 h-16'>
            {icon}
        </div>
        <TitleTertiary title={title}/>
        <div className='flex p-2 h-1/2 lg:h-auto'>
          <TextSecondary text={description}/>
        </div>
    </div>
  )
}
