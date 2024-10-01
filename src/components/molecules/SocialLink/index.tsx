// components/molecules/SocialLinks.tsx
import { TextPrincipalBold } from '@/components/atoms/Titles';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaDribbble, FaGithub } from 'react-icons/fa';

/**
 * A list of social links avaibles.
 * @type {Object[]}
 */
const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/Juanpablo-a" },
  { icon: <FaFacebookF />, link: "https://www.facebook.com/juanpablo.arango.739/" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/juanpablo_030/" },
  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/juan-pablo-arango-gaviria-2a5339304/" },
  { icon: <FaYoutube />, link: "https://youtube.com" },
  { icon: <FaDribbble />, link: "https://dribbble.com" },
];

/**
 * A component to render the social links.
 * 
 * @returns {JSX.Element} The rendered social links component.
 */
const SocialLinks = () => {
  return (
    <div className="fixed top-20 flex flex-col justify-center items-center space-y-4">
      <TextPrincipalBold text='Links'/>
      {/* Iterate over social links */}
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary p-3 rounded-full text-black shadow-md hover:bg-yellow-600 transition duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
