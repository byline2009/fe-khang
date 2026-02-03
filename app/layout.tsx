"use client";
import "../styles/global.scss";
import Header from "../components/header/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/footer/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import 'react-modern-drawer/dist/index.css'

config.autoAddCss = false;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    console.log("isOpen", isOpen);
    setIsOpen(prev => !prev)

  }
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bitcount+Single:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rowdies:wght@300;400;700&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>

      <body
      >
        <div className="main-layout">
          <Header toggleDrawer={toggleDrawer} isOpen={isOpen} />
          {children}
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="houze-drawer"
          size={300}
          zIndex={9999}
          style={{ height: '100%' }}
        >
          <MobileMenu toggleMenu={toggleDrawer} isOpen={isOpen} />
        </Drawer>
      </body>
    </html>
  );
}
