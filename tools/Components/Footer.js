import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center  ">

        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">BoostViews</h3>
          <p className="text-gray-400 text-sm mt-1">
            <strong className="font-light">
              Helping you grow your YouTube channel with smart tools.
            </strong>
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          {/* Footer Links */}
          <Link href="/privacy-policy" className="hover:text-white text-sm">
            Privacy Policy
          </Link>
          <Link href="/disclaimer" className="hover:text-white text-sm">
            Disclaimer / Terms
          </Link>

          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            &copy; {new Date().getFullYear()} BoostViews. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
