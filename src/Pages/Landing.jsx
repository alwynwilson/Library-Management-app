import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <>
      <Header/>
      <div > 
        <div className="row d-flex"  >
          <div className="col-lg-1"></div>
          <div className="col-lg-5 p-5">
            <div className="landing-content">
                <h1 className='mt-4'>Welcome, <br />Library System Admin</h1>
                <p className='mt-4'>
                    Manage your library's resources efficiently and effectively.
                    Use the dashboard to add new books, manage user accounts, 
                    and generate insightful reports to keep the library running smoothly.
                </p>
                <button className="home-button btn btn-dark rounded mt-4">
                  <Link to={'/store'} style={{textDecoration:'none',color:'white'}}>Go to Dashboard</Link>
                </button>
            </div>
          </div>
          <div className="col-lg-5 p-5">
            <img src="https://www.edusys.co/images/library.png" width={'500px'} alt="" />
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </>
  )
}

export default Landing