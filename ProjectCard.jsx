import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'

const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card onClick={handleShow} className="shadow btn">

      <Card.Img variant="top" height={'200px'} src="" />
      <Card.Body>
        <Card.Title> Title</Card.Title>
      
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className="img-fluid" src="" alt="title" />
            </div>
            <div className="col-lg-6">
              <h3>title</h3>
              <h6><span className='fw-bolder'>Language Used:</span><span className='text-danger'>React</span></h6>
              <div className="fw-bolder"></div>
            </div>
          </div>
        </Modal.Body>
        
      </Modal>
    
    </>
  )
}

export default ProjectCard
