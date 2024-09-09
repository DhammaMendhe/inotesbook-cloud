import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();
  const navigate = useNavigate();
  // useEffect(()=>{
  //   console.log(location);
  // },[location])
  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const handleluser = () => {
    if (localStorage.getItem("token")) {
      console.log("token");
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className={`nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  aria-disabled="true"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>

            {!localStorage.getItem("token") ? (
              <form action="">
                <Link
                  type="button"
                  className="btn btn-primary mx-2"
                  to="/Login"
                >
                  login
                </Link>
                <Link
                  type="button"
                  className="btn btn-primary mx-2"
                  to="/Signup"
                >
                  Signup
                </Link>
              </form>
            ) : (
              <div className="container d-flex justify-content-end">
                <Link
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={handleluser}
                  to={'/loginUser'}
                >
                  user info
                </Link>
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={handlelogout}
                >
                  logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
