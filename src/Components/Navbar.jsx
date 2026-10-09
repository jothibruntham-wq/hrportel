import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `hr-nav-link ${isActive ? "active" : ""}`;

  return (
    <nav className="hr-navbar navbar navbar-expand-lg sticky-top">
      <div className="container-fluid px-lg-4">

        {/* LOGO */}
        <NavLink to="/" className="hr-brand">
          <div className="hr-brand-icon">
            <i className="bi bi-people-fill"></i>
          </div>

          <div className="hr-brand-text">
            <strong>People<span>Hub</span></strong>
            <small>HR PORTAL</small>
          </div>
        </NavLink>

        {/* MOBILE BUTTON */}
        <button
          className="navbar-toggler hr-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#hrNavbar"
          aria-controls="hrNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* NAVIGATION */}
        <div className="collapse navbar-collapse" id="hrNavbar">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink to="/" className={navLinkClass}>
                <i className="bi bi-grid-1x2-fill"></i>
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/employees" className={navLinkClass}>
                <i className="bi bi-people-fill"></i>
                Employees
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/attendance" className={navLinkClass}>
                <i className="bi bi-calendar-check-fill"></i>
                Attendance
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/leave" className={navLinkClass}>
                <i className="bi bi-calendar-x-fill"></i>
                Leave
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/payroll" className={navLinkClass}>
                <i className="bi bi-wallet2"></i>
                Payroll
              </NavLink>
            </li>

            <li className="nav-item dropdown">

              <a
                className="hr-nav-link dropdown-toggle"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-grid-fill"></i>
                More
              </a>

              <ul className="dropdown-menu hr-dropdown">

                <li>
                  <NavLink to="/recruitment" className="dropdown-item">
                    <i className="bi bi-person-plus-fill"></i>
                    Recruitment
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/events" className="dropdown-item">
                    <i className="bi bi-calendar-event-fill"></i>
                    Company Events
                  </NavLink>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a href="#!" className="dropdown-item">
                    <i className="bi bi-gear-fill"></i>
                    Settings
                  </a>
                </li>

              </ul>

            </li>

          </ul>

          {/* RIGHT SIDE */}
          <div className="hr-nav-actions">

            {/* SEARCH */}
            <button
              className="hr-icon-button"
              title="Search"
              type="button"
            >
              <i className="bi bi-search"></i>
            </button>

            {/* NOTIFICATION */}
            <button
              className="hr-icon-button notification-button"
              title="Notifications"
              type="button"
            >
              <i className="bi bi-bell-fill"></i>
              <span className="notification-count">3</span>
            </button>

            {/* DIVIDER */}
            <div className="hr-nav-divider"></div>

            {/* PROFILE */}
            <div className="dropdown">

              <button
                className="hr-profile"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="profile-avatar">
                  <span>AD</span>
                </div>

                <div className="profile-info">
                  <strong>Admin</strong>
                  <small>HR Manager</small>
                </div>

                <i className="bi bi-chevron-down profile-arrow"></i>
              </button>

              <ul className="dropdown-menu dropdown-menu-end hr-profile-menu">

                <li className="profile-menu-header">
                  <div className="profile-avatar large">
                    <span>AD</span>
                  </div>

                  <div>
                    <strong>Admin</strong>
                    <small>admin@peoplehub.com</small>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a href="#!" className="dropdown-item">
                    <i className="bi bi-person-circle"></i>
                    My Profile
                  </a>
                </li>

                <li>
                  <a href="#!" className="dropdown-item">
                    <i className="bi bi-gear-fill"></i>
                    Account Settings
                  </a>
                </li>

                <li>
                  <a href="#!" className="dropdown-item">
                    <i className="bi bi-question-circle-fill"></i>
                    Help Center
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a href="#!" className="dropdown-item logout-item">
                    <i className="bi bi-box-arrow-right"></i>
                    Logout
                  </a>
                </li>

              </ul>

            </div>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
