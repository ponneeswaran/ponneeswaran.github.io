import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitterX} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/ponneeswaran-natarajan-253920105" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/ponneeswaran" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://twitter.com/Ponneeswaran" target="_blank" rel='noreferrer'><BsTwitterX/></a>
    </div>
  )
}

export default HeaderSocials