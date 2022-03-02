import "./index.css";
import React, { useState, useEffect } from "react";
function Nav() {
  const [addUser, Login] = useState({});
  useEffect(() => {
      setInterval(() => {
          const userString = localStorage.getItem("Login");
          const addUser = JSON.parse(userString);
          addUser(addUser);
          }, [])
  }, 5000);
  const logout = () => {
    return localStorage.removeItem("Login || addUser");
}

  if (!Login || !addUser) {
      return (
            <section id="menu">
              <div className="container">
                <a className="navbar-brand" id="name">
                  {" "}
                  <img src="assets/images/logo/logo.png" alt="logo" />{" "}
                </a>
                <div className="menubar">
                  <nav className="navbar navbar-default">
                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div className="navbar-header">
                      <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Toggle navigation.</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>
                    {/* <!--/.navbar-header --> */}
      
                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div
                      className="collapse navbar-collapse"
                      id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav navbar-right">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/services">Service</a>
                        </li>
                        <li>
                          <a href="/product">Products</a>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                        <li>
                          <a href="/addUser">Sign Up</a>
                        </li>
                        <li>
                          <a href="/Login">Login</a>
                        </li>
                        <li>
                          <a href="/cart">
                            <i class="fa-solid fa-cart-plus"></i> (1) Cart
                          </a>
                        </li>
                      </ul>
                      {/* <!-- / ul --> */}
                    </div>
                    {/* ><!-- /.navbar-collapse --> */}
                  </nav>
                  {/* <!--/nav --> */}
                </div>
                {/* <!--/.menubar --> */}
              </div>
              {/* <!-- /.container --> */}
            </section>
        );
      }
      if (Login || addUser) {
        return (
<section id="menu">
              <div className="container">
                <a className="navbar-brand" id="name">
                  {" "}
                  <img src="assets/images/logo/logo.png" alt="logo" />{" "}
                </a>
                <div className="menubar">
                  <nav className="navbar navbar-default">
                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div className="navbar-header">
                      <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Toggle navigation.</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>
                    {/* <!--/.navbar-header --> */}
      
                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div
                      className="collapse navbar-collapse"
                      id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav navbar-right">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/services">Service</a>
                        </li>
                        <li>
                          <a href="/product">Products</a>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                        <li>
                          <a href="/Profile">Profile</a>
                        </li>
                        <li>
                          <a href="/Login" onClick={logout}> Log Out</a>
                        </li>
                        <li>
                          <a href="/cart">
                            <i class="fa-solid fa-cart-plus"></i> (1) Cart
                          </a>
                        </li>
                      </ul>
                      {/* <!-- / ul --> */}
                    </div>
                    {/* ><!-- /.navbar-collapse --> */}
                  </nav>
                  {/* <!--/nav --> */}
                </div>
                {/* <!--/.menubar --> */}
              </div>
              {/* <!-- /.container --> */}
            </section>
        );
      }
    }

export default Nav;
