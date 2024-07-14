import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';

import AppRoutes from './components/AppRoutes';



function App() {
  const [acts, setAct] = useState([]);


  return (
    <div className='container' style={ {width: '100%'}} >
      <div className='row'>
        <div className='col-md-3' style={ {display: 'flex', height: '100%'} }>
          <Sidebar />
        </div>

        <div className='col-md-9' style={ {padding: '10px', background: '#ccc', 'textAlign': 'left', 'word-wrap': 'break-word'} }>
          <AppRoutes/>
        </div>
      </div>

      <div className='row'>
        <Footer />
      </div>
    </div>
  );
}

export default App
