import React, { useState, useEffect } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
// import { Menu, MenuItem, Sidebar} from 'react-pro-sidebar';
// import { Link } from 'react-router-dom';
// import './App.css'
import axios from 'axios';

import Footer from './components/Footer.jsx';
// import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';

import AppRoutes from './components/AppRoutes';



function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Launch
        </Button>
      </div>
      <div>
        <Offcanvas show={show} onHide={handleClose}>
          <Sidebar close={handleClose} />
        </Offcanvas>
      </div>

      <AppRoutes/>
      
      <Footer />  
    </div>
  );
}

export default App
