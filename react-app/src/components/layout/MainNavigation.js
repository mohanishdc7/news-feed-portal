import { NavLink } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

import Logo from "../../app_logo.png";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div className={classes.sidebar}>
      <CDBSidebar textColor='#fff' backgroundColor='#00ad42'>
        <CDBSidebarHeader prefix={<i className='fa fa-bars fa-lg'></i>}>
          <img src={Logo} alt='logo' className={classes.logo + " img-fluid"} />
        </CDBSidebarHeader>

        <CDBSidebarContent className='sidebar-content'>
          <CDBSidebarMenu>
            <NavLink
              exact
              to='/'
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem icon='calendar-week fa-lg'>
                Upcoming Events
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to='/research-academics'
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem icon='microscope fa-lg'>
                Research &amp; Academics
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to='/sports'
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem icon='volleyball-ball fa-lg'>
                Sports
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to='/placements'
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem icon='money-check'>
                Placements
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to='/add-news'
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
              <CDBSidebarMenuItem icon='folder-plus fa-lg'>
                Add News
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to='/login'
              className={({ isActive }) => (isActive ? "activeClicked" : "")}
            >
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
