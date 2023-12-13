import React, { useContext, useState } from "react";
import { DiAndroid } from "react-icons/di";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import Button from "react-bootstrap/Button";
import "./navbarh.css";
import { newContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

function NavbarH() {
  const [active, setActive] = useState("navbar");

  const { userdata, setUserdata } = useContext(newContext);

  const data = JSON.parse(localStorage.getItem("userdata"));

  setUserdata(data);
  const nav = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    window.location.href = "./";
  };

  const shownav = () => {
    setActive("navbar activeNavbar");
  };
  const remove = () => {
    setActive("navbar");
  };
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1>
              <DiAndroid className="icon" />
              My App.
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navlists flex">
            <li className="navItem">
              <img
                src={data.userImage}
                alt="Profile"
                className="profileImage"
              />
              <a href="#" className="navLink">
                {data.username}
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                {data.useremail}
              </a>
            </li>

            <li className="navItem">
              <Link to="/post">
                <a href="#" className="navLink">
                  New Post
                </a>
              </Link>
            </li>

            <li className="navItem">
              <Button variant="danger" onClick={logout}>
                logout
              </Button>
            </li>
          </ul>

          <div onClick={remove} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={shownav} className="toogleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
}

export default NavbarH;
