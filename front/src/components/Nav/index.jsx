// import React, { useContext, useState } from "react";

// import { Button } from "react-bootstrap";
// import CartContext from "../../context/CartContext";
// import Modal from 'react-bootstrap/Modal'
// import styles from "./styles.module.scss";

// const Nav = () => {
//   const { products, setNewProducts } = useContext(CartContext);

//   const [show, setShow] = useState(false);
//   const [toggle, setToggle] = useState(false)

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const handleToggle = (e) => {
//     setToggle(true)
//   }
//   const handleToggleFalse = (e) => {
//     setToggle(false)
//   }

//   const eventMac = () => {
//     const newProducts = products.filter((prod) =>
//       prod.name.toLowerCase().includes('mac')
//     );
//     setNewProducts(newProducts);
//   };

//   const eventIpad = () => {
//     const newProducts = products.filter((prod) =>
//       prod.name.toLowerCase().includes('ipad')
//     );
//     setNewProducts(newProducts);
//   };

//   const eventIphone = () => {
//     const newProducts = products.filter((prod) =>
//       prod.name.toLowerCase().includes('iphone')
//     );
//     setNewProducts(newProducts);
//   };

//   const eventWatch = () => {
//     const newProducts = products.filter((prod) =>
//       prod.name.toLowerCase().includes('watch')
//     );
//     setNewProducts(newProducts);
//   };

//   const eventAirPods = () => {
//     const newProducts = products.filter((prod) =>
//       prod.name.toLowerCase().includes('airpods')
//     );
//     setNewProducts(newProducts);
//   };

//   return (
//     <>
//       <header className={styles.header}>
//         <nav className={styles.navContainer}>
//           <div className={styles.navBrandDesktop}>
//             <img
//               src="https://graffica.info/wp-content/uploads/2016/03/logo_1998-1200x876.jpg"
//               alt=""
//             />
//           </div>
//           <ul className={styles.navLinks}>
//             <li onClick={eventMac}>Mac</li>
//             <li onClick={eventIpad}>Ipad</li>
//             <li onClick={eventIphone}>Iphone</li>
//             <li onClick={eventWatch}>Watch</li>
//             <li onClick={eventAirPods}>AirPods</li>
//           </ul>
//           <button className={styles.loginDesktop} onClick={handleShow}>Login</button>
//         </nav>
//       </header>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Sign in or Sing up</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
       
// <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
//   <li className="nav-item" role="presentation">
//     <a className="nav-link btn btn-secondary" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab" onClick={(e) => {handleToggle(e)}}
//       aria-controls="pills-login" aria-selected="true">Login</a>
//   </li>
//   <li className="nav-item" role="presentation">
//     <a className="nav-link btn btn-secondary" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab" onClick={(e) => {handleToggleFalse(e)}}
//       aria-controls="pills-register" aria-selected="false">Register</a>
//   </li>
// </ul>

// {toggle ? (
//   <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
//   <form>
//     <div className="text-center mb-3">
//       <p>Sign in with:</p>
//       <button type="button" className="btn btn-link btn-floating mx-1">
//         <i className="fab fa-facebook-f"></i>
//       </button>

//       <button type="button" className="btn btn-link btn-floating mx-1">
//         <i className="fab fa-google"></i>
//       </button>

//       <button type="button" className="btn btn-link btn-floating mx-1">
//         <i className="fab fa-twitter"></i>
//       </button>

//       <button type="button" className="btn btn-link btn-floating mx-1">
//         <i className="fab fa-github"></i>
//       </button>
//     </div>

//     <p className="text-center">or:</p>

 
//     <div className="form-outline mb-4">
//       <input type="email" id="loginName" className="form-control" />
//       <label className="form-label" htmlFor="loginName">Email or username</label>
//     </div>

  
//     <div className="form-outline mb-4">
//       <input type="password" id="loginPassword" className="form-control" />
//       <label className="form-label" htmlFor="loginPassword">Password</label>
//     </div>

   
//     <div className="row mb-4">
//       <div className="col-md-6 d-flex justify-content-center">
     
//         <div className="form-check mb-3 mb-md-0">
//           <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
//           <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
//         </div>
//       </div>

//       <div className="col-md-6 d-flex justify-content-center">
      
//         <a href="#!">Forgot password?</a>
//       </div>
//     </div>


//     <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>


//     <div className="text-center">
//       <p>Not a member? <a href="#!">Register</a></p>
//     </div>
//   </form>
// </div>
// ) : (
//   <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
//   <form>
//     <div className="text-center mb-3">
//       <p>Sign up with:</p>
//       <button type="button" className="btn btn-link btn-floating mx-1">
//         <i className="fab fa-facebook-f"></i>
//       </button>

//       <button type="button" className="btn btn-link btn-floating mx-1">
//         <i className="fab fa-google"></i>
//       </button>

//       <button type="button" className="btn btn-link btn-floating mx-1">
//         <i className="fab fa-twitter"></i>
//       </button>

//       <button type="button" className="btn btn-link btn-floating mx-1">
//         <i className="fab fa-github"></i>
//       </button>
//     </div>

//     <p className="text-center">or:</p>

 
//     <div className="form-outline mb-4">
//       <input type="email" id="loginName" className="form-control" />
//       <label className="form-label" htmlFor="loginName">Email or username</label>
//     </div>

  
//     <div className="form-outline mb-4">
//       <input type="password" id="loginPassword" className="form-control" />
//       <label className="form-label" htmlFor="loginPassword">Password</label>
//     </div>

   
//     <div className="row mb-4">
//       <div className="col-md-6 d-flex justify-content-center">
     
//         <div className="form-check mb-3 mb-md-0">
//           <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
//           <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
//         </div>
//       </div>

//       <div className="col-md-6 d-flex justify-content-center">
      
//         <a href="#!">Forgot password?</a>
//       </div>
//     </div>


//     <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>


//     <div className="text-center">
//       <p>Not a member? <a href="#!">Register</a></p>
//     </div>
//   </form>
// </div>
// )}

//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default Nav;

import { Button, Container, Form, FormControl, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap'

import React from 'react'

function Navb() {
  return (<>
    <Navbar key={'sm'} bg="light" expand={'sm'} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${'sm'}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'sm'}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-${'sm'}`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  </>
  )
}

export default Navb
