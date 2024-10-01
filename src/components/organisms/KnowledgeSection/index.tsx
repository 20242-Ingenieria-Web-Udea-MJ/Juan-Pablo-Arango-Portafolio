import { TextSecondary, TitleSecondary } from '@/components/atoms/Titles'
import React from 'react'
import EducationCard from '../../molecules/KnowledgeCard'
import { FaLaptopCode, FaDatabase, FaBuffer, FaDev, FaTools, FaRobot   } from 'react-icons/fa';

/**
 * The knowledge data.
 * @type {Object[]}
 */
const knowledge = [
    {
        icon: <FaDev className='h-full w-full'/>,
        title: 'Web development',
        description: 'Solid knowledge of fundamental web development languages such as HTML, CSS, and JavaScript, along with the use of technologies for the backend such as Node.js and Python.'
    },
    {
        icon: <FaLaptopCode className='h-full w-full'/>,
        title: 'Ui/Ux Design',
        description: 'Ability to apply user-centered design principles, focusing on creating intuitive and accessible interfaces, ensuring a cohesive user experience across web design.'
    },
    {
        icon: <FaDatabase  className='h-full w-full'/>,
        title: 'Database Management',
        description: 'Proficient in SQL, MySQL, and PostgreSQL for efficient database management, as well as integrating relational databases with web applications'
    },
    {
        icon: <FaBuffer className='h-full w-full'/>,
        title: 'Frameworks',
        description: 'Experience working with React and Next.js to create modern and efficient frontend applications and also with Express.js for backend development.'
    },
    {
        icon: <FaRobot  className='h-full w-full'/>,
        title: 'Machine Learning',
        description: 'Basic knowledge of Python and FastAPI, with the ability to apply machine learning algorithms and develop RESTful APIs for data processing and analysis.'
    },
    {
        icon: <FaTools  className='h-full w-full'/>,
        title: 'Tools & Technologies',
        description: 'Familiar with Git and GitHub for version control, along with the use of Postman for API testing.'
    },
]

/**
 * A section component to display knowledge information.
 * 
 * @returns {JSX.Element} The rendered knowledge section component.
 */
export default function KnowledgeSection() {
  return (
    <div className='flex flex-col gap-5 items-center'>
        <div className='flex flex-col w-3/4 gap-5 justify-center items-center'>
            <TitleSecondary title='My Knowledge'/>
            <TextSecondary text='My knowledge has been acquired through both formal education at university and online courses. I have utilized paid platforms like Udemy as well as free resources such as YouTube to continually expand my skills.'/>
        </div>
        <div className='lg:grid lg:grid-cols-3 flex flex-col gap-10 w-4/5 lg:w-full'>
            {knowledge.map((item, index) => (
                <EducationCard key={index} icon={item.icon} title={item.title} description={item.description}/>
            ))}
        </div>
    </div>
  )
}
