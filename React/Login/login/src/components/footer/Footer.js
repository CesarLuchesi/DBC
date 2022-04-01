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
    </Nav>
    </Stack>
    </Container>
  </Navbar>
    </footer>
      
      
  )
}
