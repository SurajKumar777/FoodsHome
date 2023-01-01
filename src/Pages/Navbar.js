import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { useCart } from "react-use-cart";


const Navbar = () => {
  const{ totalUniqueItems } = useCart();
    return(
        <>
        <div className="container-fluid bg-dark ">
              <div className="row">
                <div className="col-10 mx-auto">
                  <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                      <NavLink className="navbar-brand text-light fs-2"  to="/">FOODSHOME</NavLink>
                      <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <NavLink className="nav-link active text-light hover-menu" aria-current="page"  to="/">Home</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link text-light hover-menu" to="#">Contact Us</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link text-light hover-menu" to="/login">Login</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link active text-light hover-menu" aria-current="page" to="signup">Signup</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link active hover-menu" aria-current="page" to="/cart"><i class="fa-solid fa-cart-shopping"></i><span className="text-light">{totalUniqueItems}</span></NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            
        </>
    )
}

export default Navbar;