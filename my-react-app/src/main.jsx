import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense>
      <App />
    </Suspense>
  </BrowserRouter>,
)

