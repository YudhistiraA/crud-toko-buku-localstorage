import React,{Component} from 'react'

import Utama from './components/utama'
import {Link} from 'react-router-dom'
import  { Navbar } from "react-bootstrap";
import  { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
  return (
    <div >



<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
      <Nav.Link><Link to='/'>BUKU</Link></Nav.Link>
      <Nav.Link><Link to='/Cart'>Cart</Link></Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    <Utama />


    </div>
  );
}}

export default App;
