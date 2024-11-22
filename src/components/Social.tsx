import Link from 'next/link';
import React from 'react';

const GithubIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
         d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1-.9-1.2-.9-1.2-.8-.5.1-.5.1-.5.8.1 1.3.8 1.3.8.7 1.3 2 1 2.5.7a1.9 1.9 0 0 1 .5-1.3c-2.2-.3-4.5-1.1-4.5-5a3.8 3.8 0 0 1 1-2.7 3.5 3.5 0 0 1 .1-2.7s.8-.2 2.7 1a9.5 9.5 0 0 1 5 0c2-.8 2.7-1 2.7-1a3.5 3.5 0 0 1 .1 2.7 3.8 3.8 0 0 1 1 2.7c0 3.8-2.3 4.6-4.5 5 .3.3.6.9.6 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z"
      />
    </svg>
  )
}
  
const LinkedinIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-5.5 19h-3v-5.5c0-1.3-.5-2.2-1.8-2.2s-2.1.9-2.1 2.2V19h-3V8.5h3V10c.5-.8 1.6-1.7 3.3-1.7 2.4 0 4.1 1.6 4.1 5V19zm-10-11h-3V5h3v3zm-1.5-4a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4zm14.5 15h-3v-5.5c0-1.3-.5-2.2-1.8-2.2s-2.1.9-2.1 2.2V19h-3V8.5h3V10c.5-.8 1.6-1.7 3.3-1.7 2.4 0 4.1 1.6 4.1 5V19z"
      />
    </svg>
  )
}
  
const TwitterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="M23.6 4.6c-.8.4-1.7.6-2.6.8a4.6 4.6 0 0 0 2-2.6 9.3 9.3 0 0 1-3 1.2 4.6 4.6 0 0 0-7.9 4.2 13.2 13.2 0 0 1-9.6-4.9 4.6 4.6 0 0 0 1.4 6.2 4.5 4.5 0 0 1-2.1-.6v.1a4.6 4.6 0 0 0 3.7 4.5 4.7 4.7 0 0 1-2.1.1 4.6 4.6 0 0 0 4.3 3.2A9.3 9.3 0 0 1 0 20.4a13.2 13.2 0 0 0 7.2 2.1c8.7 0 13.4-7.2 13.4-13.4l-.1-.6a9.5 9.5 0 0 0 2.4-2.5z"
      />
    </svg>
        
  )
}    

const socials = [
    {
        icon: <GithubIcon/>,
        path: "",
    },
    {
        icon: <LinkedinIcon/>,
        path: "",
    },
    {
        icon: <TwitterIcon/>,
        path: "",
    },
]
const Social = ({ containerStyles, iconStyles } : {containerStyles: string; iconStyles: string}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) =>(
        <Link key={index} href={social.path} className={iconStyles}>{social.icon}</Link>
      ))}
    </div>
  )
}

export default Social

