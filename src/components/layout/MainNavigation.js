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
      <CDBSidebar textColor="#fff" backgroundColor="#00ad42">
        <img src={Logo} alt="IIITDMJ" className="img-fluid mx-5 mt-4" />
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            IIITDMJ TIMES
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <i className="fas fa-calendar-week"></i>Upcoming Events
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/research-academics"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem>
                <i className="fas fa-microscope"></i>Research &amp; Academics
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/sports" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <i className="fas fa-volleyball-ball"></i>Sports
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/placements" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <i className="fas fa-money-check-alt"></i>Placements
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/add-news" activeClassName="activeClicked">
              <CDBSidebarMenuItem>
                <i className="fas fa-folder-plus"></i>Add News
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
              color: "gold",
            }}
          >
            INSTITUTE OF NATIONAL IMPORTANCE
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

export default MainNavigation;
