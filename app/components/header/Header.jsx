import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="logo-group">
          {/* <button className="btn-toggleMenu hide-desktop">Button Mobile</button> */}
          <div className="block-center">
            <div className="logo">
              <a href="">
                <img src="logos/logo-menu-left.png" alt="" />
              </a>
            </div>
            <p className="slogan">Foodhub for Business</p>
          </div>
        </div>
        <div className="group-right">
          <button className="btn btn-primary ">Login</button>
          <button className="btn btn-solid">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
