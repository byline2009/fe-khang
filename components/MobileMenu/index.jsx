/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MobileMenu = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <div className="menu-mobile">
      <div className="head-menu">
        <Link href="/" passHref>
          <img
            src="logos/logo-menu-left.png"
            alt="logo"
            width="80"
            height="24"
          />
        </Link>
        <button
          className={`btn-toggleMenu ${isOpen && "isOpen"}`}
          onClick={() => props.toggleMenu()}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <button
        onClick={() => {
          router.push("solution/11");
        }}
      >
        Click mee
      </button>
    </div>
  );
};

export default MobileMenu;
