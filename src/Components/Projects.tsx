
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import background1 from '../assets/port-back.jpg'
import {FaReact, FaNodeJs} from 'react-icons/fa';
import {SiTypescript} from 'react-icons/si'


function Projects() {

  return (
    <div id='projects' className='projects'>
      <div className=''>
        <Container fluid>
          {/* each row holds 4 elements */}
        <Row className='row justify-content-start mb-3 mt-3'>
          {/* copy this col to evenly space them */}
          <Col className=''>
            <Card style={{ width: '18rem', height: '24rem'}}>
            <Card.Img variant="top" src={background1} style={{height: '50%'}} />
              <Card.Body>
                <Card.Title style={{color: 'black'}}>Portfolio Website</Card.Title>
                <Card.Subtitle style={{color: 'black'}}>Built with: <FaReact/> <SiTypescript /> <FaNodeJs /></Card.Subtitle>
                <Card.Text style={{color: 'black'}}>
                  The very portfolio website you are currently on. 
                </Card.Text>
                <Link to='/' className='col-4 mx-auto'>
                  <Button variant='dark' className='pe-5 ps-5'>View</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  )
}

export default Projects
