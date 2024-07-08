import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import { Col, Row, Container } from 'react-bootstrap/esm';
import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
import '../common/fade.css';


const Header = () => {
  return (    
    <Container>
      <Row>
        <Col>
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
        </Col>
      </Row>  
    </Container>
  )
}

export default Header