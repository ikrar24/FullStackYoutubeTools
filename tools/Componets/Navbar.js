"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ToolsLogo from "../Assets/ToolsLogo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Current route

  // ✅ Close menu automatically when pathname changes (user navigates)
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // ✅ Helper function to check active link (case-insensitive)
  const isActive = (path) => pathname?.toLowerCase() === path.toLowerCase();

  return (
    <header className="navbar-header bg-white top-0 z-50">
      <nav className="navbar-container max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <Link href="/" className="logo">
          <Image src={ToolsLogo} alt="logo" width={130} priority quality={75} />
        </Link>

        {/* Menu Links */}
        <ul
          className={`nav-links transition-all duration-300 ease-in-out ${
            menuOpen ? "active" : ""
          }`}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/seo-analyzer", label: "SEO Analysis" },
            { href: "/description-generator", label: "Description Generator" },
            { href: "/title-suggestion", label: "Title Suggestion" },
            { href: "/thumbnails-generator", label: "Thumbnails Generator" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-4 py-2 rounded-b-sm block ${
                  isActive(href)
                    ? "bg-blue-600 text-white underline"
                    : "text-black hover:text-blue-600"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
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
