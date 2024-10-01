import Avatar from '@/components/atoms/Avatar'
import { TextSecondary, TitleTertiary } from '@/components/atoms/Titles'
import React from 'react'

/**
 * Props for the ProfileCard component.
 * @typedef {Object} ProfileCardProps
 * @property {string} Image - The image of the profile.
 * @property {string} name - The name of the profile.
 * @property {string} role - The role of the profile.
 */
type ProfileCardProps = {
    Image: string,
    name: string,
    role: string,
}

/**
 * A card component to display profile information.
 * 
 * @param {ProfileCardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered profile card component.
 */
export default function ProfileCard({ Image, name, role }: ProfileCardProps) {
  return (
    <div className='flex flex-col justify-center items-center w-full h-60 gap-2'>
        <Avatar src={Image} alt={name}/>
        <TitleTertiary title={name}/>
        <TextSecondary text={role}/>
    </div>
  )
}
