"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import observanceLogo from "@/assets/images/commonImages/observance.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar fixed-top w-full">
      <div className=" flex bg-blue-500 justify-center items-center p-4 gap-4 ">
        {/* Logo */}
        <Link href="/" className="logo">
          <Image
            src={observanceLogo}
            alt="Observance Logo"
            width={250}
            height={61}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="nav-links flex gap-4 justify-center items-center">
          <Link href="/">Home</Link>

          <div className="dropdown">
            <Link href="/about">About</Link>
            {/* <div className="dropdown-menu">
              <Link href="/about/company-overview">Company Overview</Link>
              <Link href="/about/work-culture">Work Culture</Link>
              <Link href="/about/careers">Careers</Link>
            </div> */}
          </div>

          <div className="dropdown">
            <Link href="/products">PRODUCTS</Link>
            {/* <div className="dropdown-menu">
              <Link href="/products/phlebotomy-app">Phlebotomy App</Link>
              <Link href="/products/food-ordering-tracking">
                Food Ordering & Tracking
              </Link>
            </div> */}
          </div>
          <div className="dropdown">
            <Link href="/products">TECHNOLOGIES</Link>
            {/* <div className="dropdown-menu">
              <Link href="/products/phlebotomy-app">Phlebotomy App</Link>
              <Link href="/products/food-ordering-tracking">
                Food Ordering & Tracking
              </Link>
            </div> */}
          </div>

          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        {/* <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button> */}
      </div>

      {/* Mobile Menu */}
      {/* {menuOpen && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )} */}
    </header>
  );
}
