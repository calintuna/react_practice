import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { Menu, MenuItem} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

function AppSidebar(props) {

  return (
    <>
    
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Calintuna</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: { 
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        >
          <MenuItem component={<Link to="/" onClick={props.close} />}>Home</MenuItem>
          <MenuItem component={<Link to="/list" onClick={props.close} />}>List Demo</MenuItem>
          <MenuItem component={<Link to="/FamilyTravelMap" onClick={props.close} />}>Family Travel Map</MenuItem>
        </Menu>
      </Offcanvas.Body>
     
    </>
  );
}

export default AppSidebar;
