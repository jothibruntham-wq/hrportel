import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/style.css';
        
    


function Home() {
  return (
    <div className="hr-home">

      {/* HERO / DASHBOARD HEADER */}
      <section className="hr-hero">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-7" data-aos="fade-right">
              <span className="hr-badge">
                <i className="bi bi-stars"></i>
                SMART HR MANAGEMENT
              </span>

              <h1>
                Manage Your
                <span> People.</span>
                <br />
                Grow Your
                <span> Business.</span>
              </h1>

              <p>
                A modern HR management platform designed to simplify
                employee management, attendance, payroll and leave
                administration.
              </p>

              <div className="hero-buttons">
                <Link to="/employees" className="btn btn-primary btn-lg">
                  <i className="bi bi-people-fill me-2"></i>
                  Manage Employees
                </Link>

                <Link
                  to="/attendance"
                  className="btn btn-outline-dark btn-lg"
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  View Attendance
                </Link>
              </div>

              <div className="hero-trust">
                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Secure
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Easy to Use
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Real-time
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="col-lg-5" data-aos="fade-left">
              <div className="dashboard-preview">

                <div className="preview-top">
                  <div>
                    <small>Welcome back</small>
                    <h5>HR Dashboard</h5>
                  </div>

                  <div className="preview-notification">
                    <i className="bi bi-bell-fill"></i>
                    <span>3</span>
                  </div>
                </div>

                <div className="preview-stats">

                  <div className="preview-card">
                    <div className="preview-icon blue">
                      <i className="bi bi-people-fill"></i>
                    </div>

                    <div>
                      <small>Employees</small>
                      <h4>248</h4>
                    </div>
                  </div>

                  <div className="preview-card">
                    <div className="preview-icon green">
                      <i className="bi bi-person-check-fill"></i>
                    </div>

                    <div>
                      <small>Present Today</small>
                      <h4>221</h4>
                    </div>
                  </div>

                  <div className="preview-card">
                    <div className="preview-icon orange">
                      <i className="bi bi-calendar-x-fill"></i>
                    </div>

                    <div>
                      <small>On Leave</small>
                      <h4>12</h4>
                    </div>
                  </div>

                  <div className="preview-card">
                    <div className="preview-icon purple">
                      <i className="bi bi-person-plus-fill"></i>
                    </div>

                    <div>
                      <small>New Hires</small>
                      <h4>15</h4>
                    </div>
                  </div>

                </div>

                <div className="attendance-preview">
                  <div className="d-flex justify-content-between">
                    <strong>Attendance Overview</strong>
                    <span>Today</span>
                  </div>

                  <div className="progress mt-3">
                    <div
                      className="progress-bar"
                      style={{ width: "89%" }}
                    ></div>
                  </div>

                  <div className="attendance-number">
                    <strong>89%</strong>
                    <span>Attendance Rate</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="hr-statistics">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-3 col-md-6" data-aos="fade-up">
              <div className="stat-card">
                <div className="stat-icon blue">
                  <i className="bi bi-people-fill"></i>
                </div>

                <div>
                  <h3>248</h3>
                  <p>Total Employees</p>
                  <small>
                    <i className="bi bi-arrow-up"></i> 12% this month
                  </small>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="stat-card">
                <div className="stat-icon green">
                  <i className="bi bi-person-check-fill"></i>
                </div>

                <div>
                  <h3>221</h3>
                  <p>Present Today</p>
                  <small>
                    <i className="bi bi-check-circle"></i> 89% attendance
                  </small>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="stat-card">
                <div className="stat-icon orange">
                  <i className="bi bi-calendar-event-fill"></i>
                </div>

                <div>
                  <h3>12</h3>
                  <p>Leave Requests</p>
                  <small>Needs attention</small>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="stat-card">
                <div className="stat-icon purple">
                  <i className="bi bi-briefcase-fill"></i>
                </div>

                <div>
                  <h3>15</h3>
                  <p>Open Positions</p>
                  <small>5 new this week</small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HR MODULES */}
      <section className="hr-modules">
        <div className="container">

          <div className="section-heading text-center" data-aos="fade-up">
            <span>HR MANAGEMENT</span>
            <h2>Everything You Need in One Place</h2>
            <p>
              Manage your complete employee lifecycle with powerful
              HR tools.
            </p>
          </div>

          <div className="row g-4">

            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
            >
              <Link to="/employees" className="module-card">
                <div className="module-icon blue">
                  <i className="bi bi-people-fill"></i>
                </div>

                <h4>Employee Management</h4>

                <p>
                  Manage employee profiles, departments,
                  positions and personal information.
                </p>

                <span>
                  Manage Employees
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Link to="/attendance" className="module-card">
                <div className="module-icon green">
                  <i className="bi bi-calendar-check-fill"></i>
                </div>

                <h4>Attendance</h4>

                <p>
                  Track employee attendance, working hours,
                  late arrivals and absences.
                </p>

                <span>
                  View Attendance
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Link to="/leave" className="module-card">
                <div className="module-icon orange">
                  <i className="bi bi-calendar-x-fill"></i>
                </div>

                <h4>Leave Management</h4>

                <p>
                  Review leave applications and manage
                  employee leave balances.
                </p>

                <span>
                  Manage Leave
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
            >
              <Link to="/payroll" className="module-card">
                <div className="module-icon purple">
                  <i className="bi bi-cash-stack"></i>
                </div>

                <h4>Payroll</h4>

                <p>
                  Manage salaries, payslips, deductions
                  and payroll information.
                </p>

                <span>
                  View Payroll
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Link to="/recruitment" className="module-card">
                <div className="module-icon pink">
                  <i className="bi bi-person-plus-fill"></i>
                </div>

                <h4>Recruitment</h4>

                <p>
                  Track job openings, candidates,
                  interviews and hiring progress.
                </p>

                <span>
                  View Recruitment
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Link to="/events" className="module-card">
                <div className="module-icon cyan">
                  <i className="bi bi-calendar-heart-fill"></i>
                </div>

                <h4>Company Events</h4>

                <p>
                  Stay updated with birthdays, meetings,
                  holidays and company events.
                </p>

                <span>
                  View Events
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hr-cta">
        <div className="container">
          <div
            className="cta-box"
            data-aos="zoom-in"
          >
            <div>
              <span>READY TO GET STARTED?</span>

              <h2>
                Make HR Management
                <br />
                Simple & Smarter.
              </h2>

              <p>
                Manage your workforce efficiently from one
                powerful HR platform.
              </p>
            </div>

            <Link
              to="/employees"
              className="btn btn-light btn-lg"
            >
              <i className="bi bi-arrow-right-circle me-2"></i>
              Get Started
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
