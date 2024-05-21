import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Badge } from "react-bootstrap"
import { Link } from 'react-router-dom'


function Header({insideHome}) {
  return (
    <>
      <div>
        <Navbar className="bg-success">
          <Container>
            <Navbar.Brand href="#home" className='d-flex ms-5 mt-2 '>
              <img
                alt=""
                src="https://icon-library.com/images/photo-library-icon/photo-library-icon-3.jpg"
                width="50"
                height="50"
              />
              <h3 style={{marginLeft:'20px',marginTop:'10px'}}>CENTRAL LIBRARY</h3>
            </Navbar.Brand>
            <Nav className="ms-auto ">
            { insideHome && 
              <Nav.Link>
                <div>
                  <button className="btn btn-dark text-light ms-3 rounded"><Link  style={{color:'white'}} to={'/'}><i class="fa-solid fa-house"></i></Link></button>
                </div>
              </Nav.Link>
              
            }
            
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  )
} 

export default Header