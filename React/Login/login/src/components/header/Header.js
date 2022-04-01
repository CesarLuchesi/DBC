import React from 'react'
import { useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import { Navbar,Container,Nav, Button,Stack} from 'react-bootstrap';
import { Link } from 'react-router-dom';




import Logo from './Logo'
import Menu from './Menu'
import {Autent} from '../../context/Autent';
import '../../style/Header.css'

export default function Header() {
  const {settLogout } = useContext(Autent)
  return (
    <>
    <header >
  <Navbar  bg="dark" variant="dark">
    <Container>
    
    <Navbar.Brand><Logo/></Navbar.Brand>
    <Stack direction="horizontal"  gap={4}>
    <Nav className="me-auto">
      <Nav.Link ><Link to={"/"}>Home</Link></Nav.Link>
      <div className="vr ms-auto" />
      <Nav.Link ><Link to={"/Usuario"}>User</Link></Nav.Link>
      <div className="vr ms-auto" />
      <Nav.Link><Link to={"/address"}>Endereço</Link></Nav.Link>
      <div className="vr ms-auto" />
      <Button onClick={settLogout}variant="danger">Sair</Button>
      <div className="vr ms-auto" />
    </Nav>
    </Stack>
    </Container>
  </Navbar>
      </header>
      </>
  )
}

 
