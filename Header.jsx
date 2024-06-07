import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({insideDashboard}) => {
  return (
    <Navbar style={{zIndex:'10'}} className="position-fixed w-100 top-0 border rounded">
        <Container>
          <Navbar.Brand href="#home">
            <Link className='fw-bolder' to={'/'} style={{textDecoration:'none',color:'white'}}>
            <i className="fa-brands fa-docker"></i>&nbsp; 
Project Fair
            </Link>
          </Navbar.Brand>
          {
            insideDashboard &&
            <div className="ms-auto">
<button style={{textDecoration:'none'}} className="btn btn-link fw-bolder">Log Out &nbsp; <i class="fa-solid fa-right-from-bracket"></i>

</button>
            </div>
          }
        </Container>
      </Navbar>
  )
}

export default Header
