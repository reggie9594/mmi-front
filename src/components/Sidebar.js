import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      {/* LEFT SIDEBAR WITH FOOTER */}
      <aside class="left-sidebar bg-sidebar">
        <div id="sidebar" class="sidebar sidebar-with-footer">
          {/* Aplication Brand  */}
          <div class="app-brand">
            <Link to="/">
              <span class="brand-name">MUSIC MAKES IT</span>
            </Link>
          </div>
          {/* begin sidebar scrollbar  */}
          <div class="sidebar-scrollbar">
            {/* sidebar menu  */}
            <ul class="nav sidebar-inner" id="sidebar-menu">
              <li class="has-sub  expand">
                <Link to="/" class="sidenav-item-link">
                  <i class="mdi mdi-view-dashboard-outline"></i>
                  <span class="nav-text">Home</span> <b class="caret"></b>
                </Link>
              </li>

              <li class="has-sub">
                <Link to="dashboard" class="sidenav-item-link">
                  <i class="mdi mdi-folder-multiple-outline"></i>
                  <span class="nav-text">Dashboard</span> <b class="caret"></b>
                </Link>
              </li>

              <li class="has-sub">
                <Link to="login" class="sidenav-item-link">
                  <i class="mdi mdi-folder-multiple-outline"></i>
                  <span class="nav-text">Login</span> <b class="caret"></b>
                </Link>
              </li>

              <li class="has-sub">
                <Link to="signup" class="sidenav-item-link">
                  <i class="mdi mdi-folder-multiple-outline"></i>
                  <span class="nav-text">Sign Up!</span> <b class="caret"></b>
                </Link>
              </li>

              <li class="has-sub">
                <Link to="/cart" class="sidenav-item-link">
                  <i class="mdi mdi-folder-multiple-outline"></i>
                  <span class="nav-text">Cart</span> <b class="caret"></b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
