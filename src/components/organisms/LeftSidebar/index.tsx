import { TextPrincipal, TextSecondary } from '@/components/atoms/Titles'
import ProfileCard from '@/components/molecules/ProfileCard'
import SkillBar from '@/components/molecules/SkillBar'
import { otherLenguages, programmingLenguages } from '@/data/lenguages'
import React from 'react'

/**
 * The left sidebar component.
 * 
 * @returns {JSX.Element} The rendered left sidebar component.
 */
export default function LeftSidebar() {
  return (
    <div className='flex flex-col min-h-screen w-50 md:w-80 bg-white items-center gap-2 inset-y-0 left-0'>
        {/* Perfil con foto */}
        <div className='mt-4 border-b border-solid'>
            <ProfileCard 
                Image='/imagenPerfil.png'
                name='Juan Pablo Arango'
                role='Software Developer'
            />
        </div>

        {/* Personal Data */}
        <div className='flex flex-col w-48 lg:w-56 border-b border-solid gap-2 mt-4'>
            <div className='flex justify-between'>
                <TextPrincipal text='Age'/>
                <TextSecondary text='22'/>
            </div>
            <div className='flex justify-between'>
                <TextPrincipal text='Residence'/>
                <TextSecondary text='La Ceja'/>
            </div>
            <div className='flex justify-between'>
                <TextPrincipal text='Freelance'/>
                <p className='font-roboto text-green-400 text-center text-lg md:text-base sm:text-left'>Available</p>
            </div>
            <div className='flex justify-between mb-4'>
                <TextPrincipal text='Address'/>
                <TextSecondary text='Cra 15 # 13A-45'/>
            </div>
        </div>

        {/* Lenguages */}
        <div className='flex flex-col gap-2 border-b border-solid'>
            <SkillBar title='Lenguages' lengauges={otherLenguages}/>
        </div>

        {/* Skills */}
        <div className='flex flex-col gap-2 border-b border-solid'>
            <SkillBar title='Programming Skills' lengauges={programmingLenguages}/>
        </div>
      
    </div>
  )
}
