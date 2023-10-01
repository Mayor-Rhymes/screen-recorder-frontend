"use client";

import Link from "next/link";
import logo from "/public/logo.svg";
import Image from "next/image";
import { motion } from "framer-motion";
// import {framer} from '@/components/clients/framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      className="flex h-[84px] items-center px-5 justify-evenly"
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
      <div className="flex grow-[3] justify-center gap-9">
        <Link href="/" className="hover:scale-150 duration-300 delay-150 ease-in-out">Features</Link>
        <Link href="/" className="hover:scale-150 duration-300 delay-150 ease-in-out">How it works</Link>
      </div>

      <div className="flex grow">
        <Link
          href="/"
          className="text-[18px] font-[600] text-[#120B48] self-end"
        >
          Get Started
        </Link>
      </div>
    </motion.nav>
  );
}
