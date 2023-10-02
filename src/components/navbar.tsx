"use client";

import Link from "next/link";
import logo from "/public/logo.svg";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, forwardRef, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function Navbar() {
  const [menuShow, setMenuShow] = useState(false);

  const MotionMenu = motion(Menu);
  const MotionX = motion(X);
  const handleMenuShow = () => {
    setMenuShow(!menuShow);
  };

  return (
    <>
      <motion.nav
        className="flex h-[84px] items-center px-5 justify-evenly bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="flex text-pageBlue gap-3 grow items-center">
          <Image src={logo} alt="logo" />
          <Link href="/" className="text-[16px] font-[700]">
            HelpMeOut
          </Link>
        </div>
        <AnimatePresence>
          {!menuShow ? (
            <MotionMenu
              className="lg:hidden text-pageBlue"
              onClick={handleMenuShow}
              initial={{ opacity: 0, translateY: -10, scale: 0 }}
              animate={{ opacity: 1, translateY: 0, scale: 1 }}
              exit={{ opacity: 0, translateY: 10, scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                staggerChildren: 4,
              }}
            />
          ) : (
            <MotionX
              className="lg:hidden text-pageBlue"
              onClick={handleMenuShow}
              initial={{ opacity: 0, translateY: -10, scale: 0 }}
              animate={{ opacity: 1, translateY: 0, scale: 1 }}
              exit={{ opacity: 0, translateY: 10, scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                staggerChildren: 4,
              }}
            />
          )}
        </AnimatePresence>

        <div className="hidden lg:flex grow-[3] justify-center gap-9">
          <Link
            href="#features"
            className="hover:scale-150 duration-300 delay-150 ease-in-out"
          >
            Features
          </Link>
          <Link
            href="/"
            className="hover:scale-150 duration-300 delay-150 ease-in-out"
          >
            How it works
          </Link>
        </div>

        <div className="hidden lg:flex grow">
          <Link
            href="/"
            className="text-[18px] font-[600] text-[#120B48] self-end"
          >
            Get Started
          </Link>
        </div>
      </motion.nav>
      <AnimatePresence>
      {menuShow && (
        <motion.div
          className="flex flex-col lg:hidden py-5 items-center gap-10"
          initial={{ opacity: 0, translateY: -10, scale: 0, translateX: -10 }}
          animate={{ opacity: 1, scale: 1, translateY: 0, translateX: 0}}
          exit={{ opacity: 0, translateY: 10, scale: 0, translateX: -10 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Link
            href="#features"
            className="hover:scale-150 duration-300 delay-150 ease-in-out"
          >
            Features
          </Link>
          <Link
            href="#howitworks"
            className="hover:scale-150 duration-300 delay-150 ease-in-out"
          >
            How it works
          </Link>

          <Link href="/" className="text-[18px] font-[600] text-[#120B48]">
            Get Started
          </Link>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
