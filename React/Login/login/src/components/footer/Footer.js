import React from 'react'
import Menu from '../header/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import { Navbar,Container,Nav, Button,Stack,Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
  <Navbar fixed="bottom"  bg="dark" variant="dark">
    <Container>
    <Stack direction="horizontal"  gap={3}>
    <Nav>
    <div>
      <Badge bg="primary"> &copy; Copyright: Vem-Ser 2022</Badge>
      </div>
      <Nav.Link ><Link to={"/"}>Home</Link></Nav.Link>
      <div className="vr ms-auto" />
      <Nav.Link ><Link to={"/Usuario"}>User</Link></Nav.Link>
      <div/>
      <Nav.Link><Link to={"/address"}>Endereço</Link></Nav.Link>
      <div/>
     
    </Nav>
    </Stack>
    </Container>
  </Navbar>
    </footer>
      
      
  )
}
