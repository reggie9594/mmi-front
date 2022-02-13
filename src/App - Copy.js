import React, { Component } from "react";
import { Route } from "react-router-dom";

// import Home from './components/Home';
// import Dashboard from './components/Dashboard';
// import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="mobile-sticky-body-overlay"></div>

        <div className="wrapper">
          {/* LEFT SIDEBAR WITH FOOTER */}
          <aside className="left-sidebar bg-sidebar">
            <div id="sidebar" className="sidebar sidebar-with-footer">
              {/* Aplication Brand  */}
              <div className="app-brand">
                <a href="/index.html">
                  <span className="brand-name">MUSIC MAKES IT</span>
                </a>
              </div>
              {/* begin sidebar scrollbar  */}
              <div className="sidebar-scrollbar">
                {/* sidebar menu  */}
                <ul className="nav sidebar-inner" id="sidebar-menu">
                  <li className="has-sub  expand">
                    <a className="sidenav-item-link">
                      <i className="mdi mdi-view-dashboard-outline"></i>
                      <span className="nav-text">Home</span>{" "}
                      <b className="caret"></b>
                    </a>
                  </li>

                  <li className="has-sub">
                    <a className="sidenav-item-link">
                      <i className="mdi mdi-folder-multiple-outline"></i>
                      <span className="nav-text">Dashboard</span>{" "}
                      <b className="caret"></b>
                    </a>
                  </li>

                  <li className="has-sub">
                    <a className="sidenav-item-link">
                      <i className="mdi mdi-folder-multiple-outline"></i>
                      <span className="nav-text">Cart</span>{" "}
                      <b className="caret"></b>
                    </a>
                  </li>
                </ul>
              </div>

              <hr className="separator" />
            </div>
          </aside>

          <div className="page-wrapper">
            {/* Header  */}
            <header className="main-header " id="header">
              <nav className="navbar navbar-static-top navbar-expand-lg">
                {/* search form  */}
                <div className="search-form d-none d-lg-inline-block">
                  <div className="input-group">
                    <button
                      type="button"
                      name="search"
                      id="search-btn"
                      className="btn btn-flat"
                    >
                      <i className="mdi mdi-magnify"></i>
                    </button>
                    <input
                      type="text"
                      name="query"
                      id="search-input"
                      className="form-control"
                      placeholder="Search"
                      autofocus
                      autocomplete="off"
                    />
                  </div>
                  <div id="search-results-container">
                    <ul id="search-results"></ul>
                  </div>
                </div>

                <div className="navbar-right ">
                  <ul className="nav navbar-nav"></ul>
                </div>
              </nav>
            </header>

            <div className="content-wrapper">
              <div className="content">
                {/* <!-- Top Statistics --> */}
                <div className="row">
                  <div className="col-xl-4 col-sm-6">
                    <div className="card card-mini mb-4">
                      <div className="card-body">
                        <h2 className="mb-1">71,503</h2>
                        <p>Sales</p>
                        <div className="chartjs-wrapper">
                          {/* <canvas id="barChart"></canvas> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6">
                    <div className="card card-mini  mb-4">
                      <div className="card-body">
                        <h2 className="mb-1">9,503</h2>
                        <p>Customers</p>
                        <div className="chartjs-wrapper">
                          {/* <canvas id="dual-line"></canvas> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-6">
                    <div className="card card-mini mb-4">
                      <div className="card-body">
                        <h2 className="mb-1">71,503</h2>
                        <p>Orders</p>
                        <div className="chartjs-wrapper">
                          {/* <canvas id="area-chart"></canvas> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    {/* <!-- Top Products --> */}
                    <div className="card card-default" data-scroll-height="580">
                      <div className="card-header justify-content-between mb-4">
                        <h2>Top Products</h2>
                        <div>
                          <button className="text-black-50 mr-2 font-size-20">
                            <i className="mdi mdi-cached"></i>
                          </button>
                        </div>
                      </div>
                      <div className="card-body py-0">
                        <div className="media d-flex mb-5">
                          <div className="media-image align-self-center mr-3 rounded">
                            <a href="#">
                              <img
                                src="assets/img/products/p1.jpg"
                                alt="customer image"
                              />
                            </a>
                          </div>
                          <div className="media-body align-self-center">
                            <a href="#">
                              <h6 className="mb-3 text-dark font-weight-medium">
                                {" "}
                                Coach Swagger
                              </h6>
                            </a>
                            <p className="float-md-right">
                              <span className="text-dark mr-2">20</span>Sales
                            </p>
                            {/* <p className="d-none d-md-block">Statement belting with double-turnlock hardware adds “swagger” to a simple.</p> */}
                            <p className="mb-0">
                              <span className="text-dark ml-3">$250</span>
                            </p>
                          </div>
                        </div>

                        <div className="media d-flex mb-5">
                          <div className="media-image align-self-center mr-3 rounded">
                            <a href="#">
                              <img
                                src="assets/img/products/p2.jpg"
                                alt="customer image"
                              />
                            </a>
                          </div>
                          <div className="media-body align-self-center">
                            <a href="#">
                              <h6 className="mb-3 text-dark font-weight-medium">
                                {" "}
                                Coach Swagger
                              </h6>
                            </a>
                            <p className="float-md-right">
                              <span className="text-dark mr-2">20</span>Sales
                            </p>
                            {/* <p className="d-none d-md-block">Statement belting with double-turnlock hardware adds “swagger” to a simple.</p> */}
                            <p className="mb-0">
                              <span className="text-dark ml-3">$250</span>
                            </p>
                          </div>
                        </div>

                        <div className="media d-flex mb-5">
                          <div className="media-image align-self-center mr-3 rounded">
                            <a href="#">
                              <img
                                src="assets/img/products/p3.jpg"
                                alt="customer image"
                              />
                            </a>
                          </div>
                          <div className="media-body align-self-center">
                            <a href="#">
                              <h6 className="mb-3 text-dark font-weight-medium">
                                {" "}
                                Gucci Watch
                              </h6>
                            </a>
                            <p className="float-md-right">
                              <span className="text-dark mr-2">10</span>Sales
                            </p>
                            {/* <p className="d-none d-md-block">Statement belting with double-turnlock hardware adds “swagger” to a simple.</p> */}
                            <p className="mb-0">
                              <span className="text-dark ml-3">$50</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className="footer mt-auto"></footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
