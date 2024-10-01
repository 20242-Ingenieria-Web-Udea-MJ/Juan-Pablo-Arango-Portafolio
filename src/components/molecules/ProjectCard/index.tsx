import { Button, buttonVariants, } from '@/components/atoms/Buttoms'
import { TextSecondary, TitlePrincipal } from '@/components/atoms/Titles'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

/**
 * A card component to display project information.
 * 
 * @returns {JSX.Element} The rendered project card component.
 */
export default function ProjectCard() {
  return (
    <div className='grid lg:grid-flow-col md:grid-cols-2 w-full h-auto lg:h-[600px] xl:h-[500px] bg-white'>
        <div className='flex flex-col ml-20 justify-center gap-5'>
            <TitlePrincipal title={`I'm Juan Pablo Arango `} span='Software Developer'/>
            <TextSecondary text='Systems Engineering student at the University of Antioquia, currently in the eighth semester. I am known for my motivation to learn and constantly improve.'/> 
            <div>
              {/* button to redirect to linkedin profile*/}
              <Button className='flex gap-2 mb-2 hover:bg-yellow-600' asChild>
                <Link href='https://www.linkedin.com/in/juan-pablo-arango-gaviria-2a5339304/' className={buttonVariants({ variant: "outline" })}>HIRE ME <FaArrowRight className='h-4 w-4'/></Link>
              </Button>
            </div>
        </div>
        <div className='w-3/4 lg:w-full lg:flex lg:items-center lg:justify-center ml-10'>
            <Image src='/logo.png' width={500} height={500} alt='hero'/>
        </div>
      
    </div>
  )
}
