import { NavLink } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

import Logo from "../../iiitdmj logo.png";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div className={classes.sidebar}>
      <CDBSidebar textColor='#fff' backgroundColor='#00ad42'>
        <img src={Logo} alt='IIITDMJ' className='img-fluid ms-1 mt-4' />
        <CDBSidebarHeader prefix={<i className='fa fa-bars fa-large'></i>}>
          <a
            href='/'
            className='text-decoration-none'
            style={{ color: "inherit" }}
          >
            IIITDMJ TIMES
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className='sidebar-content'>
          <CDBSidebarMenu>
            <NavLink exact to='/' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='calendar-week fa-lg'>
                Upcoming Events
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to='/research-academics'
              activeClassName='activeClicked'
            >
              <CDBSidebarMenuItem icon='microscope fa-lg'>
                Research &amp; Academics
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/sports' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='volleyball-ball fa-lg'>
                Sports
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/placements' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='money-check'>
                Placements
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/add-news' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='folder-plus fa-lg'>
                Add News
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/login' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='arrow-right fa-lg'>
                Sign In
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <CDBSidebarMenuItem
            icon='trophy fa-lg'
            style={{
              color: "gold",
            }}
          >
            Institute of Emminence
          </CDBSidebarMenuItem>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

export default MainNavigation;
