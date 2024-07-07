import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import { Col, Row, Container, Image } from 'react-bootstrap/esm';
import 'bootstrap/dist/css/bootstrap.css';


const Header = () => {
  return (    
      <header id='home'>
        <div className="container header__container">
          <Container>
            
            <h5>Hello, I'm</h5>
            <h1>Ponneeswaran Natarajan</h1>
            <h5 className="text-light">Senior Software Lead</h5>
            <CTA/>
            <HeaderSocials/>
          </Container>
        </div>
      </header>   
  )
}

export default Header