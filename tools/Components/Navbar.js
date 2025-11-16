"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import { createToken } from "@/utils/createToken";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (path) => pathname?.toLowerCase() === path.toLowerCase();

  // Fetch token once
  useEffect(() => {
    async function fetchToken() {
      const tokenData = await createToken();
      console.log("Token Response:", tokenData);
    }
    fetchToken();
  }, []);

  return (
    <header className="navbar-header bg-white top-0 z-50">
      <nav className="navbar-container max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="logo">
          <Image
            src="/ToolsLogo.png"
            alt="logo"
            width={150}
            height={150}
            priority
            quality={75}
            className="h-auto"
          />
        </Link>

        {/* Menu Links */}
        <ul
          className={`nav-links transition-all duration-300 ease-in-out ${
            menuOpen ? "active" : ""
          }`}
        >
          <li>
            <Link
              href="/"
              className={`px-4 py-2 block ${
                isActive("/") ? "active-link" : ""
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/seo-analyzer"
              className={`px-4 py-2 block ${
                isActive("/seo-analyzer") ? "active-link" : ""
              }`}
            >
              SEO Analysis
            </Link>
          </li>

          <li>
            <Link
              href="/description-generator"
              className={`px-4 py-2 block ${
                isActive("/description-generator") ? "active-link" : ""
              }`}
            >
              Description Generator
            </Link>
          </li>

          <li>
            <Link
              href="/title-suggestion"
              className={`px-4 py-2 block ${
                isActive("/title-suggestion") ? "active-link" : ""
              }`}
            >
              Title Suggestion
            </Link>
          </li>

          {/* Dropdown - Desktop Hover / Mobile Always Visible */}
          <li className="dropdown">
            <div className="dropdown-toggle">
              <Link
                href="/thumbnails-generator"
                className={`px-4 py-2 block flex items-center gap-1 ${
                  isActive("/thumbnails-generator") ? "active-link" : ""
                }`}
              >
                Thumbnails Generator
                <span className="arrow">›</span>
              </Link>
            </div>

            {/* Dropdown Content */}
            <ul className="dropdown-menu">
              <li>
                <Link
                  href="/thumbnails-downloader"
                  className={`block px-4 py-2 ${
                    isActive("/thumbnails-downloader") ? "active-link" : ""
                  }`}
                >
                  Thumbnails Downloader
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="menu-btn md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
