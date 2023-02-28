import { useState } from 'react'
import NavbarHead from './Components/Navbar'
import background from './assets/background.jpg'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'

function App() {

  return (
    <div id='home'>
      <NavbarHead/>
      <Container fluid>
        <div className='masthead'>
          <img src={background} className='img-fluid opacity-50'/>
          <div className='imageMoving'>
            <figcaption><h1>Erique Greenwood</h1></figcaption>
            <figcaption><h5>Software Engineer</h5></figcaption>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default App
