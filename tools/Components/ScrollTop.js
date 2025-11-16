"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  let scrollTimeout;

  useEffect(() => {
    const handleScroll = () => {
    
      if (window.scrollY > 200) {
        setShow(true);
      }

      clearTimeout(scrollTimeout);

     
      scrollTimeout = setTimeout(() => {
        setShow(false);
      }, 800);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-8 right-8 cursor-pointer p-3 rounded-full bg-blue-800 text-white transition-all duration-500 shadow-lg ${
        show ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"
      }`}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
