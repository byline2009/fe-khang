/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { redirect } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

const Header = () => {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setHasToken(!!token);
  }, []);

  if (!hasToken) return null; // ❌ không render header
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
          <button
            onClick={() => {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("user");
              redirect("/login");
            }}
            className="btn btn-solid"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
