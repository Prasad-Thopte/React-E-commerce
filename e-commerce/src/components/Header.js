import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../img/logo.png'
import './css/style.css';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >





                    </Nav>
                    <div className='srch'>
                        <Form className="d-flex srch">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>

                        </Form>
                    </div>
                    <Nav>
                        <div className='cbtn1'>
                            <Button variant="outline-primary"><FontAwesomeIcon icon={faCartShopping} /></Button>
                        </div>
                        <div className='cbtn2'>
                            <Button variant="outline-success"><FontAwesomeIcon icon={faUser} /></Button>

                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Header;