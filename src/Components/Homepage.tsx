
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import '../styles/App.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Homepage() {

    return (
    <div id='home' className='homepage'>
        <div className=''>
            <Container >
            <Row>
                <h1>Erique Greenwood</h1>
                <h4 className='mb-5'>Software Engineer</h4>
                <Link to='/projects' className='col-4 mx-auto'>
                    <Button variant='light' className='pe-5 ps-5'>Projects and Skills</Button>
                </Link>
            </Row>
            </Container>
        </div>
    </div>
    )
}

export default Homepage