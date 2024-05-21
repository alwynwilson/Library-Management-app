import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className="library-footer">
            <div className="footer-content d-flex justify-content-around bg-success" >
                <div className="footer-section mt-5 mb-5" style={{color:'black',marginLeft:"70px"}}>
                    <h5>Central Library</h5>
                    <p>© 2024 Library Name. <br /> All rights reserved.</p>
                </div>
                <div className="footer-section mt-5 mb-5" style={{color:'black'}}>
                    <h5>Contact Us</h5>
                    <p>Email: info@library.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="links d-flex flex-column mt-5 mb-5">
                  <h5>Links</h5>
                  <Link to={'/'} style={{textDecoration:'none'}}>Landing Page</Link>
                  <Link to={'/store'} style={{textDecoration:'none'}}>Home Page</Link>
                </div>
                <div className="footer-section mt-5 mb-5" style={{marginRight:'120px'}}>
                    <h5>Follow Us</h5>
                    <ul style={{marginLeft:'-30px'}} className="social-links">
                        <li style={{listStyleType:'none'}}><a style={{textDecoration:'none'}} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li style={{listStyleType:'none'}}><a style={{textDecoration:'none'}} href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li style={{listStyleType:'none'}}><a style={{textDecoration:'none'}} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer