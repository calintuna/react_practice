import { useState } from 'react';
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';



function AppSidebar() {
  var webtitle;
  const [collapsed, setCollapsed] = useState(false);


  return (
    <Sidebar
      // rootStyles={{
      //   [`.${sidebarClasses.container}`]: {
      //     backgroundColor: 'red',
      //   },
      // }} 
      collapsed={collapsed}
    >
      <div className="row">
        {!collapsed && <div className='col-auto me-auto'>Calintuna</div>}
        <div className='col-auto' >
          <button onClick={() => setCollapsed(!collapsed)}><span className="bi bi-list"></span></button>  
        </div>
      </div>
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
        <MenuItem component={<Link to="/List" />}>List Demo</MenuItem>
        <MenuItem component={<Link to="/FamilyTravelMap" />}>Family Travel Map</MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default AppSidebar;
