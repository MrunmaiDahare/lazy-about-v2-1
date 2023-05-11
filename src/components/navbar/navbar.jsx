import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../assets/images/logo.png";
// import "./header.scss";
import "./navbar.scss";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsCart, BsPerson } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [isOpenMobileSearch, setIsOpenMobileSearch] = useState(false);

  const handleMobileSearchOpen = () => setIsOpenMobileSearch(true);
  const handleMobileSearchClose = () => setIsOpenMobileSearch(false);
  const handleSearchOpen = () => setOpen(true);
  const handleSearchClose = () => setOpen(false);


  return (
    <div>
      <nav className="nav-main">
        <div className="sec-nav">
          <div className="nav-div">
            <img src={Logo} alt="Logo" />
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">lounger</a>
            <a href="/">puffy</a>
            <a href="/">Make Your Custom Furniture</a>
          </div>
          <div className="nav-div-2">
            <div onClick={handleSearchOpen}>
              <AiOutlineSearch />
            </div>
            <AiOutlineHeart />
            <AiOutlineShoppingCart />
            <BsPerson />
          </div>
        </div>
      </nav>
      {open && (
        <div className="search-nav-whole">
          <nav className="small-nav">
            <input
              type="text"
              placeholder="Search products, pages & help topics…"
            />
            <span className="cross-search" onClick={handleSearchClose}>
              <RxCross1 />
            </span>
          </nav>
        </div>
      )}

      {/* *********************** Mobile Navbar *************************** */}

      <nav className="mobile-navbar">
        <div className="three-bar">
          <GoThreeBars />

          {/* <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
            <Offcanvas.Body>
              <ul
                className="fc-light fs-mobile-menu"
                style={{ listStyle: "none" }}
              >
                <li>
                  <div class="dropdown">
                    <a
                      class="dropdown-toggle fc-light"
                      style={{ textDecoration: "none" }}
                      href="/"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sofa
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <a class="dropdown-item" href="/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>Chairs</li>
                <li>lounger</li>
                <li>puffy</li>
                <li>Make Your Custom Furniture</li>
              </ul>
              
            </Offcanvas.Body>
          </Offcanvas> */}
        </div>
        <div className="logo">
          <img src={Logo} alt="" className="logo-img" />
        </div>
        <div className="icons">
          <div >
            {isOpenMobileSearch ? (<BsCart/>): (<AiOutlineSearch onClick={handleMobileSearchOpen}/>)}
          </div>
          <BsPerson />
        </div>
      </nav>

      {isOpenMobileSearch && (
        <div className="search-bar-mobile">
          <div className="wrap">
            <input
              type="text"
              placeholder="Search products, pages & help topics…"
            />
            <RxCross1 onClick={handleMobileSearchClose}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
