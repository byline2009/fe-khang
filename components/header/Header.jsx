/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { redirect } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import { menuData } from "@/config/constants";
import Link from "next/link";

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
            {/* <p className="slogan">Foodhub for Business</p> */}
            <div className="navigation">
              {menuData.map((object, index) => (
                <div className="nav-item" key={index}>
                  <Link href={object.link}>
                    <span className="me-2">
                      {object.label}
                      {object.children && (
                        <i
                          className="fa fa-chevron-down"
                          aria-hidden="true"
                        ></i>
                      )}
                    </span>
                  </Link>
                  {object.children && (
                    <div className="drop-menu">
                      {object.children.map((subItem, subIdx) => (
                        <Link
                          key={`${index}sub-${subIdx}`}
                          href={subItem.link}
                          className="sub-drop-menu"
                          target={subItem.newTab ? "_blank" : "_self"}
                        >
                          <span>
                            <b>{subItem.label}</b>
                            <br />
                            <span>{subItem.description}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
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
